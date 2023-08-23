import express from 'express'
import { store, index, show } from '../controllers/jobsController'
const router = express.Router()

router.post("/:categoryId", store)
router.get("/", index)
router.get("/:id", show)

export default router