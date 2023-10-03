import Image from 'next/image'
import styles from './gridMembros.module.css'
import CardMembros from '../cardMembros';

export default function gridMembros({...membros }) {
    
    
    var arrMembros = [];
    for( const i in membros){
        //console.log(membros[i]);
        arrMembros.push(membros[i]);
    }
    membros = arrMembros
    //console.log(membros);
    console.log(membros);
  return (
    <>
      <div className={styles.chamariz}>
        <h2 className={styles.tituloMembros}> CONHEÇA NOSSOS MEMBROS</h2>
        <Image          
                        className={styles.logoGrid}
                        src={'/.logo/aqui'}
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