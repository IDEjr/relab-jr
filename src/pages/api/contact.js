import { mailOptions, transporter } from "@/lib/nodemailer";

const handler = async (req, res) => {

  if (req.method === "POST"){
    const data = JSON.parse(req.body);
    if (!data.nome || !data.email || !data.celular || !data.assunto){
      return res.status(400).json({ message: 'Campo(s) obrigatório(s) não preenchido(s).'})
    }

    try {
      await transporter.sendMail({
        ...mailOptions, 
        subject: data.assunto,
        text:
        `Nome: ${data.nome}\n` +
        `Celular: ${data.celular}\n` +
        `E-mail: ${data.email}\n` +
        `_______________________________________________________________________________________________________________________________________\n` +
        `${data.mensagem}`,
        html:  `<p>Nome: ${data.nome}</p>
            <p>Celular: ${data.celular}</p>
            <p>E-mail: ${data.email}
            <hr/>
            <p>${data.mensagem}</p>`
      })
      return res.status(200).json({ sucess: true });

    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: error.message });
    }
  }

  try {
    await transporter.sendMail({
      ...mailOptions,
      subject: data.assunto,
      text: "TESTE, TESTE, TESTE",
      html: `<p>Nome: ${data.nome}</p>
            <p>Número: ${data.numero}</p>
            <p>E-mail: ${data.email}
            <p>_____________________________________________________________________________</p>
            <p>${data.mensagem}</p>`
    })
    return res.status(200).json({ sucess: true });

  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: error.message });
  }
}

export default handler;