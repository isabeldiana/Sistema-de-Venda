/*
  Warnings:

  - A unique constraint covering the columns `[cpf]` on the table `Customer` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[cpnj]` on the table `Customer` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Customer" ADD COLUMN     "adress" TEXT,
ADD COLUMN     "cpf" TEXT,
ADD COLUMN     "cpnj" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Customer_cpf_key" ON "Customer"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "Customer_cpnj_key" ON "Customer"("cpnj");
