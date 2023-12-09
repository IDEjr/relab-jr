import fs from 'fs'
import ReactMarkdown from 'react-markdown'
import matter from 'gray-matter'
import styles from './slug.module.css'
import { handleJSONfile } from '@/utils/functions/jsonHandler'
import { useRouter } from 'next/router'
import Image from 'next/image'
import pencilImg from '../../../public/uploads/slug/pencil.png'
import buttonImg from '../../../public/uploads/slug//voltarButton.png'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import React from 'react'


const handleMove = () => {
  window.scrollTo({ top: 0, behavior: "smooth" }); // here it goes
};



export default function Posts({ content, nav, foo }) {
  const router = useRouter();
  const { postId } = router.query

  const navData = {
    logo : nav.logo,
    linkedin : nav.linkedin,
    instagram : nav.instagram,
    email : nav.email
  };

  return (
    <div className={styles['container']}>
      <React.Fragment>
      <Navbar  {...navData}/>
      </React.Fragment>
      <div className={styles['top-part']}>
        <Image
            src={content.imagemCapa}
            fill={true}
            className={styles['top-img']}
        />
        <div className={styles['content-block']}>
          <div className={styles['title-and-rest']}>
            <text className={styles['categorie']}>
              {content.selecao}
            </text>
            <h1 className={styles['title']}>
              {content.titulo}
            </h1>
            <text className={styles['sub-title']}>
              {content.previa}
            </text>
          </div>
          <text className={styles['details']}>
            {content.autor}<span/>{content.data}
          </text>
        </div>
      </div>


      <div className={styles['bottom-part']}>
        <div className={styles['text-and-rest']}>
          <div className={styles['text-formater']}>
            <text className={styles['post-text']}>
              {content.conteudo}
            </text>
          </div>
          <div className={styles['author']}>
            <div className={styles['author-and-pencil']}>
              <Image className={styles['']} src={pencilImg}/>
              <text className={styles['author-name']}>
                {content.autor}
              </text>
            </div>
            <button onClick={handleMove} className={styles['voltar-button']}>
              <Image className={styles['button-image']} src={buttonImg}/>
            </button>
          </div>
        </div>
      </div>
      <Footer {...foo}/>
    </div>
  )
}

export async function getStaticProps({params : {slug} }){
  const caminho = 'posts';
  const caminho2 = "navFooter";
  const pagina2 = "navbar";
  const pagina3 = "footer";

  const content = handleJSONfile(`./content/${caminho}/${slug}.json`);
  const nav = handleJSONfile(`./content/${caminho2}/${pagina2}.json`);
  const foo = handleJSONfile(`./content/${caminho2}/${pagina3}.json`);

  return {
    props: { content , nav, foo},
  };
}

export async function getStaticPaths() {
  const raiz = process.env.PWD || process.env.INIT_CWD;
  const caminho = 'posts';

  const filesInProjects = fs.readdirSync(raiz + `/content/${caminho}`)

  const paths = filesInProjects.map(file => {
    const filename = file.slice(0, file.indexOf('.'))
    return { params: { slug: filename }}
  })

  return {
    paths,
    fallback: false 
  }
}