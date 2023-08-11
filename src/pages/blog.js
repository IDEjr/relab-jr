import Link from 'next/link'
import Image from 'next/image'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import styles from '../styles/blog.module.css'
import { handleJSONfiles } from '../utils/functions/jsonHandler'


export default function blog({posts}) {
  console.log(posts);
  const path = '/../public/images/padrao2.jpg';
  return (
    <>
      <Navbar />
      <ul className={styles['exemplo-list']}>
        {posts && posts.map((post,i) => (
          <div>
            <a target='_blank' href='/blog' key={i}>
              <div>
                <Image
                  src={`${post.imagem}`}
                  width={1500}
                  height={500}
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
      </ul>
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