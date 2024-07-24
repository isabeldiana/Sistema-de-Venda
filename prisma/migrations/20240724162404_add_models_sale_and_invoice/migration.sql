/*
  Warnings:

  - You are about to drop the column `saleNumber` on the `Invoice` table. All the data in the column will be lost.
  - You are about to drop the column `saleNumber` on the `Sale` table. All the data in the column will be lost.
  - Added the required column `saleId` to the `Invoice` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Invoice" DROP CONSTRAINT "Invoice_saleNumber_fkey";

-- DropIndex
DROP INDEX "Sale_saleNumber_key";

-- AlterTable
ALTER TABLE "Invoice" DROP COLUMN "saleNumber",
ADD COLUMN     "saleId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Sale" DROP COLUMN "saleNumber";

-- AddForeignKey
ALTER TABLE "Invoice" ADD CONSTRAINT "Invoice_saleId_fkey" FOREIGN KEY ("saleId") REFERENCES "Sale"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
