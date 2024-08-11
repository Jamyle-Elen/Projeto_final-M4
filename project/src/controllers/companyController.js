import { Company } from "../models/Company.Model.js";

export const createCompany = async (req, res) => {
    const {name, location, wastesId, capacityStorage} = req.body;
    await Company.sync();

    try{
        if(!name || !location || !wastesId || !capacityStorage){
            return res.status(400).json({menssage:"All fields are required"});
        }

        const newCompany = await Company.create({
            name, 
            location, 
            wastesId, 
            capacityStorage
        });
        
        return res.status(201).json({menssage: "Company created successfully", newCompany});

    }catch(error){
       return res.status(400).json({message: error});
    }
}