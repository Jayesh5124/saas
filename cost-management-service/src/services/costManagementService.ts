import { CostManagement, ICostManagement } from "../models/cost_management";


export class CostManagementService {
  // Fetch all cost entries
  static async getAllCosts(): Promise<ICostManagement[]> {
    return await CostManagement.find();
  }

  // Add a new cost entry
  static async addCost(data: Partial<ICostManagement>): Promise<ICostManagement> {
    const costEntry = new CostManagement(data);
    return await costEntry.save();
  }

  // Get cost entry by ID
  static async getCostById(id: string): Promise<ICostManagement | null> {
    return await CostManagement.findById(id);
  }

  // Update cost entry
  static async updateCost(id: string, data: Partial<ICostManagement>): Promise<ICostManagement | null> {
    return await CostManagement.findByIdAndUpdate(id, data, { new: true });
  }

  // Delete cost entry
  static async deleteCost(id: string): Promise<ICostManagement | null> {
    return await CostManagement.findByIdAndDelete(id);
  }
}
