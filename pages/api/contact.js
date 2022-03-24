import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

export default function (req, res) {
  dotenv.config();
  const PASSWORD = process.env.PASSWORD;
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: 'anandigital.contact@gmail.com',
      pass: PASSWORD,
    },
    secure: true,
  });

  const mailData = {
    from: 'anandigital.contact@gmail.com',
    to: 'ndawkunda@outlook.com',
    subject: `Message From ${req.body.fullname}`,
    text: `
    Prénom et nom: ${req.body.fullname}
    Email: ${req.body.email}
    Téléphone: ${req.body.phone}
    Projets: ${req.body.projectsChoice.join(' - ')}
    Informations complémentaires: ${req.body.info}`,
    // html: <div>{req.body.message}</div>
  }
  
  transporter.sendMail(mailData, function (err, info) {
    if (err) {
      console.log(err);
      res.send("error" + JSON.stringify(err));
    }
    else {
      console.log(info)
      res.send("success");
    }
  })
  res.status(200)
}