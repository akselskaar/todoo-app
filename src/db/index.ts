import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import * as schema from './schemas'

const connectionString = process.env.AUTH_DRIZZLE_URL!

export const pool = postgres(connectionString, { max: 1 })
export const db = drizzle(pool, { schema })
