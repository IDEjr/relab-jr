import Image from 'next/image'
import styles from './gridMembros.module.css'
import CardMembros from '../cardMembros';

export default function gridMembros({titulo, logo ,membros }) {
    

    
  return (
    <>
      <div className={styles.chamariz}>
        <h2 className={styles.tituloMembros}> {titulo}</h2>
        <Image          
                        className={styles.logoGrid}
                        src={logo}
                        width={95}
                        height={95}
                        alt="Logo"
        /> 
        <ul className={styles.membrosGrid}>
            {membros && membros.map((membro, i) => (
            <CardMembros
                className={styles.membroInd}
                key={i}
                nome={membro.nome}
                posicao={membro.posicao}
                imagem={membro.imagem}
                linkedin={membro.linkedin}
            />
            ))}
        </ul>
        </div>
    </>
  );
}