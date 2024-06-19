import Image from 'next/image'
import styles from './gridMembros.module.css'
import CardMembros from '@/components/cardMembro'


export default function GridMembros({ titulo, logo, membros }) {
  let presidencia = [];
  let vice_presidencia = [];
  let diretoria = [];
  let assessoria = [];
  let gerencia = [];
  let consultoria = [];
  let aux = membros[0];
  for (let i in membros) {
    if(membros[i].posicao == 'Presidência') {
      presidencia.push(membros[i]);
    } else if(membros[i].posicao == ('Vice-Presidência')) {
      vice_presidencia.push(membros[i]);
    } else if(membros[i].posicao.includes('Diretoria')) {
      diretoria.push(membros[i]);
    } else if(membros[i].posicao.includes('Assessoria')) {
      assessoria.push(membros[i]);
    } else if(membros[i].posicao.includes('Gerência')) {
      gerencia.push(membros[i]);
    } else if(membros[i].posicao.includes('Consultoria')) {
      consultoria.push(membros[i]);
    }
  }

  membros = [...presidencia,...vice_presidencia,...diretoria,...assessoria,...gerencia,...consultoria];
  return (
    <>
      <div className={styles.chamariz}>
        <h2 className={styles.tituloMembros}>{titulo}</h2>
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