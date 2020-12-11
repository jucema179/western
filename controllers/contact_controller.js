const express = require('express');
const router = express.Router();

const getTemplate = require('../services/template');
const sendMail = require('../services/mail');

const contactForm = async (req, res) => {
    var firstName = req.body.firstName
    var lastName = req.body.lastName
    var zip = req.body.zip
    var phone = req.body.phone
    var email = req.body.email
    
    const data = {
        firstName,
        lastName,
        zip,
        phone,
        email
    };

    const htmlTemplate = getTemplate('contact.html', data);

    sendMail('alexiz.padilla11@gmail.com',data.email, 'Contact Client', htmlTemplate).then(() => {
        res.send({ message: 'Email sent', success: true });
    }).catch(() => {
        res.send({ message: 'Email not sent', success: false });
    });
};

router.post('/', contactForm);

module.exports = router;
