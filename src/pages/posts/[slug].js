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
    logo: nav.logo,
    linkedin: nav.linkedin,
    instagram: nav.instagram,
    email: nav.email
  };

    // formata data
    var dataForm;
    dataForm = content.data.substring(8, 10) + '/' + content.data.substring(5, 7) + '/' + content.data.substring(0, 4);

  return (
    <>
      <div className={styles.container}>
        <React.Fragment>
          <Navbar {...navData} />
        </React.Fragment>
        <div className={styles.topPart}>
          <Image
            src={content.imagemCapa}
            fill
            className={styles.topImg}
            style={{objectFit: 'cover', background: 'black'}}
          />
          <p className="newStyle"></p>
          <div className={styles.contentBlock}>
            <div className={styles.titleAndRest}>
              <p className={styles.categorie}>
                {content.genero}
              </p>
              <h1 className={styles.title}>
                {content.titulo}
              </h1>
              <p className={styles.subTitle}>
                {content.previa}
              </p>
            </div>
            <div className={styles.details}>
              <a href={content.linkedin} target="_blank" className={styles['autor']}>
                {content.autor}
              </a>
              <p className={styles.data}>
                {dataForm}
              </p>
            </div>
          </div>
        </div>
        <div className={styles.markDown}>
          {/* <ReactMarkdown className={styles.markdown}
            components={{ img: ({ node, ...props }) => <img style={{ maxWidth: '100%', display: 'block', padding: '5vh 0px 5vh 0px', margin: 'auto' }}{...props} /> }}>
            {content.previa}
          </ReactMarkdown> */}
          <ReactMarkdown className={styles.markdown}>
            {content.conteudo}
          </ReactMarkdown>
        </div>
        <div className={styles.bottomContainer}>
          <div className={styles.authorAndPencil}>
            <Image src={pencilImg} />
            <text className={styles.authorName}>
              <a href={content.linkedin} className={styles['autor']}>
                {content.autor}
              </a>
            </text>
          </div>
          <div className={styles.buttonContainer}>
            <button onClick={handleMove} className={styles.voltarButton}>
              Voltar
            </button>
          </div>
        </div>
        <Footer {...foo} />
      </div>
    </>
  )
}

export async function getStaticProps({ params: { slug } }) {
  const caminho = 'posts';
  const caminho2 = "navFooter";
  const pagina2 = "navbar";
  const pagina3 = "footer";

  const content = handleJSONfile(`./content/${caminho}/${slug}.json`);
  const nav = handleJSONfile(`./content/${caminho2}/${pagina2}.json`);
  const foo = handleJSONfile(`./content/${caminho2}/${pagina3}.json`);

  return {
    props: { content, nav, foo },
  };
}

export async function getStaticPaths() {
  const raiz = process.env.PWD || process.env.INIT_CWD;
  const caminho = 'posts';

  const filesInProjects = fs.readdirSync(raiz + `/content/${caminho}`)

  const paths = filesInProjects.map(file => {
    const filename = file.slice(0, file.indexOf('.'))
    return { params: { slug: filename } }
  })

  return {
    paths,
    fallback: false
  }
}