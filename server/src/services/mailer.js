const nodemailer = require("nodemailer");

const sendEmail = (to, subject, html) => {
    nodemailer.createTransport({
        host: "smtpout.secureserver.net",
        secure: true,
        secureConnection: false,
        tls: {
            ciphers: 'SSLv3'
        },
        requireTLS: true,
        port: 465,
        debug: true,
        auth: {
            user: 'contact@elbesoft.agency',
            pass: 'STpcXk%7d2/siw_'
        },
        from: 'contact@elbesoft.agency'
    }).sendMail({
        from: 'Daily News <contact@elbesoft.agency>',
        to,
        subject,
        html
    })
}
module.exports = {sendEmail}
