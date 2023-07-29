import React from 'react'
import Link from 'next/link'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

export default function quemSomos() {
  return (
    <>
      <Navbar />
      <h1>Quem Somos</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
      <Footer />
    </>
  );
}