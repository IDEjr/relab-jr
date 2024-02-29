// import styles from '../styles/blog.module.css'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { handleJSONfiles } from '../utils/functions/jsonHandler'
import { handleJSONfile } from '../utils/functions/jsonHandler'
import MenuBlog from '@/components/menuBlog/menuBlog'
import CarrosselBlog from '@/components/carrosselBlog'

export default function blog({ posts, nav, foo }) {

  const navData = {
    logo: nav.logo,
    linkedin: nav.linkedin,
    instagram: nav.instagram,
    email: nav.email
  }

  return (
    <>
      <Navbar {...navData}/>
      <CarrosselBlog {...posts}/>  
      <MenuBlog {...posts}/>
      <Footer {...foo}/>
    </> 
  );
}


export async function getStaticProps() {

  const foo = handleJSONfile(`./content/navFooter/footer.json`);
  const posts = handleJSONfiles('./content/posts');
  const nav = handleJSONfile(`./content/navFooter/navbar.json`);

  return {
    props: { posts, nav, foo },
  };
}