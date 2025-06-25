import { PrismaClient } from "generated/prisma";
import { env } from "src/env/env-config";

export const prisma = new PrismaClient({
    log: env.NODE_ENV === 'dev' ? ['query'] : [] 
})