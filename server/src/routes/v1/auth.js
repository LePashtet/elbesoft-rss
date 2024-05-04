const { Router } = require('express');
const passportGoogle = require('../../services/passport');
const catchAsync = require("../../middlewares/catchAsync");

const router = Router();

router.get('/google/callback', passportGoogle.authenticate('google', { failureRedirect: '/login', successReturnToOrRedirect: '/' }));

router.get('/google', passportGoogle.authenticate('google'));

router.get('/logout', catchAsync(async (req, res) => {
    req.session.destroy(function (err) {
        if (err) return res.redirect('/');
        res.clearCookie('sid');
        res.redirect('/login');
    });
}));

module.exports = router;
