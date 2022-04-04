const nodemail = require('nodemailer');

const sendEmail = options => {

  // 1) Create a transporter

  const transporter = nodemail.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD
    }
  });

  //2) Define the email options for

  //3) Actually send the email
  