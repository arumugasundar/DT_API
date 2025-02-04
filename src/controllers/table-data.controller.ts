import type { Request, Response } from "express";
import { dataService } from "../services/table-data.services";

export class TableDataController {
  public async getData(req: Request, res: Response): Promise<void> {
    try {
      const result = await dataService.getPaginatedData(req.query);

      if (!result.data?.length) {
        res.status(404).json({ message: "No data available" });
        return;
      }

      res.json(result);
    } catch (error) {
      console.error("Error fetching data:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
}

export const tableDataController = new TableDataController();
