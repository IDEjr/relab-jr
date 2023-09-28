import Link from 'next/link'
import Image from 'next/image'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import styles from '../styles/blog.module.css'
import CardPosts from '../components/cardPosts'
import { handleJSONfiles } from '../utils/functions/jsonHandler'
import { handleJSONfile } from '../utils/functions/jsonHandler'


export default function blog({posts, nav}) {
  // console.log(posts.imagem);
  const navData = {
    logo : nav.logo,
    linkedin : nav.linkedin,
    instagram : nav.instagram,
    email : nav.email
  };
  return (
    <>
      <Navbar  {...navData}/>
      {posts.map((post, i) => (
        <CardPosts
          key={i}
          imagem={post.imagem}
          titulo={post.titulo}
          data={post.data}
          previa={post.previa}
          autor={post.autor.nome}
        />
      ))}
      <Footer />
    </> 
  );
}


export async function getStaticProps() {
  const caminho2 = "navFooter";
  const pagina2 = "navbar";
  const posts = handleJSONfiles('./content/posts')
  const nav = handleJSONfile(`./content/${caminho2}/${pagina2}.json`);
  return {
    props: { posts, nav },
  };
}





      {/* <ul className={styles['exemplo-list']}>
        {posts && posts.map((post,i) => (
          <div>
            <a target='_blank' href='/blog' key={i}>
              <div>
                <Image
                  src={post.imagem}
                  width={1920}
                  height={1080}
                  alt='Post'
                />
              </div>
            </a>
            <div className={styles['container']}>
              <div className={styles['box']}>
                <p>{post.conteudo}</p>
              </div>
            </div>
          </div>
        ))}
      </ul> */}