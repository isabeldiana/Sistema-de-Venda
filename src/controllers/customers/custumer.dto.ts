export class CustomerDto {
  name!: string;
  email!: string;
  phone?: string;
  cpf?:      string;
  cnpj?:     string;
  address?:   string;
  createdAt?: Date;
  updatedAt?: Date;
}
