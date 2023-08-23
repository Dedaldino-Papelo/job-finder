import { Request, Response } from 'express'
import { Jobs } from '../models/jobs'
import { Category } from '../models/category'

export const store = (req: Request, res: Response) => {
    console.log(req.body)
}