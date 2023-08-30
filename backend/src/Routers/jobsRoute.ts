import express from 'express'
import { store, index, show, update, remove } from '../controllers/jobsController'
const router = express.Router()

router.post("/:categoryId", store)
router.get("/", index)
router.get("/:id", show)
router.put("/:id/edit", update)
router.delete("/:id", remove)

export default router