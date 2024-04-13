export async function POST(request: Request) {
  const formData = await request.formData();
  const nodemailer = require('nodemailer')
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: 'tecnicoswefix@gmail.com',
      pass: process.env.PASSWORD,
    },
    secure: true,
  })
  const mailData = {
    from: `${formData.get('email')}`,
    to: 'tecnicoswefix@gmail.com',
    subject: `Message From ${formData.get('nombre')}`,
    html: `<div>
    <p>Comentario: ${formData.get('comentario')}</p>
    <p>Proveniente de: ${formData.get('email')}</p>
    </div>`,
  }
  await new Promise((resolve, reject) => {
    // verify connection configuration
    transporter.verify(function (error:any, success:any) {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        console.log("Server is ready to take our messages");
        resolve(success);
      }
    });
  });

  await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(mailData, (err:any, info:any) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        console.log(info);
        resolve(info);
      }
    });
  });

  return Response.json({ data: 'Ok' });
}