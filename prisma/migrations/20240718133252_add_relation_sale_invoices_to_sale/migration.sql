/*
  Warnings:

  - You are about to drop the `_SaleInvoices` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[saleNumber]` on the table `Sale` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "_SaleInvoices" DROP CONSTRAINT "_SaleInvoices_A_fkey";

-- DropForeignKey
ALTER TABLE "_SaleInvoices" DROP CONSTRAINT "_SaleInvoices_B_fkey";

-- DropTable
DROP TABLE "_SaleInvoices";

-- CreateIndex
CREATE UNIQUE INDEX "Sale_saleNumber_key" ON "Sale"("saleNumber");

-- AddForeignKey
ALTER TABLE "Invoice" ADD CONSTRAINT "Invoice_saleNumber_fkey" FOREIGN KEY ("saleNumber") REFERENCES "Sale"("saleNumber") ON DELETE RESTRICT ON UPDATE CASCADE;
