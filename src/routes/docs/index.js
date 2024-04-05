const express = require('express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerDefinition = require('../../docs/v1.json');

const router = express.Router();


router.use('/', swaggerUi.serve);
router.get(
    '/',
    swaggerUi.setup(swaggerDefinition, {
        explorer: true,
    }),
);

module.exports = router;
