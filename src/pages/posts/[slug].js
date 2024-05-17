import styles from './slug.module.css'
import Image from 'next/image'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import fs from 'fs'
import { handleJSONfile } from '@/utils/functions/jsonHandler'
import { useRouter } from 'next/router'
import { RxPencil1 } from "react-icons/rx"
import ReactMarkdown from 'react-markdown'
import React from 'react'


const handleMove = () => {
  window.scrollTo({ top: 0, behavior: "smooth" }); // here it goes
};

export default function Posts({ post, nav, foo, blog }) {
  const router = useRouter();
  const { postId } = router.query

  console.log(blog)

  const navData = {
    logo: nav.logo,
    linkedin: nav.linkedin,
    instagram: nav.instagram,
    email: nav.email
  };

    // formata data
    var dataForm;
    dataForm = post.data.substring(8, 10) + '/' + post.data.substring(5, 7) + '/' + post.data.substring(0, 4);

  return (
    <>
      <div className={styles.container}>
        <React.Fragment>
          <Navbar {...navData} />
        </React.Fragment>
        <div className={styles.topPart}>
          <Image
            src={post.imagemCapa}
            fill
            className={styles.topImg}
            style={{objectFit: 'cover', background: 'black'}}
            alt="Imagem Capa"
          />
          <div className="newStyle"></div>
          <div className={styles.postBlock}>
            <div className={styles.text}>
              <h3 className={styles.genero}>{post.genero}</h3>
              <h2 className={styles.title}>{post.titulo}</h2>
              <h3 className={styles.subTitle}>{post.previa}</h3>
            </div>
            <div className={styles.details}>
              <a href={post.linkedin} target="_blank" className={styles.autor}>
                {post.autor}
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
            {post.previa}
          </ReactMarkdown> */}
          <ReactMarkdown className={styles.markdown}>
            {post.conteudo}
          </ReactMarkdown>
        </div>
        <div className={styles.bottomContainer}>
          <div className={styles.authorAndPencil}>
            <RxPencil1 />
            <p className={styles.authorName}>
              <a href={post.linkedin} className={styles.autor}>
                {post.autor}
              </a>
            </p>
          </div>
          <div className={styles.buttonContainer}>
            <button onClick={handleMove}>
            {blog.inicioBlog.textoBotao}
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

  const post = handleJSONfile(`./content/${caminho}/${slug}.json`);
  const nav = handleJSONfile(`./content/${caminho2}/${pagina2}.json`);
  const foo = handleJSONfile(`./content/${caminho2}/${pagina3}.json`);
  const blog = handleJSONfile(`./content/paginas/blog.json`);

  return {
    props: { post, nav, foo, blog },
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