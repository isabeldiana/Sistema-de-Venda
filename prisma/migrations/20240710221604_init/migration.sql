/*
  Warnings:

  - You are about to drop the column `totalPrice` on the `Invoice` table. All the data in the column will be lost.
  - You are about to drop the column `totalProductPrice` on the `Sale` table. All the data in the column will be lost.
  - Added the required column `totalProductPrice` to the `Invoice` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalPrice` to the `Sale` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Invoice" DROP COLUMN "totalPrice",
ADD COLUMN     "totalProductPrice" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "Sale" DROP COLUMN "totalProductPrice",
ADD COLUMN     "totalPrice" DOUBLE PRECISION NOT NULL;
