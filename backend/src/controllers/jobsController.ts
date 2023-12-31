import { Request, Response } from 'express'
import { Jobs } from '../models/jobs'
import { Category } from '../models/category'

export const store = async (req: Request, res: Response) => {
    const { categoryId } = req.params

    try {
        const category = await Category.findById(categoryId)
        if(category) {
            req.body.category = category
            const job = await Jobs.create(req.body)
            return res.status(200).json(job)
        }
        res.status(400).json("Sorry but this category does nt exists")

    } catch (error) {
        res.status(400).send("Server error" + error)
    }
}

export const index = async (req: Request, res: Response) => {
    try {
        const jobs = await Jobs.find().populate("category").exec()
        return res.status(200).json(jobs)
    } catch (error) {
        res.status(400).send("Server error" + error)
    }
}

export const show = async (req: Request, res: Response) => {
    const { id } = req.params
    try {
        const job = await Jobs.findById(id).populate('category').exec()
        if(job) {
            return res.status(200).json(job)
        }
        return res.status(400).json("this job does not exist" )
        
    } catch (error) {
        res.status(400).send("Server error" + error)
    }
}

export const update = async (req: Request, res: Response) => {
    const { id } = req.params
    try {
        const udpdateJob = await Jobs.findByIdAndUpdate(id, req.body, {
            new: true
        })
        return res.status(200).json(udpdateJob)
    } catch (error) {
        res.status(400).send("Server error" + error)
    }
}

export const remove = async(req: Request, res: Response) => {
    try {
        await Jobs.findByIdAndDelete(req.params.id)
    } catch (error) {
        res.status(400).send("Server error" + error)
    }
}