import { where } from "sequelize";
import { Company } from "../models/Company.Model.js";

export const createCompany = async(req, res) => {
    const {name, location, wastesId, capacityStorage, status} = req.body;
    await Company.sync();

    try{
        if (!name || !location || !wastesId || !capacityStorage || !status) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const newCompany = await Company.create({
            name, 
            location, 
            wastesId, 
            capacityStorage,
            status
        });
        
        return res.status(201).json({message: "Company created successfully", newCompany});

    }catch(error){
       return res.status(400).json({message: error});
    }
};

export const getAllCompany = async(req, res) => {
    try{

        const companies = await Company.findAll();
        
        if(companies.length < 1){
            return res.status(400).json({message: "No company found"});
        }

        return res.status(200).json({ companies });

    }catch(error){
        return res.status(400).json({message: error});
    }
};

export const getCompanyId = async(req, res) =>{
    try{

        const { id } = req.params;
        const company = await Company.findOne({where: { id }});

        if(!id){
            return res.status(400).json({message: "Company id is required"});
        }

        if(!company){
            return res.status(400).json({message: "Company no found"});
        }

        return res.status(200).json({ company });

    }catch(error){
        return res.status(400).json({message: error});
    }
}

export const updateCompany = async(req, res) =>{
    try{
        const { id } = req.params;
        const { name, location, wastesId, capacityStorage, status } = req.body;

        if(!id || !name || !location || !wastesId || !capacityStorage || status){
            return res.status(400).json({message:"All fields are required"});
        }

        await Company.update({
            name, 
            location, 
            wastesId, 
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