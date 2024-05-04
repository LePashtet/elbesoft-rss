const {Router} = require('express');
const newsletterRouter = require('./newsletter');
const authRouter = require('./auth');
const ensureAuthenticated = require("../../middlewares/auth");

const router = Router();

router.use('/newsletter', ensureAuthenticated, newsletterRouter);
router.use('/auth', authRouter);

module.exports = router;
