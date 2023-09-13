import {Router} from "express";

import {chefMeats, chngChfCInter, chefCount, insertChef} from "../controllers/chefs.controller.js";

const router = Router();

router.get("/meats", chefMeats);
router.get("/chngChefC", chngChfCInter);
router.get("/chefCount", chefCount);
router.get("/newChef", insertChef);

export default router;