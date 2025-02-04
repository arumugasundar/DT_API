export interface IData {
    name: string;
    owner: string;
    creation: Date;
    modified: Date;
    modified_by: string;
    _user_tags: string[];
    _comments: string[];
    _assign: string[];
    _liked_by: string[];
    docstatus: number;
    idx: number;
    vendor_name: string;
    lr_number: string;
    vehicle_number: string;
    origin_name: string;
    driver_number: string;
    tel_operator: string;
    created_at: Date;
    tracking_mode: string;
    is_completed: boolean;
    stop_time: string;
    destination_name: string;
    eta: Date;
    status: string;
    consent_status: string;
    route: string;
    last_update: string;
    trip_uid: string;
    extra_status: string;
    indent_linked: boolean;
    _seen: string[];
    vendor: string;
    origin: string;
    vendor_vendor_name: string;
    origin_geofence_name: string;
    _comment_count: number;
}

export interface PaginationParams {
    page?: number;
    limit?: number;
    [key: string]: any;
}

export interface PaginatedResponse {
    data: IData[];
    pagination: {
        totalCount: number;
        totalPages: number;
        currentPage: number;
        limit: number;
    };
}
  