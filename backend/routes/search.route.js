import express from "express";
import { searchPerson, searchMovie, searchTv, getsearchHistory, removeItemFromSearchHistory } from "../controllers/search.controller.js";

const router = express.Router();


router.get("/person/:query", searchPerson);
router.get("/movie/:query", searchMovie);
router.get("/tv/:query", searchTv);

router.get("/history",getsearchHistory);
router.delete("/history/:id", removeItemFromSearchHistory);

export default router;