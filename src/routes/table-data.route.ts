import { Router } from "express";
import { tableDataController } from "../controllers/table-data.controller";

const router = Router();

router.get("/", (req, res) => tableDataController.getData(req, res));


export default router;