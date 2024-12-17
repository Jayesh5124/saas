import { UserLicense, IUserLicense } from '../models/UserLicense';

export class UserLicenseService {
  // Fetch all licenses
  static async getAllLicenses(): Promise<IUserLicense[]> {
    return await UserLicense.find();
  }

  // Add a new license
  static async addLicense(data: Partial<IUserLicense>): Promise<IUserLicense> {
    const license = new UserLicense(data);
    return await license.save();
  }

  // Get license by ID
  static async getLicenseById(id: string): Promise<IUserLicense | null> {
    return await UserLicense.findById(id);
  }

  // Update license by ID
  static async updateLicense(id: string, data: Partial<IUserLicense>): Promise<IUserLicense | null> {
    return await UserLicense.findByIdAndUpdate(id, data, { new: true });
  }

  // Delete license by ID
  static async deleteLicense(id: string): Promise<IUserLicense | null> {
    return await UserLicense.findByIdAndDelete(id);
  }
}
