/*
  Warnings:

  - You are about to drop the column `additionalField` on the `Sale` table. All the data in the column will be lost.
  - You are about to drop the column `anotherField` on the `Sale` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Sale" DROP COLUMN "additionalField",
DROP COLUMN "anotherField";
