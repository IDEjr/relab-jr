import { useForm } from "react-hook-form";
import { isEmail } from "validator";
import { sendContactForm } from "./../../lib/api";
import styles from "./formularioServicos.module.css"
import { FaRegComment, FaRegEnvelope, FaHome } from "react-icons/fa";
import Image from 'next/image'


export default function formularioServicos(forms) {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    await sendContactForm(data);
  }

  return(
    <div className={styles.mainContainer}>
      <div className={styles.logo}>
        <Image
          src={forms.logo}
          width={150}
          height={150}
        />
      </div>
      
      <h2 className={styles.title}>
        {forms.tituloServicos}
      </h2>
      <div className={styles.formIconsContainer}>
        <div className={styles.formContainer}>
          <div className={styles.smallField}>
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
          <div className={styles.smallField}>
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
          <div className={styles.smallField}>
            {/* <label className={styles.label_form}>Celular:</label> */}
            <input
              className={errors?.name && styles.input_error}
              type="tell"
              placeholder="Celular*"
              // pattern="[0-9]{2} \[0-9]{5}\-[0-9]{4}"
              {...register("celular", { required: true })}
            />
            {errors?.celular?.type === "required" && (
              <p className={styles.error_message}>Campo obrigatório</p>
            )}
            {errors?.celular?.type === "validate" && (
              <p className={styles.error_message}>Número inválido.</p>
            )}
          </div>
          <div className={styles.smallField}>
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
          <div className={styles.largeField}>
            <textarea
              className={errors?.name && styles.input_error}
              // id={styles.mensagem}
              type="text"
              placeholder="Sua mensagem"
              {...register("mensagem", { required: false })}
            />
          </div>
          <div className={styles.smallField}>
            <button onClick={() => handleSubmit(onSubmit)()}>Enviar</button>
          </div>
        </div>
        <div className={styles.iconsContainer}>
          <p className={styles.iconsP}>
            <FaRegComment className={styles.icons}/>
            {forms.celular}
          </p>
          <p className={styles.iconsP}>
            <FaRegEnvelope className={styles.icons}/>
            {forms.email}
          </p>
          <p className={styles.iconsP}>
            <FaHome className={styles.icons}/>
            {forms.endereco1} 
          </p>
          <p className={styles.iconsP}>
            <FaHome className={styles.icons}/>
            {forms.endereco1} 
          </p>
        </div>
      </div>
    </div>
  );
};