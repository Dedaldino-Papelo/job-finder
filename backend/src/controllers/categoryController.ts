import { Request, Response } from "express";
import { Category } from "../models/category";

/* endpoints -> 
    Post => store, 
    Get => index, 
    Get => show by id, 
    Delete => destroy, 
    Put/Patch => update 
*/

export const store = async (req: Request, res: Response) => {
    const { name } = req.body

    try {
        const category = await Category.create({ name })
        res.status(200).json(category)
    } catch (error) {
        res.status(400).send("there was an error " + error)
    }
}

export const index = async (req: Request, res: Response) => {
    try {
        const category = await Category.find()
        res.status(200).json(category)
    } catch (error) {
        res.status(400).send("there was an error " + error)
    }
}