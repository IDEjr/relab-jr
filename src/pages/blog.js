import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/blog.module.css'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import styles from '../styles/blog.module.css'
import MenuBlog from '../components/menuBlog/menuBlog'
import CardPosts from '../components/cardPosts'
import GridPosts from '@/components/gridPosts'
import { handleJSONfiles } from '../utils/functions/jsonHandler'
import { handleJSONfile } from '../utils/functions/jsonHandler'

export default function blog({posts, nav}) {
  // console.log(posts.imagem);
  // console.log(posts);

  const navData = {
    logo : nav.logo,
    linkedin : nav.linkedin,
    instagram : nav.instagram,
    email : nav.email
  };

  return (
    <>
      
      <Navbar />  
      <div className={styles.container}>
      <MenuBlog posts={posts}/>
  
      <Navbar  {...navData}/>
      <GridPosts {...posts}/>
     
      <Footer />
      </div>
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
