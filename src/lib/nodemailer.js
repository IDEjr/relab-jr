import nodemaliler from "nodemailer";

const email = "";
const pass = "";

export const transporter = nodemaliler.createTransport({
    service: 'gmail',
    auth:{
        user: email,
        pass: pass
    }

});

export const mailOptions = {
    from: email,
    to: email,
};