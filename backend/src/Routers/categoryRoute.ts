import express from 'express'
import { store } from '../controllers/categoryController'
const router = express.Router()

router.post("/", store)

export default router