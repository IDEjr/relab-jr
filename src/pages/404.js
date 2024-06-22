import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { handleJSONfile } from '@/utils/jsonHandler'

export default function Blog({ nav, foo, contato}) {

  return (
    <>
      <Navbar contato = {contato} nav = {nav}/>
      <div  style={{ padding: '20%', textAlign: 'center', alignItems: 'center'}}>
        <h2>A página que você está procurando não foi encontrada.</h2>
      </div>
      <Footer contato = {contato} footer = {foo}/>
    </>
  );
}


export async function getStaticProps() {

  const nav = handleJSONfile('./content/navFooter/navbar.json');
  const foo = handleJSONfile('./content/navFooter/footer.json');
  const contato = handleJSONfile(`./content/contato/contato.json`);

  return {
    props: { nav, foo, contato },
  };
}