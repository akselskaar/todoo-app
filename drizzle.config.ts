import { defineConfig } from 'drizzle-kit'
import dotenv from 'dotenv'

dotenv.config({
  path: '.env.local',
})

// Check if the environment variables are defined
if (!process.env.AUTH_DRIZZLE_URL) {
  throw new Error('Cant find AUTH_DRIZZLE_URL in environment variables')
}

export default defineConfig({
  out: './src/db/migrations',
  schema: './src/db/schemas/index.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.AUTH_DRIZZLE_URL!,
  },
})
