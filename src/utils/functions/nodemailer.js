import nodemaliler from "nodemailer"


const email = process.env.EMAIL_FORM;
const password = process.env.SENHA_DE_APP;

console.log(`EMAIL_FORM: ${email}`)

export const transporter = nodemaliler.createTransport({
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