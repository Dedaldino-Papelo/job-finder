import { category } from "./category"

export interface Job {
    _id?: string,
    role: string,
    description: string,
    company: string,
    companyImage: string,
    jobType?: string,
    jobLocation: string,
    expirationDate: Date
    category: category,
    createdAt?: string,
    updatedAt?: string
}


