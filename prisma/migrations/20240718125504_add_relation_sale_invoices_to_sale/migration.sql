/*
  Warnings:

  - You are about to drop the column `invoiceId` on the `Sale` table. All the data in the column will be lost.
  - Added the required column `saleNumber` to the `Sale` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Sale" DROP COLUMN "invoiceId",
ADD COLUMN     "additionalField" TEXT,
ADD COLUMN     "anotherField" INTEGER,
ADD COLUMN     "saleNumber" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "_SaleInvoices" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_SaleInvoices_AB_unique" ON "_SaleInvoices"("A", "B");

-- CreateIndex
CREATE INDEX "_SaleInvoices_B_index" ON "_SaleInvoices"("B");

-- AddForeignKey
ALTER TABLE "_SaleInvoices" ADD CONSTRAINT "_SaleInvoices_A_fkey" FOREIGN KEY ("A") REFERENCES "Invoice"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SaleInvoices" ADD CONSTRAINT "_SaleInvoices_B_fkey" FOREIGN KEY ("B") REFERENCES "Sale"("id") ON DELETE CASCADE ON UPDATE CASCADE;
