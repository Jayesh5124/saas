import mongoose, { Schema, Document } from 'mongoose';

// Interface for TypeScript
export interface ICostManagement extends Document {
  tool_id: string;
  toolname: string;
  expense_period: 'weekly' | 'monthly';
  cost_of_contract: number;
  time_per_day: number; // In hours
}

// Define the schema
const CostManagementSchema: Schema = new Schema(
  {
    tool_id: { type: String, required: true, unique: true, trim: true },
    toolname: { type: String, required: true, trim: true },
    expense_period: { type: String, enum: ['weekly', 'monthly'], required: true },
    cost_of_contract: { type: Number, required: true },
    time_per_day: { type: Number, required: true, min: 0 }, // Minimum 0 hours
  },
  { timestamps: true }
);

// Create and export the model
export const CostManagement = mongoose.model<ICostManagement>(
  'CostManagement',
  CostManagementSchema
);
