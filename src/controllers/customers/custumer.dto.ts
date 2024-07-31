export class CustomerDto {
  name!: string;
  email!: string;
  phone?: string;
  cpf?:      string;
  cnpj?:     string;
  adress?:   string;
  createdAt?: Date;
  updatedAt?: Date;
}
