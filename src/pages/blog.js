import Link from 'next/link'
import Image from 'next/image'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import styles from '../styles/blog.module.css'
import CardPosts from '../components/cardPosts'
import { handleJSONfiles } from '../utils/functions/jsonHandler'
import { handleJSONfile } from '../utils/functions/jsonHandler'


export default function blog({posts}) {
  console.log(posts);

  return (
    <>
      <Navbar />
      {posts.map((post, i) => (
        <CardPosts
          key={i}
          titulo={post.titulo}
          data={post.data}
          previa={post.previa}
        />
      ))}
      <Footer />
    </> 
  );
}


export async function getStaticProps() {
  const posts = handleJSONfiles('./content/posts')

  return {
    props: { posts },
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