import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import MenuBlog from '@/components/menuBlog'
import CarrosselBlog from '@/components/carrosselBlog'
import { handleJSONfiles } from '@/utils/functions/jsonHandler'
import { handleJSONfile } from '@/utils/functions/jsonHandler'

export default function Blog({ posts, nav, foo, blog }) {

  // const navData = {
  //   logo: nav.logo,
  //   linkedin: nav.linkedin,
  //   instagram: nav.instagram,
  //   email: nav.email
  // }

  return (
    <>
      <Navbar {...nav}/>
      <CarrosselBlog posts = {posts} titulo = {blog.inicioBlog.titulo}/>  
      <MenuBlog posts = {posts}/>
      <Footer {...foo}/>
    </> 
  );
}


export async function getStaticProps() {

  const posts = handleJSONfiles('./content/posts');
  const nav = handleJSONfile('./content/navFooter/navbar.json');
  const foo = handleJSONfile('./content/navFooter/footer.json');
  const blog = handleJSONfile(`./content/paginas/blog.json`);

  return {
    props: { posts, nav, foo, blog },
  };
}