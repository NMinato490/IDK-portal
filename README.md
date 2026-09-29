# portal — standalone Next.js (SEPARATE REPO, outside wwwroot)

This folder is ** NOT part of ** `wwwroot/` Turbo monorepo. It has its own `package.json`, lockfile, and git repo.

## Layout
```
(New folder (2))/
  wwwroot/  <- turbo monorepo (labwebsite, site1, site2)
  portal/   <- this app (standalone, :4000)
```

## Start
```sh
cd portal
pnpm install
cp .env.example .env.local
pnpm dev        # http://localhost:4000
```

## Env
- `.env.example` (committed template)
- `.env.local` (local dev, gitignored)
- Vars: `NEXT_PUBLIC_APP_NAME`, `NEXT_PUBLIC_APP_URL`, `PORT`, `NODE_ENV`
