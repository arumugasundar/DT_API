"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const DataSchema = new mongoose_1.Schema({
    name: String,
    owner: String,
    creation: Date,
    modified: Date,
    modified_by: String,
    _user_tags: [String],
    _comments: [String],
    _assign: [String],
    _liked_by: [String],
    docstatus: Number,
    idx: Number,
    vendor_name: String,
    lr_number: String,
    vehicle_number: String,
    origin_name: String,
    driver_number: String,
    tel_operator: String,
    created_at: Date,
    tracking_mode: String,
    is_completed: Boolean,
    stop_time: String,
    destination_name: String,
    eta: Date,
    status: String,
    consent_status: String,
    route: String,
    last_update: String,
    trip_uid: String,
    extra_status: String,
    indent_linked: Boolean,
    _seen: [String],
    vendor: String,
    origin: String,
    vendor_vendor_name: String,
    origin_geofence_name: String,
    _comment_count: Number,
}, { collection: "customerData" });
exports.default = mongoose_1.default.model("Data", DataSchema);
