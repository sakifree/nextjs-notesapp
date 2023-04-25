// INDEX, CREATE ROUTES
import { getNotes, createNote } from "@/utils/actions";

export default async function(req, res){
    try {
        switch(req.method){
            case "GET":
                res.json(await getNotes())
                break
            case "POST":
                res.json(await createNote(req.body))
                break
            default:
                res.status(404).send("NO RESPONSE FOR THAT METHOD")
        }   
    } catch (error) {
        res.status(400).json({error})
    }
}