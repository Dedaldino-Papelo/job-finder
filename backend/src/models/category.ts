import { Schema, model, connect } from 'mongoose';

interface ICategory {
    name: string
}

const categorySchema = new Schema<ICategory>({
    name: { type: String, required: true }
}, {
    timestamps: true
})

const Category = model<ICategory>('Category', categorySchema)

export { Category }