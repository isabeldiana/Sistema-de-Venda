/*
  Warnings:

  - You are about to drop the column `cpnj` on the `Customer` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[cnpj]` on the table `Customer` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Customer_cpnj_key";

-- AlterTable
ALTER TABLE "Customer" DROP COLUMN "cpnj",
ADD COLUMN     "cnpj" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Customer_cnpj_key" ON "Customer"("cnpj");
