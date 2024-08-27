

//Users

/**
 * @swagger
 * /api/createUser:
 *   post:
 *     summary: Create a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: John Doe
 *               email:
 *                 type: string
 *                 example: john.doe@example.com
 *               password:
 *                 type: string
 *                 example: secretpassword
 *     responses:
 *       201:
 *         description: User created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                 email:
 *                   type: string
 *                 createAccount:
 *                   type: string
 *                   format: date
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/login:
 *   post:
 *     summary: Log in and receive a JWT token
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: john.doe@example.com
 *               password:
 *                 type: string
 *                 format: password
 *                 example: secretpassword
 *     responses:
 *       200:
 *         description: Successful login, returns JWT token
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
 *       400:
 *         description: Bad request, missing or invalid fields
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Email e senha são obrigatórios"
 *       401:
 *         description: Unauthorized, invalid credentials
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Invalid credentials"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Internal server error"
 */


//Customers

/**
 * @swagger
 * /api/createCustomer:
 *   post:
 *     summary: Create a new customer
 *     tags: [Customers]
 *     security:
 *       - BearerAuth: [] 
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: John Doe
 *               email:
 *                 type: string
 *                 example: johndoe@example.com
 *               phone:
 *                 type: string
 *                 example: "999999999"
 *               address:
 *                 type: string
 *                 example: "Rua , 000, SP, 00000-000, Brasil"
 *               cpf:
 *                 type: string
 *                 example: "999.999.999-00"
 *                 nullable: true
 *               cnpj:
 *                 type: string
 *                 example: "99.999.999/0001-00"
 *                 nullable: true
 *     responses:
 *       201:
 *         description: Customer created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 15
 *                 name:
 *                   type: string
 *                   example: John Doe
 *                 email:
 *                   type: string
 *                   example: johndoe@example.com
 *                 phone:
 *                   type: string
 *                   example: "999999999"
 *                 cpf:
 *                   type: string
 *                   example: "999.999.999-00"
 *                   nullable: true
 *                 cnpj:
 *                   type: string
 *                   example: "99.999.999/0001-00"
 *                   nullable: true
 *                 address:
 *                   type: string
 *                   example: "Rua , 000, SP, 00000-000, Brasil"
 *                   nullable: true
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-08-15T15:13:44.383Z"
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-08-15T15:13:44.383Z"
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/showCustomer/{id}:
 *   get:
 *     summary: Display a customer by ID
 *     tags: [Customers]
 *     security:
 *       - BearerAuth: [] 
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *         description: The customer ID
 *     responses:
 *       200:
 *         description: Successfully display the customer
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 name:
 *                   type: string
 *                   example: John Doe
 *                 email:
 *                   type: string
 *                   example: johndoe@example.com
 *                 phone:
 *                   type: string
 *                   example: "999999999"
 *                 address:
 *                   type: string
 *                   example: "Rua das Flores, 000, São Paulo, SP, 00000-000, Brasil"
 *                 cpf:
 *                   type: string
 *                   example: "999.999.999-00"
 *                 cnpj:
 *                   type: string
 *                   example: "99.999.999/0001-00"
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-08-15T15:13:44.383Z"
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-08-15T15:13:44.383Z"
 *       404:
 *         description: Customer not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/showCustomer:
 *   get:
 *     summary: Display all customers
 *     tags: [Customers]
 *     security:
 *       - BearerAuth: [] 
 *     responses:
 *       200:
 *         description: Successfully display all customers
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 name:
 *                   type: string
 *                   example: John Doe
 *                 email:
 *                   type: string
 *                   example: johndoe@example.com
 *                 phone:
 *                   type: string
 *                   example: "999999999"
 *                 address:
 *                   type: string
 *                   example: "Rua das Flores, 000, São Paulo, SP, 00000-000, Brasil"
 *                 cpf:
 *                   type: string
 *                   example: "999.999.999-00"
 *                 cnpj:
 *                   type: string
 *                   example: "99.999.999/0001-00"
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-08-15T15:13:44.383Z"
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-08-15T15:13:44.383Z"
 *       404:
 *         description: Customer not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/updateCustomer/{id}:
 *   put:
 *     summary: Update a customer by ID
 *     tags: [Customers]
 *     security:
 *       - BearerAuth: [] 
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *         description: The customer ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: John Doe
 *               email:
 *                 type: string
 *                 example: johndoe@example.com
 *               phone:
 *                 type: string
 *                 example: "999999999"
 *               address:
 *                 type: string
 *                 example: "Rua das Flores, 000, São Paulo, SP, 00000-000, Brasil"
 *               cpf:
 *                 type: string
 *                 example: "999.999.999-00"
 *                 nullable: true
 *               cnpj:
 *                 type: string
 *                 example: "99.999.999/0001-00"
 *                 nullable: true
 *     responses:
 *       200:
 *         description: Customer updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 name:
 *                   type: string
 *                   example: John Doe
 *                 email:
 *                   type: string
 *                   example: johndoe@example.com
 *                 phone:
 *                   type: string
 *                   example: "999999999"
 *                 address:
 *                   type: string
 *                   example: "Rua das Flores, 000, São Paulo, SP, 00000-000, Brasil"
 *               cpf:
 *                 type: string
 *                 example: "999.999.999-00"
 *                 nullable: true
 *               cnpj:
 *                 type: string
 *                 example: "99.999.999/0001-00"
 *                 nullable: true
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-08-15T15:13:44.383Z"
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Customer not found
 *       500:
 *         description: Internal server error
 */

//PRODUCTS

