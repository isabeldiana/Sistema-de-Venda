import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Express } from 'express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Sistema-Retarguarda',
      version: '1.0.0',
      description: 'O Sistema de Retaguarda de Vendas é uma aplicação backend desenvolvida utilizando Node.js com o framework Express e escrita em TypeScript.',
    },
    tags: [
      { name: 'Users', description: 'Operations related to Sales users' },
      { name: 'Customers', description: 'Operations related to Sales customers' },
      { name: 'Products', description: 'Operations related to Sales products' },
      { name: 'Sales', description: 'Operations related to Sales' },
    ],
  },
  apis: ['./src/swagger/swagger.docs.ts'], 
};



const swagger = swaggerJSDoc(options);

export function setupSwagger(app: Express) {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swagger))
}
