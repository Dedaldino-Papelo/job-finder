import express from 'express'
import { store, index } from '../controllers/categoryController'
const router = express.Router()

router.post("/", store)
router.get("/", index)

export default router