/**
 * @swagger
 * /api/createProduct:
 *   post:
 *     summary: Create a new product
 *     tags: [Products]
  *     security:
 *       - BearerAuth: [] 
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Sapato"
 *               description:
 *                 type: string
 *                 example: "Sapato, masculino, preto 44"
 *               price: 
 *                 type: integer
 *                 example: 95
 *               stock: 
 *                 type: integer
 *                 example: 12
 *     responses:
 *       201:
 *         description: Product created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 name:
 *                   type: string
 *                   example: "Sapato"
 *                 description:
 *                   type: string
 *                   example: "Sapato, masculino, preto 44"
 *                 price: 
 *                   type: integer
 *                   example: 95
 *                 stock: 
 *                   type: integer
 *                   example: 12
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-08-15T15:13:44.383Z"
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-08-15T15:13:44.383Z"
 * 
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/updateProduct/{id}:
 *   put:
 *     summary: Update a product by ID
 *     tags: [Products]
  *     security:
 *       - BearerAuth: [] 
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *         description: Update by ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Sapato"
 *               description:
 *                 type: string
 *                 example: "Sapato, masculino, preto 44"
 *               price: 
 *                 type: integer
 *                 example: 95
 *     responses:
 *       200:
 *         description: Product updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 name:
 *                   type: string
 *                   example: "Sapato"
 *                 description:
 *                   type: string
 *                   example: "Sapato, masculino, preto 44"
 *                 price: 
 *                   type: integer
 *                   example: 95
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-08-15T15:13:44.383Z"
 * 
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Product not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/updateStock/{id}:
 *   put:
 *     summary: Update a product stock by ID
 *     tags: [Products]
  *     security:
 *       - BearerAuth: [] 
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *         description: Update by ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               stock: 
 *                 type: integer
 *                 example: 12
 *     responses:
 *       200:
 *         description: Product dtock updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 stock: 
 *                   type: integer
 *                   example: 12
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-08-15T15:13:44.383Z"
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Product not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/stock:
 *   get:
 *     summary: Retrieve all products in stock
 *     tags: [Products]
  *     security:
 *       - BearerAuth: [] 
 *     responses:
 *       200:
 *         description: Successfully retrieved all products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   name:
 *                     type: string
 *                     example: "Sapato"
 *                   description:
 *                     type: string
 *                     example: "Sapato, masculino, preto 44"
 *                   price:
 *                     type: integer
 *                     example: 95
 *                   stock:
 *                     type: integer
 *                     example: 12
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                     example: "2024-08-15T15:13:44.383Z"
 *                   updatedAt:
 *                     type: string
 *                     format: date-time
 *                     example: "2024-08-15T15:13:44.383Z"
 *       404:
 *         description: No products found
 *       500:
 *         description: Internal server error
 */

//Sales


/**
 * @swagger
 * /api/createSales:
 *   post:
 *     summary: Create a new sale
 *     tags: [Sales]
  *     security:
 *       - BearerAuth: [] 
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               customerId:
 *                 type: integer
 *                 example: 1
 *                 description: ID of the customer making the purchase
 *               items:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     productId:
 *                       type: integer
 *                       example: 1
 *                       description: ID of the product being purchased
 *                     quantity:
 *                       type: integer
 *                       example: 2
 *                       description: Quantity of the product being purchased
 * 
 *     responses:
 *       201:
 *         description: Sale created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   productId:
 *                     type: integer
 *                     example: 1
 *                   customerId:
 *                     type: integer
 *                     example: 1
 *                   quantity:
 *                     type: integer
 *                     example: 2
 *                   totalProductPrice:
 *                     type: number
 *                     example: 190.00
 *                   saleId:
 *                     type: integer
 *                     example: 1
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                     example: "2024-08-26T15:13:44.383Z"
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Internal server error
 */


/**
 * @swagger
 * /api/showSale:
 *   get:
 *     summary: Retrieve all sales
 *     tags: [Sales]
  *     security:
 *       - BearerAuth: [] 
 *     responses:
 *       200:
 *         description: Successfully retrieved all sales
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   customerId:
 *                     type: integer
 *                     example: 1
 *                   quantity:
 *                     type: integer
 *                     example: 3
 *                   totalPrice:
 *                     type: number
 *                     example: 285.00
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                     example: "2024-08-26T15:13:44.383Z"
 *                   updatedAt:
 *                     type: string
 *                     format: date-time
 *                     example: "2024-08-26T15:13:44.383Z"
 *       404:
 *         description: No sales found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/showSale/{id}:
 *   get:
 *     summary: Retrieve sales by customer ID
 *     tags: [Sales]
  *     security:
 *       - BearerAuth: [] 
 *     parameters:
 *       - in: path
 *         name: customerId
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *         description: ID of the customer
 *     responses:
 *       200:
 *         description: Successfully retrieved sales for the specified customer
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   customerId:
 *                     type: integer
 *                     example: 1
 *                   quantity:
 *                     type: integer
 *                     example: 3
 *                   totalPrice:
 *                     type: number
 *                     example: 285.00
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                     example: "2024-08-26T15:13:44.383Z"
 *                   updatedAt:
 *                     type: string
 *                     format: date-time
 *                     example: "2024-08-26T15:13:44.383Z"
 *       404:
 *         description: Sales not found for the specified customer
 *       500:
 *         description: Internal server error
 */


/**
 * @swagger
 * /api/productBestSelling:
 *   get:
 *     summary: Retrieve the best-selling products
 *     tags: [Products]
  *     security:
 *       - BearerAuth: [] 
 *     responses:
 *       200:
 *         description: Successfully retrieved the best-selling products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   productId:
 *                     type: integer
 *                     example: 1
 *                     description: The ID of the product
 *                   productName:
 *                     type: string
 *                     example: "Sapato"
 *                     description: The name of the product
 *                   quantity:
 *                     type: integer
 *                     example: 150
 *                     description: The quantity of the product sold
 *       500:
 *         description: Internal server error
 */
