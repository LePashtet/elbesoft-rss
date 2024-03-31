const { Router } = require('express');
const newsletterRouter = require('./newsletter');

const router = Router();

router.use('/newsletter', newsletterRouter);

module.exports = router;
