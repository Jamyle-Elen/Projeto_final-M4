
import { Collection } from "../models/CollectionRequest.Model.js";
  
await Collection.sync();

export const createCollection = async (req, res)=> {
 const {companyId, wasteId, status, location, quantity} = req.body;
 try{
    if(!companyId || !wasteId || !location || !quantity){
        return res.status(400).json({message: "Fill in all required fields"})
    }
    const newCollection = await Collection.create({
    companyId,
     wasteId,
     status,
     location,
     quantity
    })
    return res.status(201).json({message: "Request created", newCollection})
    
    } catch(error) {
        return res.status(400).json({message: error})
    }

}

export const updateCollectionStatus = async(req, res) =>{
    const { id } = req.params;
    const { status } = req.body;
    try{
        if(!id || !status){
            return res.status(400).json({message: "Collection id status are required"})
        }

        const validStatuses = ['Completed', "In Progress", "Pending", "Cancelled" ];
        if(!validStatuses.includes(status)){
            return res.status(400).json({message: "Invalid status value"})
        }
        const updated = await Collection.update({ status }, {
            where: { id }
        });

        if (updated === 0) {
            return res.status(404).json({ message: "Collection not found" });
        }

        return res.status(200).json({ message: "Collection status updated successfully" });

    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};
        


export const deleteCollection = async(req, res) =>{
    try{
        const { id } = req.params;
        if(!id){
            return res.status(400).json({message: "Collection id is required"})
        }

        await Collection.destroy({
            where: { id }
        });

        return res.status(200).json({message: "Collection deleted successfully"})

    }catch(error){
        return res.status(400).json({message: error})
    }
};
