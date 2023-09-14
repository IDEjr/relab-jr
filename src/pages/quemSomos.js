import Link from 'next/link'
import Image from 'next/image'
import Inicio from '../components/inicio'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import TextoBarraQuemSomos from '../components/textoBarraQuemSomos'
import Valores from '../components/valores'
import styles from '../styles/quemSomos.module.css'
import { handleJSONfiles } from '@/utils/functions/jsonHandler'
import { handleJSONfile } from '@/utils/functions/jsonHandler'


export default function quemSomos({quemSomos}) {
  // console.log(membros);

  const path = quemSomos.inicioQuemSomos.imagem;
  return (
    <>
      <Navbar />
      <Inicio title = {"QUEM SOMOS"} image= {path}/>
      <TextoBarraQuemSomos />
      <Valores />
      <div></div>
      <ul className={styles['exemplo-list']}>
        {quemSomos.painelMembros.membros && quemSomos.painelMembros.membros.map((membros, i) => (
          <Link target="_blank" href={`${membros.membro.linkedin}`} className={styles["link"]} key={i}>
            <div className={styles["card"]}>
              <p>{membros.membro.nome}</p>
              <p>{membros.membro.posicao}</p>
            </div>
            <div>
              <Image
                src={`${membros.membro.imagem}`}
                width={400}
                height={500}
                alt="Membro"
              />
            </div>
          </Link>
        ))}
      </ul>
      {/* <Footer /> */}
    </>
  );
}





/*{ <ul className={styles['exemplo-list']}>
        {membros && membros.map((membro, i) => (
          <Link target="_blank" href={`${membro.linkedin}`} className={styles["link"]} key={i}>
            <div className={styles["card"]}>
              <p>{membro.nome}</p>
              <p>{membro.posicao}</p>
            </div>
            <div>
              <Image
                src={`${membro.imagem}`}
                width={400}
                height={500}
                alt="Membro"
              />
            </div>
          </Link>
        ))}
      </ul>
      {/*<Footer />}
    </>
  );
}*/



{/* <ul className={styles['exemplo-list']}>
  {membros && membros.map((membro, i) => (
    <a target="_blank" href={`${membro.linkedin}`} className={styles["link"]} key={i}>
      <div>
        <Image
          src={`${membro.imagem}`}
          width={400}
          height={400}
          alt="Membro "
        />
      </div>
      <div className={styles["card"]}>
        <p>{membro.conteudo}</p>
      </div>
    </a>
  ))}
</ul> */}




// export async function getStaticProps() {

//   // const membros = handleJSONfiles("./content/membros");
//   const paginas = handleJSONfiles("./content/paginas");

//   return {
//     props: { paginas }
//   };
// }

export async function getStaticProps(){

  const caminho = "paginas";
  const pagina = "quemSomos";
  const quemSomos = handleJSONfile(`./content/${caminho}/${pagina}.json`);
  // const membros = handleJSONfiles("./content/membros");

  return {
    props: { quemSomos },
  };
}