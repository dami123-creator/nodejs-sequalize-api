import { Router } from "express";
import { getProject, createProject } from "../controllers/projects.controller.js";
const router = Router();

router.get('/projects', getProject)
router.post('/projects', createProject)
router.delete('/projects/:id')
router.put('/projects/:id')
router.get('/projects/:id')

export default router;