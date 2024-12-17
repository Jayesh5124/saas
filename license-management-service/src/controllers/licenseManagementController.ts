import { Request, Response } from 'express';
import { LicenseManagementService } from '../services/licenseManagementService';

export class LicenseManagementController {
  // Fetch all licenses
  static async getAllLicenses(req: Request, res: Response): Promise<void> {
    try {
      const licenses = await LicenseManagementService.getAllLicenses();
      res.status(200).json(licenses);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch licenses' });
    }
  }

  // Add a new license
  static async addLicense(req: Request, res: Response): Promise<void> {
    try {
      const license = await LicenseManagementService.addLicense(req.body);
      res.status(201).json({ message: 'License added successfully', license });
    } catch (error) {
      res.status(500).json({ error: 'Failed to add license' });
    }
  }

  // Get a license by ID
  static async getLicenseById(req: Request, res: Response): Promise<void> {
    try {
      const license = await LicenseManagementService.getLicenseById(req.params.id);
      if (!license) {
        res.status(404).json({ error: 'License not found' });
        return;
      }
      res.status(200).json(license);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch license' });
    }
  }

  // Update a license
  static async updateLicense(req: Request, res: Response): Promise<void> {
    try {
      const updatedLicense = await LicenseManagementService.updateLicense(req.params.id, req.body);
      if (!updatedLicense) {
        res.status(404).json({ error: 'License not found' });
        return;
      }
      res.status(200).json({ message: 'License updated successfully', updatedLicense });
    } catch (error) {
      res.status(500).json({ error: 'Failed to update license' });
    }
  }

  // Delete a license
  static async deleteLicense(req: Request, res: Response): Promise<void> {
    try {
      const deletedLicense = await LicenseManagementService.deleteLicense(req.params.id);
      if (!deletedLicense) {
        res.status(404).json({ error: 'License not found' });
        return;
      }
      res.status(200).json({ message: 'License deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete license' });
    }
  }

  // Recalculate unassigned and unused licenses
  static async recalculateLicenses(req: Request, res: Response): Promise<void> {
    try {
      const recalculated = await LicenseManagementService.recalculateLicenses(req.params.id);
      if (!recalculated) {
        res.status(404).json({ error: 'License not found' });
        return;
      }
      res.status(200).json({ message: 'Recalculated licenses successfully', recalculated });
    } catch (error) {
      res.status(500).json({ error: 'Failed to recalculate licenses' });
    }
  }
}
