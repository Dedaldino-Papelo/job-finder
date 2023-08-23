import express from 'express'
import { store } from '../controllers/jobsController'
const router = express.Router()

router.post("/", store)

export default router