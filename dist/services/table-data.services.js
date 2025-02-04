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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataService = exports.DataService = void 0;
const table_data_model_1 = __importDefault(require("../models/table-data.model"));
class DataService {
    getPaginatedData(_a) {
        return __awaiter(this, void 0, void 0, function* () {
            var { page = 1, limit = 10 } = _a, filters = __rest(_a, ["page", "limit"]);
            const query = Object.entries(filters).reduce((acc, [key, value]) => {
                if (value)
                    acc[key] = { $regex: value, $options: "i" };
                return acc;
            }, {});
            const pageNum = Number(page);
            const limitNum = Number(limit);
            const skip = (pageNum - 1) * limitNum;
            const [data, totalCount] = yield Promise.all([
                table_data_model_1.default.find(query).skip(skip).limit(limitNum).lean(),
                table_data_model_1.default.countDocuments(query)
            ]);
            return {
                data,
                pagination: {
                    totalCount,
                    totalPages: Math.ceil(totalCount / limitNum),
                    currentPage: pageNum,
                    limit: limitNum,
                },
            };
        });
    }
}
exports.DataService = DataService;
exports.dataService = new DataService();
