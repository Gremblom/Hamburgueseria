import {Router} from "express";

import {veganBurger, burgerChefB, addClassIng, intBreadBurg, notCheeseBurg, lessOrEq9, delLess5Ing, listBurgAsc, tomAndLett, add2AllGourm, expBurger, addPcklsClss, burg7Ing, gourmExpChef, countIng, chefBurgCount, moreCatCant, chefBurgPrice, ingNotBurg, burgDesc, moreBurgIntChef, avgBurgCost, chefMoreBurgCost} from "../controllers/hamburguesas.controller.js";

const router = Router();

router.get("/vegan", veganBurger);
router.get("/chefA", burgerChefB);
router.get("/addClassIng", addClassIng);
router.get("/intBread", intBreadBurg);
router.get("/notCheese", notCheeseBurg);
router.get("/lsoreq9", lessOrEq9);
router.get("/delLess5", delLess5Ing);
router.get("/burgAsc", listBurgAsc);
router.get("/tomAndLett", tomAndLett);
router.get("/add2Gourm", add2AllGourm);
router.get("/expBurg", expBurger);
router.get("/addPicklesClass", addPcklsClss);
router.get("/burg7Ing", burg7Ing);
router.get("/expGourmChef", gourmExpChef);
router.get("/countIng", countIng);
router.get("/chefBurgCount", chefBurgCount);
router.get("/moreCatCant", moreCatCant);
router.get("/chefBurgPrice", chefBurgPrice);
router.get("/ingNotInBurg", ingNotBurg);
router.get("/burgDesc", burgDesc);
router.get("/moreBurgIntChef", moreBurgIntChef);
router.get("/avgBurgCost", avgBurgCost);
router.get("/chefExpBurgCost", chefMoreBurgCost);

export default router;