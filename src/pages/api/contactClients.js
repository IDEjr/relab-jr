import nodemailer from 'nodemailer'


const handler = async (req, res) => {

  if (req.method === "POST") {
    const data = req.body;
    if (!data.nome || !data.email || !data.celular || !data.assunto || !data.mensagem) {
      return res.status(400).json({ message: 'Campo(s) obrigatório(s) não preenchido(s).'})
    }

    try {
      const email = process.env.EMAIL_FORM;
      const password = process.env.SENHA_DE_APP;

      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth:{
          user: email,
          pass: password
        }
      });
    
      const mailOptions = {
        from: email,
        to: email,
      };

      await transporter.sendMail({
        ...mailOptions,
        subject: data.assunto,
        text:
        `Nome: ${data.nome}\n` +
        `E-mail: ${data.email}\n` +
        `Celular: ${data.celular}\n` +
        `_______________________________________________________________________________________________________________________________________\n` +
        `${data.mensagem}`,
        html:`<p>Nome: ${data.nome}</p>
              <p>E-mail: ${data.email}</p>
              <p>Celular: ${data.celular}</p>
              <hr/>
              <p>${data.mensagem}</p>`
      })
      return res.status(200).json({ sucess: true });

    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: error.message });
    }
  }
}

export default handler;