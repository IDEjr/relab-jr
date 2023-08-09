import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import styles from '../styles/inicio.module.css'


function Inicio(props) {
  
  
  return (
    <div >

        <Image src={props.image} width={1920}  height={400} alt='Imagem Inicio'   />
        
        <h1>{props.title}</h1>
        <h3>
            <Link href="/">Back to home</Link>
        </h3>
    </div>
  );
}

export default Inicio;