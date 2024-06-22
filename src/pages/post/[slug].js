import Image from 'next/image'
import styles from './slug.module.css'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { handleJSONfile } from '@/utils/jsonHandler'
import { handleJSONfiles } from '@/utils/jsonHandler'
import { RxPencil1 } from 'react-icons/rx'
import ReactMarkdown from 'react-markdown'
import React from 'react'


const handleMove = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export default function Posts({ post, nav, foo, blog, contato }) {

    var dataForm;
    dataForm = post.data.substring(8, 10) + '/' + post.data.substring(5, 7) + '/' + post.data.substring(0, 4);

  return (
    <>
      <div className={styles.container}>
        <React.Fragment>
          <Navbar contato = {contato} nav = {nav} />
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
          <ReactMarkdown className={styles.markdown}>
            {post.conteudo}
          </ReactMarkdown>
        </div>
        <div className={styles.bottomContainer}>
          <div className={styles.authorAndPencil}>
            <RxPencil1 />
            <p className={styles.authorName}>
              <a href={post.linkedin} target="_blank" className={styles.autor}>
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
        <Footer contato = {contato} footer = {foo}/>
      </div>
    </>
  )
}


export async function getStaticProps({ params: { slug } }) {

  const post = handleJSONfile(`./content/posts/${slug}.json`);
  const nav = handleJSONfile(`./content/navFooter/navbar.json`);
  const foo = handleJSONfile(`./content/navFooter/footer.json`);
  const blog = handleJSONfile(`./content/paginas/blog.json`);
  const contato = handleJSONfile(`./content/contato/contato.json`);

  return {
    props: { post, nav, foo, blog, contato },
  };
}


export async function getStaticPaths() {
  const posts = handleJSONfiles('content/posts');

  const paths = posts.map(post => {
    return { params: { slug: post.fileName } }
  });

  return {
    paths,
    fallback: false
  }
}