import {Router} from "express";

import {categories, hasGourmetDesc} from "../controllers/categorias.controller.js";

const router = Router();

router.get("/all", categories);
router.get("/gourmet", hasGourmetDesc);

export default router;