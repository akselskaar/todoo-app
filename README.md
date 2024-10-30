# Todoo-app

Todoo-app made in next.js 15, with postgres database and Drizzle ORM.

## Setup:

Install deps:

```
pnpm install
```

Add `.env.local` file to root of project with:

```
DATABASE_URL='postgres://myuser:mypassword@127.0.0.1:5432/todoo-app-db'
NEXTAUTH_SECRET=
AUTH_GITHUB_ID=
AUTH_GITHUB_SECRET=
```

To generate NEXTAUTH_SECRET:

```
openssl rand -base64 32 | pbcopy
```

Create a new oAuth app in your GitHub settings and paste your secrets to the .env.local

Start the database:

```
docker compose up -d
```

Push schemas to database:

```
pnpm generate
pnpm push
```

Start dev server:

```
pnpm dev
```

## :sparkles: Tech stack

- Next.js 15
- Auth.js
- TypeScript
- Tailwind CSS
- Postgres
- Drizzle ORM
- Docker
- Shadcn/ui

## :page_facing_up: Resources

- [Github repo](https://github.com/akselskaar/todoo-app)
- [Next docs](https://nextjs.org/docs)
- [Drizzle docs](https://orm.drizzle.team/docs/overview)
- [Auth.js docs](https://authjs.dev/getting-started)
- [Tailwind docs](https://tailwindcss.com/)
- [Chadcn/ui website](https://ui.shadcn.com/)

<hr />

Copyright :copyright: [Aksel Skaar](https://github.com/akselskaar)
