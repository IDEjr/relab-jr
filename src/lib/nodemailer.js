import nodemaliler from "nodemailer"
import { handleJSONfile } from '@/utils/functions/jsonHandler'


const forms = handleJSONfile(`./content/forms/forms.json`);

const password = forms.senhaApp;
const email = forms.emailForm;

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