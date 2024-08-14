import { Company } from "../models/Company.Model.js";
import { Wastes } from "../models/Waste.Model.js";

await Company.sync();

export const createCompany = async(req, res) => {
    console.log('Olha o que deu', req.body)
    const {name, email, location, capacityStorage, status, password} = req.body;

    try{
        if(!name || !email || !location || !capacityStorage || typeof status === 'undefined' || !password){
            return res.status(400).json({message:"All fields are required"});
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newCompany = await Company.create({
            name,
            email, 
            location, 
            capacityStorage,
            // ver se vou manter o status mesmo
            status,
            password: hashedPassword,
        });
        
        return res.status(201).json({message: "Company registered successfully", newCompany});

    }catch(error){
        console.error('Erro que deu', error)
       return res.status(400).json({message: error});
    }
};

export const getAllCompany = async(req, res) => {
    try{

        // filtrei aq pra tirar email e senha de ser exibido
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

        return res.status(200).json({ company });

    }catch(error){
        return res.status(400).json({message: error.message});
    }
}

export const updateCompany = async(req, res) =>{
    try{
        const { id } = req.params;
        const { name, location, capacityStorage, status } = req.body;

        if(!id || !name || !location || !capacityStorage || status){
            return res.status(400).json({message:"All fields are required"});
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

        if(!id){
            return res.status(400).json({message: "Company id is required"});
        }

        await Company.destroy({
            where: { id }
        });

        return res.status(200).json({message: "Company deleted successfully"});

    }catch(error){
        return res.status(400).json({message: error});
    }
};
