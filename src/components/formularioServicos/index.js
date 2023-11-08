import { useForm } from "react-hook-form";
import { isEmail } from "validator";
import styles from "./formulario.module.css"
import { sendContactForm } from "./../../lib/api";

const Formulario = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

    const onSubmit = async (data) => {
        console.log(data);
        await sendContactForm(data);
    }

    return(
        <div className={styles.mainContainer}>
            <h2 className={styles.title}>
                ENTRE EM CONTATO
            </h2>
            <div className={styles.formContainer}>
                <div className={styles.halfContainer}>
                    <input
                        className={errors?.name && styles.input_error}
                        type="text"
                        placeholder="Nome*"
                        {...register("nome", { required: true })}
                    />
                    {errors?.nome?.type === "required" && (
                        <p className={styles.error_message}>Campo obrigatório</p>
                    )}
                </div>

                <div className={styles.halfContainer}>
                    <input
                        className={errors?.email && styles.input_error}
                        type="email"
                        placeholder="E-mail*"
                        {...register("email", {
                            required: true,
                            validate: (value) => isEmail(value),
                        })}
                    />
                    {errors?.email?.type === "required" && (
                        <p className={styles.error_message}>Campo obrigatório.</p>
                    )}

                    {errors?.email?.type === "validate" && (
                        <p className={styles.error_message}>Email invalido</p>
                    )}
                </div>

                <div className={styles.halfContainer}>
                    <input
                        className={errors?.name && styles.input_error}
                        type="tell"
                        placeholder="Celular*"
                        {...register("numero", { required: true })}
                    />
                    {errors?.numero?.type === "required" && (
                        <p className={styles.error_message}>Campo obrigatório</p>
                    )}

                    {errors?.numero?.type === "validate" && (
                        <p className={styles.error_message}>Número inválido.</p>
                    )}
                </div>

                <div className={styles.halfContainer}>
                    <input
                        className={errors?.name && styles.input_error}
                        type="text"
                        placeholder="Assunto*"
                        {...register("assunto", { required: true })}
                    />
                    {errors?.assunto?.type === "required" && (
                        <p className={styles.error_message}>Campo obrigatório</p>
                    )}
                </div>

                <div className={styles.fullContainer}>
                    <textarea
                        className={errors?.name && styles.input_error}
                        type="text"
                        placeholder="Sua mensagem"
                        {...register("mensagem", { required: false })}
                    />
                </div>

                <div className={styles.halfContainer}>
                    <button onClick={() => handleSubmit(onSubmit)()}>Enviar</button>
                </div>
            </div>
        </div>
    );
};

export default Formulario