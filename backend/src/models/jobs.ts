import { Schema, model, Date, Types } from 'mongoose';

interface IJobs {
    role: string,
    description: string,
    company: string,
    jobType: string,
    jobLocation: string,
    expirationDate: Date
    category: Types.ObjectId
}

const jobSchema = new Schema<IJobs>({
    role: { type: String, required: true },
    description: { type: String, required: true },
    company: { type: String, required: true },
    jobType: { type: String },
    jobLocation: { type: String, required: true },
    expirationDate: { type: Date },
    category: { type: Schema.Types.ObjectId, ref: 'Category' }
    
}, {
    timestamps: true
})

const Jobs = model<IJobs>('Jobs', jobSchema)

export { Jobs }