import { PrismaClient } from '@root/prisma-client'; // Plese run `npm run prisma:generate` to generate the Prisma client

const prisma = new PrismaClient();

export default prisma;
