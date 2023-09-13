import {Router} from "express";

import {veganBurger, burgerChefB, addClassIng, intBreadBurg, notCheeseBurg, lessOrEq9, delLess5Ing, listBurgAsc} from "../controllers/hamburguesas.controller.js";

const router = Router();

router.get("/vegan", veganBurger);
router.get("/chefA", burgerChefB);
router.get("/addClassIng", addClassIng);
router.get("/intBread", intBreadBurg);
router.get("/notCheese", notCheeseBurg);
router.get("/lsoreq9", lessOrEq9);
router.get("/delLess5", delLess5Ing);
router.get("/burgAsc", listBurgAsc);

export default router;