# Example REST API for Typescript + Node Projects 2025

### Features
- Typescript support
- Error handling

### Setup Prisma
```bash
npm i prisma -D
npx prisma@latest init --datasource-provider mysql
```

### Generate prisma client to latest schema
```bash
npx prisma generate
```

### Create DB migrations
```bash
npm run migration:create -- --name create-tasks-and-projects-tables
```

### Apply DB migrations
```bash
npm run migrate
```
