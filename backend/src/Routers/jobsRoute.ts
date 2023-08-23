import express from 'express'
import { store, index } from '../controllers/jobsController'
const router = express.Router()

router.post("/:categoryId", store)
router.get("/", index)

export default router