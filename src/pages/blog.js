import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import MenuBlog from '@/components/menuBlog'
import CarrosselBlog from '@/components/carrosselBlog'
import { handleJSONfiles } from '@/utils/functions/jsonHandler'
import { handleJSONfile } from '@/utils/functions/jsonHandler'

export default function Blog({ posts, nav, foo }) {

  const navData = {
    logo: nav.logo,
    linkedin: nav.linkedin,
    instagram: nav.instagram,
    email: nav.email
  }

  return (
    <>
      <Navbar {...navData}/>
      <CarrosselBlog posts = {posts}/>  
      <MenuBlog posts = {posts}/>
      <Footer {...foo}/>
    </> 
  );
}


export async function getStaticProps() {

  const foo = handleJSONfile('./content/navFooter/footer.json');
  const posts = handleJSONfiles('./content/posts');
  const nav = handleJSONfile('./content/navFooter/navbar.json');

  return {
    props: { posts, nav, foo },
  };
}