import { where } from "sequelize";
import { Company } from "../models/Company.Model.js";
import { Wastes } from "../models/Waste.Model.js";

await Company.sync();

export const createCompany = async(req, res) => {
    const {name, location, capacityStorage, status} = req.body;

    try{
        if(!name || !location || !capacityStorage || typeof status === 'undefined'){
            return res.status(400).json({menssage:"All fields are required"});
        }

        const newCompany = await Company.create({
            name, 
            location, 
            capacityStorage,
            status
        });
        
        return res.status(201).json({menssage: "Company created successfully", newCompany});

    }catch(error){
       return res.status(400).json({message: error});
    }
};

export const getAllCompany = async(req, res) => {
    try{

        const companies = await Company.findAll();
        
        if(companies.length < 1){
            return res.status(400).json({menssage: "No company found"});
        }

        return res.status(200).json({ companies });

    }catch(error){
        return res.status(400).json({message: error});
    }
};

export const getCompayId = async(req, res) =>{
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
            return res.status(400).json({menssage: "Company id is required"});
        }

        if(!company){
            return res.status(400).json({menssage: "Company no found"});
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
        const { name, location, /*wastesId,*/ capacityStorage, status } = req.body;

        if(!id || !name || !location /*|| !wastesId */|| !capacityStorage || status){
            return res.status(400).json({menssage:"All fields are required"});
        }

        await Company.update({
            name, 
            location, 
            capacityStorage,
            status
        },{
            where: { id }
        });

        return res.status(200).json({menssage: "Company update successfully"});

    }catch(error){
        return res.status(400).json({message: error});
    }
};

export const deleteCompany = async(req, res) =>{

    try{

        const { id } = req.params;

        if(!id){
            return res.status(400).json({menssage: "Company id is required"});
        }

        await Company.destroy({
            where: { id }
        });

        return res.status(200).json({menssage: "Company deleted successfully"});

    }catch(error){
        return res.status(400).json({message: error});
    }
};