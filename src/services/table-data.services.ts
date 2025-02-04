import TableData from "../models/table-data.model";
import { PaginationParams, PaginatedResponse } from "../types/table-data.types";

export class DataService {
  public async getPaginatedData({ page = 1, limit = 10, ...filters }: PaginationParams): Promise<PaginatedResponse> {
    const query = Object.entries(filters).reduce((acc, [key, value]) => {
      if (value) acc[key] = { $regex: value, $options: "i" };
      return acc;
    }, {} as Record<string, any>);

    const pageNum = Number(page);
    const limitNum = Number(limit);
    const skip = (pageNum - 1) * limitNum;

    const [data, totalCount] = await Promise.all([
        TableData.find(query).skip(skip).limit(limitNum).lean(),
        TableData.countDocuments(query)
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
  }
}

export const dataService = new DataService();