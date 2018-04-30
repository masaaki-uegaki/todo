import * as mongoose from 'mongoose';
import { HookNextFunction } from 'mongoose';
import { Model } from './model';

export class Task extends Model {
  taskSchema: mongoose.Schema;

  constructor() {
    super();

    this.taskSchema = new mongoose.Schema({
      id: { type: String, unique: true },
      name: String,
      desc: String,
      priority: { type: String, default: 'L' },
      startAt: Date,
      dueAt: Date,
      expectedManHour: { type: Number, default: 0 },
      actualManHour: { type: Number, default: 0 },
      expectedCost: { type: Number, default: 0 },
      actualCost: { type: Number, default: 0 },
      progress: { type: Number, default: 0 },
      createdAt: { type: Date, default: Date.now },
      createdUid: String,
      modifiedAt: String,
      modifiedUid: Date
    });
  }

  public save(): void {
    this.taskSchema.pre('save', (next: HookNextFunction) => {
      next();
    });

  }
}
