# Task manager

Task manager made in next.js 15, with Posgress database and Drizzle ORM.

## Setup:

1. Install deps:

```
pnpm install
```

2. Add .env.local file to root of project with:

```
DATABASE_URL='postgres://myuser:mypassword@127.0.0.1:5432/task-manager-db'
NEXTAUTH_SECRET=
```

3. Generate NEXTAUTH_SECRET and paste the generated secret to .env.local:

```
openssl rand -base64 32 | pbcopy
```

3. Start the database:

```
docker compose up -d
```

5. Push schemas to database:

```
pnpm push
```

6. Start dev server:

```
pnpm dev
```

## :sparkles: Tech stack

- Next.js 15
- Auth.js
- TypeScript
- Tailwind CSS
- Postgress
- Drizzle ORM
- Docker
- Shadcn/ui

## :page_facing_up: Resources

- [Github repo](https://github.com/akselskaar/task-manager)
- [Next docs](https://nextjs.org/docs)
- [Drizzle docs](https://orm.drizzle.team/docs/overview)
- [Auth.js docs](https://authjs.dev/getting-started)
- [Tailwind docs](https://tailwindcss.com/)
- [Chadcn/ui website](https://ui.shadcn.com/)

<hr />

Copyright :copyright: [Aksel Skaar](https://github.com/akselskaar)
