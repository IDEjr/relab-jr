import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import ImagemComBotao from '../components/imagemComBotao'
import ServicesHome from '../components/servicesHome'
import Inicio from '../components/inicio'
import { handleJSONfiles } from '@/utils/functions/jsonHandler'
// import imagemResultados from '../../public/uploads/image/imagemComBotao/imagemResultados.png'
// import imagemMembros from '../../public/uploads/image/imagemComBotao/imagemMembros.png'
// import imagemInicioHome from '../../public/uploads/image/inicio/imagemInicioHome.jpg'






export default function Home({imagensComBotao, imagensInicio}) {
  console.log(imagensComBotao);
  
  
  // let imagemInicioHome;

  // imagemInicioHome = imagensInicio.imagem


  let imagemResultados;
  let imagemMembros;
  let img = [];

  imagensComBotao.map((imagemComBotao, i) => {
    img[i] = imagemComBotao.imagem
  });

  imagemResultados = img[1]
  imagemMembros = img[0]


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






















// export default function Home({imagensComBotao}) {
//   const resultados = {
//     imagem: imagemResultados,
//     titulo: 'MELHORE SEUS RESULTADOS',
//     texto: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget libero viverra velit pellentesque hendrerit. Donec interdum dolor nisl, at rhoncus dolor consectetur euismod. Aliquam scelerisque finibus egestas.',
//     textoBotao: 'Entre em contato',
//     link: 'servicos'
//   };

//   const membros = {
//     imagem: imagemMembros,
//     titulo: 'MEMBROS',
//     texto: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget libero viverra velit pellentesque hendrerit. Donec interdum dolor nisl, at rhoncus dolor consectetur euismod. Aliquam scelerisque finibus egestas.',
//     textoBotao: 'Sejo membro',
//     link: 'quemSomos'
//   };

//   const path = imagemInicioHome

//   return (
//     <div className={styles['tudo']}>
//       <Navbar />
//       <Inicio title = {"GESTÃO É A NOSSA CAUSA"} image= {path}/>
//       <ImagemComBotao {...resultados} />
//       <ServicesHome />
//       <ImagemComBotao {...membros} />        
//       <Footer />
//     </div>
//   )
// }




















// {imagensComBotao && imagensComBotao.map((imagemComBotao, i) => (
//   <a target="_blank" href={`${imagemComBotao.linkedin}`} className={styles["link"]} key={i}>
//     <div>
//       <Image
//         src={`${imagemComBotao.imagem}`}
//         width={400}
//         height={400}
//         alt="imagemComBotao "
//       />
//     </div>
//     <div className={styles["card"]}>
//       <p>{imagemComBotao.conteudo}</p>
//     </div>
//   </a>
// )



// export async function getStaticProps() {

//   const imagensComBotao = handleJSONfiles("./content/imagensComBotao");
//   return {
//     props: { imagensComBotao },
//   };
// }

export async function getStaticProps() {

  const imagensComBotao = handleJSONfiles("./content/imagensComBotao");
  // const imagensInicio = handleJSONfiles("./content/imagensInicio");, imagensInicio 
  return {
    props: { imagensComBotao},
  };
}

// export async function getStaticProps() {

//   const imagensInicio = handleJSONfiles("./content/imagensInicio");
//   return {
//     props: { imagensInicio },
//   };
// }