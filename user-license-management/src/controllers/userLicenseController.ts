import { Request, Response } from 'express';
import { UserLicenseService } from '../services/userLicenseService';

export class UserLicenseController {
  // Fetch all licenses
  static async getAllLicenses(req: Request, res: Response): Promise<void> {
    try {
      const licenses = await UserLicenseService.getAllLicenses();
      res.status(200).json(licenses);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch licenses' });
    }
  }

  // Add a new license
  static async addLicense(req: Request, res: Response): Promise<void> {
    try {
      const license = await UserLicenseService.addLicense(req.body);
      res.status(201).json({ message: 'License added successfully', license });
    } catch (error) {
      res.status(500).json({ error: 'Failed to add license' });
    }
  }

  // Get license by ID
  static async getLicenseById(req: Request, res: Response): Promise<void> {
    try {
      const license = await UserLicenseService.getLicenseById(req.params.id);
      if (!license) {
        res.status(404).json({ error: 'License not found' });
        return;
      }
      res.status(200).json(license);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch license' });
    }
  }

  // Update license by ID
  static async updateLicense(req: Request, res: Response): Promise<void> {
    try {
      const license = await UserLicenseService.updateLicense(req.params.id, req.body);
      if (!license) {
        res.status(404).json({ error: 'License not found' });
        return;
      }
      res.status(200).json({ message: 'License updated successfully', license });
    } catch (error) {
      res.status(500).json({ error: 'Failed to update license' });
    }
  }

  // Delete license by ID
  static async deleteLicense(req: Request, res: Response): Promise<void> {
    try {
      const license = await UserLicenseService.deleteLicense(req.params.id);
      if (!license) {
        res.status(404).json({ error: 'License not found' });
        return;
      }
      res.status(200).json({ message: 'License deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete license' });
    }
  }
}
