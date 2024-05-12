import Image from 'next/image'
import styles from './gridMembros.module.css'
import CardMembros from '@/components/cardMembro';

export default function gridMembros({ titulo, logo, membros }) {
  //const cargos = ['Presidência','Vice-Presidência','Diretoria','Assessoria','Gerência','Consultoria']; 
  let Ps = [];
  let VPs = [];
  let Dir = [];
  let Ass = [];
  let Ger = [];
  let Cons = [];
  let aux = membros[0];
  for (let i in membros){
    if(membros[i].posicao == 'Presidência'){
      // console.log(membros[i]);
      Ps.push(membros[i]);
    }else if(membros[i].posicao == ('Vice-Presidência')){
      // console.log(membros[i]);
      VPs.push(membros[i]);
    }else if(membros[i].posicao.includes('Diretoria')){
      Dir.push(membros[i]);
    }else if(membros[i].posicao.includes('Assessoria')){
      Ass.push(membros[i]);
    }else if(membros[i].posicao.includes('Gerência')){
      Ger.push(membros[i]);
    }else if(membros[i].posicao.includes('Consultoria')){
      Cons.push(membros[i]);
    }
  }

  membros = [...Ps,...VPs,...Dir,...Ass,...Ger,...Cons];
  // console.log(membros)
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