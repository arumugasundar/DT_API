"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const database_1 = require("./config/database");
const table_data_route_1 = __importDefault(require("./routes/table-data.route"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
dotenv_1.default.config();
(0, database_1.connectDB)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/api/v1/table-data", table_data_route_1.default);
app.listen(PORT, () => {
    console.log(`Running on Port ${PORT}`);
});
