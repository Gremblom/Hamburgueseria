import {Router} from "express";

import {less400, multiply15, delIng0, maxIng, incBrd100, hasClassic, priceRange} from "../controllers/ingredientes.controller.js";

const router = Router();

router.get("/ls400", less400);
router.get("/mul15", multiply15);
router.get("/delstck0", delIng0);
router.get("/maxIng", maxIng);
router.get("/incBrd", incBrd100);
router.get("/classic", hasClassic);
router.get("/2between5", priceRange);

export default router;