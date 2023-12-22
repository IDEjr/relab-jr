import { mailOptions, transporter } from "./../../lib/nodemailer";

const handler = async (req, res) => {

    if (req.method === "POST"){
        const data = JSON.parse(req.body);
        if (!data.nome || !data.email || !data.numero || !data.assunto){
             return res.status(400).json({ message: 'Bosta'})
        }

        try {
            if (data.tipo == 0){
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
            }
            else if (data.tipo == 1){
                await transporter.sendMail({
                    ...mailOptions,
                    subject: data.assunto,
                    text: "TESTE, TESTE, TESTE",
                    html: `<p>Nome: ${data.nome}</p>
                        <p>Número: ${data.numero}</p>
                        <p>E-mail: ${data.email}</p>
                        <p>Curso: ${data.curso}</p>
                        <p>Semestre: ${data.semestre}</p>
                        <p>_____________________________________________________________________________</p>
                        <p>${data.mensagem}</p>`
                })
            return res.status(200).json({ sucess: true });
            }

        } catch (error) {
            console.log(error);
            return res.status(400).json({ message: error.message });
        }
    }
};

export default handler;