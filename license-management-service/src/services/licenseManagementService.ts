import { LicenseManagement, ILicenseManagement } from '../models/LicenseManagement';

export class LicenseManagementService {
  // Fetch all licenses
  static async getAllLicenses(): Promise<ILicenseManagement[]> {
    return await LicenseManagement.find();
  }

  // Add a new license
  static async addLicense(data: Partial<ILicenseManagement>): Promise<ILicenseManagement> {
    const license = new LicenseManagement(data);
    return await license.save();
  }

  // Get license by ID
  static async getLicenseById(id: string): Promise<ILicenseManagement | null> {
    return await LicenseManagement.findById(id);
  }

  // Update license
  static async updateLicense(id: string, data: Partial<ILicenseManagement>): Promise<ILicenseManagement | null> {
    return await LicenseManagement.findByIdAndUpdate(id, data, { new: true });
  }

  // Delete license
  static async deleteLicense(id: string): Promise<ILicenseManagement | null> {
    return await LicenseManagement.findByIdAndDelete(id);
  }

  // Calculate remaining unassigned and unused licenses dynamically
  static async recalculateLicenses(id: string): Promise<ILicenseManagement | null> {
    const license = await LicenseManagement.findById(id);
    if (license) {
      license.unassigned_license = license.total_license - license.used_license;
      license.unused_license = license.unassigned_license;
      return await license.save();
    }
    return null;
  }
}
