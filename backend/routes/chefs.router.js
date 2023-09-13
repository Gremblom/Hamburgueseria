import {Router} from "express";

import {chefMeats, chngChfCInter, chefCount, insertChef, allExcChfA, delVegCook} from "../controllers/chefs.controller.js";

const router = Router();

router.get("/meats", chefMeats);
router.get("/chngChefC", chngChfCInter);
router.get("/chefCount", chefCount);
router.get("/newChef", insertChef);
router.get("/notChfA", allExcChfA);
router.get("/delVeganCook", delVegCook);

export default router;