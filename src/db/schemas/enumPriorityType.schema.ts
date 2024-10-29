import { pgEnum } from 'drizzle-orm/pg-core'

export enum PriorityType {
  Critical = 'Critical',
  High = 'High',
  Medium = 'Medium',
  Low = 'Low',
}

export const PriorityTypeEnum = pgEnum('priority_type_name', [
  PriorityType.Critical,
  PriorityType.High,
  PriorityType.Medium,
  PriorityType.Low,
])
