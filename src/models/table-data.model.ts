import mongoose, { Schema, Document } from "mongoose";
import { IData } from "../types/table-data.types";

export interface IDataDocument extends IData, Document {}

const DataSchema: Schema = new Schema(
  {
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
  },
  { collection: "customerData" }
);

export default mongoose.model<IDataDocument>("Data", DataSchema);
