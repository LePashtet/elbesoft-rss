const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const { default: mongoose } = require('mongoose');
const path = require('path');
const User = require('../models/user');
const { createConfig } = require('../config/config');
const mongoSessionStore = require('../config/sessionLoader');

const configPath = path.join(__dirname, '../../../configs/.env');
console.log(configPath)
const config = createConfig(configPath);

passport.use(new GoogleStrategy(
    {
        clientID: config.googleClientId,
        clientSecret: config.googleClientSecret,
        callbackURL: config.googleCallbackUrl,
        scope: ['profile', 'email'],
        passReqToCallback: true,
    },
    (async (req, accessToken, refreshToken, profile, done) => {
        try {
            const { email } = profile._json;
            if (!email) return done(new Error('Failed to receive email from Google. Please try again :('));

            const user = await User.findOne({ email });

            if (user) {
                return done(null, user);
            }
            const newUser = await User.create({
                name: profile.displayName,
                profileId: profile.id,
                email,
                accessToken,
            });
            return done(null, newUser);
        } catch (verifyErr) {
            done(verifyErr);
        }
    }),

));

module.exports = passport;
