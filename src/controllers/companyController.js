import bcrypt from 'bcrypt';
import { Company } from "../models/Company.Model.js";
import { Wastes } from "../models/Waste.Model.js";

await Company.sync();

export const createCompany = async(req, res) => {
    const {name, email, location, capacityStorage, password} = req.body;

    try{
        if(!name || !email || !location || !capacityStorage || !password){
            return res.status(400).json({message:"All fields are required"});
        }

        const company = await Company.findOne({where: {email}});
        if(company) return res.status(400).json({message: "E-mail already exists"});   

        const hashedPassword = await bcrypt.hash(password, 10);

        const newCompany = await Company.create({
            name,
            email, 
            location, 
            capacityStorage,
            password: hashedPassword,
        });

        const companyData = newCompany.toJSON();
        delete companyData.password;
        return res.status(201).json({message: "Company registered successfully", newCompany: companyData });

    }catch(error){
        console.error('Erro que deu', error)
       return res.status(400).json({message: error});
    }
};

export const getAllCompany = async(req, res) => {
    try{
        const companies = await Company.findAll({
            attributes: ['id', 'name', 'location'],
        });
        
        if(companies.length < 1){
            return res.status(400).json({message: "No company found"});
        }

        return res.status(200).json({ companies });

    }catch(error){
        return res.status(400).json({message: error});
    }
};

export const getCompanyId = async(req, res) =>{
    async function getWastesByCompanyId(companyId) {
        const wastes = await Wastes.findAll({
            where: {
                companyId
            },
            attributes: ['id']
        });
        return wastes.map(waste => waste.id);
    }

    try{
        const { id } = req.params;
        const company = await Company.findOne({where: { id }});

        if(!id){
            return res.status(400).json({message: "Company id is required"});
        }

        if(!company){
            return res.status(400).json({message: "Company no found"});
        }

        const wastesId = await getWastesByCompanyId(id);
        company.dataValues.wastesId = wastesId;

        const companyData = company.toJSON();
        delete companyData.password;

        return res.status(200).json({ company: companyData });

    }catch(error){
        return res.status(400).json({message: error.message});
    }
}

export const updateCompany = async(req, res) =>{
    try{
        const { id } = req.params;
        const { name, location, capacityStorage, status } = req.body;
        const companyIdToken = req.user.id;

        if(!id || !name || !location || !capacityStorage || typeof status === 'undefined'){
            return res.status(400).json({message:"All fields are required"});
        }

        if(companyIdToken !== id){
            return res.status(401).json({message: "You are not authorized to update this company"});
        }

        await Company.update({
            name, 
            location, 
            capacityStorage,
            status
        },{
            where: { id }
        });

        return res.status(200).json({message: "Company update successfully"});

    }catch(error){
        return res.status(400).json({message: error});
    }
};

export const deleteCompany = async(req, res) =>{

    try{
        const { id } = req.params;
        const companyIdToken = req.user.id;

        if(!id){
            return res.status(400).json({message: "Company id is required"});
        }

        if(companyIdToken !== id){
            return res.status(401).json({message: "You are not authorized to delete this company"});
        }

        await Company.destroy({
            where: { id }
        });

        return res.status(200).json({message: "Company deleted successfully"});

    }catch(error){
        return res.status(400).json({message: error});
    }
};
