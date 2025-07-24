import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  dialect: 'sqlite',
  schema: './src/database/schema.ts',
  out: './src/database/migrations',
  dbCredentials: {
    url: './src/database/klef-catalog.db',
  },
  verbose: true,
  strict: true,
});
