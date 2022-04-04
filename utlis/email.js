const nodemail = require('nodemailer');

const sendEmail = async options => {
  // 1) Create a transporter

  const transporter = nodemail.createTransport({
    // For gmail

    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD
    }
    //Activate in gmail "less secure app" option

    //For mailtrap
    // host: process.env.EMAIL_HOST,
    // port: process.env.EMAIL_PORT,
    // auth: {
    //   user: process.env.EMAIL_USERNAME,
    //   pass: process.env.EMAIL_PASSWORD
    // }
  });

  //2) Define the email options

  const mailOptions = {
    from: 'Souvik Mukherjee <souvikmukherjee150@gmail.com>',
    to: options.email,
    subject: options.subject,
    text: options.message
    // html: <h1>${options.subject}</h1>
  };

  //3) Actually send the email

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
