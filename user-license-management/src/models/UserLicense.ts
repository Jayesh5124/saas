import mongoose, { Schema, Document } from 'mongoose';

// Define the interface for TypeScript
export interface IUserLicense extends Document {
  username: string;
  user_email: string;
  total_licenses_assigned: number;
  license_name: string;
}

// Define the schema
const UserLicenseSchema: Schema = new Schema(
  {
    username: { type: String, required: true, trim: true },
    user_email: { type: String, required: true, unique: true, lowercase: true },
    total_licenses_assigned: { type: Number, required: true, default: 0 },
    license_name: { type: String, required: true },
  },
  { timestamps: true }
);

// Create and export the model
export const UserLicense = mongoose.model<IUserLicense>('UserLicense', UserLicenseSchema);
