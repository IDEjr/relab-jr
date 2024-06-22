import nodemailer from 'nodemailer'


const email = process.env.EMAIL_FORM;
const password = process.env.SENHA_DE_APP;

export const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user: email,
        pass: password
    }
});

export const mailOptions = {
  from: email,
  to: email,
};