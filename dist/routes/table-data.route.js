"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const table_data_controller_1 = require("../controllers/table-data.controller");
const router = (0, express_1.Router)();
router.get("/", (req, res) => table_data_controller_1.tableDataController.getData(req, res));
exports.default = router;
