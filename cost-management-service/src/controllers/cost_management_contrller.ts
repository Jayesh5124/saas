import { Request, Response } from 'express';
import { CostManagementService } from '../services/costManagementService';

export class CostManagementController {
  // Fetch all costs
  static async getAllCosts(req: Request, res: Response): Promise<void> {
    try {
      const costs = await CostManagementService.getAllCosts();
      res.status(200).json(costs);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch cost management data' });
    }
  }

  // Add a new cost
  static async addCost(req: Request, res: Response): Promise<void> {
    try {
      const cost = await CostManagementService.addCost(req.body);
      res.status(201).json({ message: 'Cost data added successfully', cost });
    } catch (error) {
      res.status(500).json({ error: 'Failed to add cost management data' });
    }
  }

  // Get cost by ID
  static async getCostById(req: Request, res: Response): Promise<void> {
    try {
      const cost = await CostManagementService.getCostById(req.params.id);
      if (!cost) {
        res.status(404).json({ error: 'Cost management data not found' });
        return;
      }
      res.status(200).json(cost);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch cost management data' });
    }
  }

  // Update cost
  static async updateCost(req: Request, res: Response): Promise<void> {
    try {
      const cost = await CostManagementService.updateCost(req.params.id, req.body);
      if (!cost) {
        res.status(404).json({ error: 'Cost management data not found' });
        return;
      }
      res.status(200).json({ message: 'Cost data updated successfully', cost });
    } catch (error) {
      res.status(500).json({ error: 'Failed to update cost management data' });
    }
  }

  // Delete cost
  static async deleteCost(req: Request, res: Response): Promise<void> {
    try {
      const cost = await CostManagementService.deleteCost(req.params.id);
      if (!cost) {
        res.status(404).json({ error: 'Cost management data not found' });
        return;
      }
      res.status(200).json({ message: 'Cost data deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete cost management data' });
    }
  }
}
