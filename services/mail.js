const nodemailer = require('nodemailer');

const EMAIL_SERVICE = "Gmail"
const EMAIL_HOST = "smtp.gmail.com"
const EMAIL_HOST_PORT = 465

const EMAIL_ACCOUNT = "alexiz.padilla11@gmail.com"
const EMAIL_PASSWORD = "zomboyAP11"

const transporter = nodemailer.createTransport({ 
  service: EMAIL_SERVICE,
  host: EMAIL_HOST,
  port: EMAIL_HOST_PORT,
  secure: true,
  auth: { user: EMAIL_ACCOUNT,
    pass: EMAIL_PASSWORD } 
  });

    transporter.verify((error, success) => {
      if (error) {
        console.log(error);
      } else {
        console.log('Server is ready to take messages');
      }
    });

const sendMail = (from ,to, subject, html) => new Promise ((resolve, reject) => {
  const mailOptions = { 
    from,
    to,
    subject,
    html,
    forceEmbeddedImages: true 
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      reject(error);
    } else {
      resolve(info);
    }
  });
})

module.exports = sendMail;
