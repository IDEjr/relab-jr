import Link from 'next/link'
import Navbar from '../components/navbar'
import Footer from '../components/footer/footer'

export default function servicos() {
  return (
    <>
      <Navbar />
      <h1>Serviços</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
      <Footer />
    </>
  );
}