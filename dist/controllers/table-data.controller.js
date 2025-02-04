"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tableDataController = exports.TableDataController = void 0;
const table_data_services_1 = require("../services/table-data.services");
class TableDataController {
    getData(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const result = yield table_data_services_1.dataService.getPaginatedData(req.query);
                if (!((_a = result.data) === null || _a === void 0 ? void 0 : _a.length)) {
                    res.status(404).json({ message: "No data available" });
                    return;
                }
                res.json(result);
            }
            catch (error) {
                console.error("Error fetching data:", error);
                res.status(500).json({ error: "Internal server error" });
            }
        });
    }
}
exports.TableDataController = TableDataController;
exports.tableDataController = new TableDataController();
