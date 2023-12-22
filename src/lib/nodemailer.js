import nodemaliler from "nodemailer";

// const email = "caue.scotti@gmail.com";
const email = "";
// const pass = "xyeklutnnseearxr";
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