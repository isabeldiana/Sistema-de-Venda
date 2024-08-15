
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
 * /api/createCustomer:
 *   post:
 *     summary: Create a new customer
 *     tags: [Customer]
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
 *                   example: null
 *                   nullable: true
 *                 cnpj:
 *                   type: string
 *                   example: null
 *                   nullable: true
 *                 address:
 *                   type: string
 *                   example: null
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
 *     tags: [Customer]
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
