import mongoose, { Schema, Document } from 'mongoose';

// Interface for TypeScript
export interface ILicenseManagement extends Document {
  tool_id: string;
  toolname: string;
  total_license: number;
  used_license: number;
  unassigned_license: number;
  unused_license: number;
  cost_per_license: number;
  createdAt: Date;
  updatedAt: Date;
}

// Define Schema
const LicenseManagementSchema: Schema = new Schema(
  {
    tool_id: { type: String, required: true, unique: true, trim: true },
    toolname: { type: String, required: true, trim: true },
    total_license: { type: Number, required: true, min: 0 },
    used_license: { type: Number, required: true, min: 0 },
    unassigned_license: { type: Number, required: true, min: 0 },
    unused_license: { type: Number, required: true, min: 0 },
    cost_per_license: { type: Number, required: true, min: 0 },
  },
  { timestamps: true }
);

// Create and export the model
export const LicenseManagement = mongoose.model<ILicenseManagement>(
  'LicenseManagement',
  LicenseManagementSchema
);
