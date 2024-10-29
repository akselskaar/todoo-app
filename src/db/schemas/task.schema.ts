import { timestamp, pgTable, text, boolean } from 'drizzle-orm/pg-core'
import { users } from './user.schema'
import { PriorityTypeEnum } from './enumPriorityType.schema'
import { InferSelectModel, relations } from 'drizzle-orm'

export const task = pgTable('task', {
  id: text('id')
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  idUser: text('id_user')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  title: text('title').notNull(),
  priority: PriorityTypeEnum('priority').notNull(),
  deadline: timestamp('deadline'),
  isCompleted: boolean('is_completed').notNull().default(false),
  completedAt: timestamp('completed_at'),
  description: text('description'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  createdBy: text('created_by').references(() => users.id),
  updatedAt: timestamp('updated_at'),
  updatedBy: text('updated_by').references(() => users.id),
})

export const taskRelations = relations(task, ({ one }) => ({
  user: one(users, {
    fields: [task.idUser],
    references: [users.id],
  }),
}))

export type Task = InferSelectModel<typeof task>
