-- AddForeignKey
ALTER TABLE "Invoice" ADD CONSTRAINT "Invoice_saleNumber_fkey" FOREIGN KEY ("saleNumber") REFERENCES "Sale"("saleNumber") ON DELETE NO ACTION ON UPDATE NO ACTION;
