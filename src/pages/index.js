import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import ImagemComBotao from '../components/imagemComBotao'
import ServicesHome from '../components/servicesHome'
import Inicio from '../components/inicio'
import imagemResultados from '../../public/uploads/image/imagemComBotao/imagemResultados.png'
import imagemMembros from '../../public/uploads/image/imagemComBotao/imagemMembros.png'
import imagemInicioHome from '../../public/uploads/image/inicio/imagemInicioHome.jpg'


export default function Home({imagensComBotao}) {
  const resultados = {
    imagem: imagemResultados,
    titulo: 'MELHORE SEUS RESULTADOS',
    texto: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget libero viverra velit pellentesque hendrerit. Donec interdum dolor nisl, at rhoncus dolor consectetur euismod. Aliquam scelerisque finibus egestas.',
    textoBotao: 'Entre em contato',
    link: 'servicos'
  };

  const membros = {
    imagem: imagemMembros,
    titulo: 'MEMBROS',
    texto: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget libero viverra velit pellentesque hendrerit. Donec interdum dolor nisl, at rhoncus dolor consectetur euismod. Aliquam scelerisque finibus egestas.',
    textoBotao: 'Sejo membro',
    link: 'quemSomos'
  };

  const path = imagemInicioHome

  return (
    <div className={styles['tudo']}>
      <Navbar />
      <Inicio title = {"GESTÃO É A NOSSA CAUSA"} image= {path}/>
      <ImagemComBotao {...resultados} />
      <ServicesHome />
      <ImagemComBotao {...membros} />        
      <Footer />
    </div>
  )
}



// export default function quemSomos({ membros }) {
//   const path = imagemQuemSomos
//   return (
//     <>
//       <Navbar />
//       <Inicio title = {"QUEM SOMOS"} image= {path}/>
//       <TextoBarraQuemSomos />
//       <ul className={styles['exemplo-list']}>
//         {membros && membros.map((membro, i) => (
//           <a target="_blank" href={`${membro.linkedin}`} className={styles["link"]} key={i}>
//             <div>
//               <Image
//                 src={`${membro.imagem}`}
//                 width={400}
//                 height={400}
//                 alt="Membro "
//               />
//             </div>
//             <div className={styles["card"]}>
//               <p>{membro.conteudo}</p>
//             </div>
//           </a>
//         ))}
//       </ul>
//       <Footer />
//     </>
//   );
// }


// export async function getStaticProps() {

//   const imagensComBotao = handleJSONfiles("./content/imagensComBotao");
//   return {
//     props: { imagensComBotao },
//   };
// }