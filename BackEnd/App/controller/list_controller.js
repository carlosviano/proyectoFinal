import { currentDir } from "../index.js";
import dao from "../services/dao.js";


const controller = {};

controller.addToList = async(req,res) => {
    const {name, type} = req.body
    console.log(req.body)
    if(!name || !type ) return res.status(400).send("Error receiving body")

    try {
        const showName = await dao.getShowByName(req.params.id, name)

        if(showName.length > 0) return res.status(409).send("User already added movie to list")
        if (!req.query) {
          return res.status(400).send("No se ha indicado el id del usuario");
        }
    
        
        await dao.addToList(req.params.id,{
            name:name,
            type:type,
        });
        return res.send(`${type} ${name} has been added to ${req.params.id}'s list`)

    } catch (e){
        console.log(e.message)
    }
}

export default controller