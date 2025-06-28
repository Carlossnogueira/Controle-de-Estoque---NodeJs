/*
  Warnings:

  - You are about to drop the column `passord_hash` on the `User` table. All the data in the column will be lost.
  - Added the required column `password_hash` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "passord_hash",
ADD COLUMN     "password_hash" TEXT NOT NULL;
