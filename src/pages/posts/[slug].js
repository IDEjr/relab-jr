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

    // formata data
    var dataForm;
    dataForm = content.data.substring(8, 10) + '/' + content.data.substring(5, 7) + '/' + content.data.substring(0, 4);

  return (
    <div className={styles.container}>
      <React.Fragment>
      <Navbar  {...navData}/>
      </React.Fragment>
      <div className={styles.topPart}>
        <Image
          src={content.imagemCapa}
          fill={true}
          className={styles.topImg}
          style={{objectFit: 'cover', background: 'black'}}
        />
        <div className={styles.contentBlock}>
          <div className={styles.titleAndRest}>
            <text className={styles.categorie}>
              {content.genero}
            </text>
            <h1 className={styles.title}>
              {content.titulo}
            </h1>
            <text className={styles.subTitle}>
              {content.previa}
            </text>
          </div>
          <text className={styles.details}>
            {content.autor}<span/>{dataForm}
          </text>
        </div>
      </div>
      <div className={styles.bottomPart}>
        <div className={styles.textAndRest}>
          <div className={styles.textFormater}>
            <ReactMarkdown className={styles.markdown}>
              {content.conteudo}
            </ReactMarkdown>
          </div>
          <div className={styles.author}>
            <div className={styles.authorAndPencil}>
              <Image src={pencilImg}/>
              <text className={styles.authorName}>
                {content.autor}
              </text>
            </div>
            <button onClick={handleMove} className={styles.voltarButton}>
              <Image className={styles.buttonImage} src={buttonImg}/>
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