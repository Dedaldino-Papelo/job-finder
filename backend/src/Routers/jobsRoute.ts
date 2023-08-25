import express from 'express'
import { store, index, show, update } from '../controllers/jobsController'
const router = express.Router()

router.post("/:categoryId", store)
router.get("/", index)
router.get("/:id", show)
router.put("/:id/edit", update)

export default router