import React from 'react'

import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Inicio from '@/components/inicio';

export default function servicos() {
  const path = '/../public/images/padrao4.jpg';
  return (
    <>
      <Navbar />
      <Inicio title = {"SERVIÇOS"} image= {path}/>
      
      
      <Footer />
    </>
  );
}