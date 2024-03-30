import styles from './servicosHome.module.css'
import React from 'react'
import Image from 'next/image'
// import yellowArrow from '../../../public/uploads/image/servicosHome/yellowArrow.png'


function cadaServico(frame) { 
  return(
    <div className={styles.individualBlock}>
      <h3 className={styles.topText}>
        {frame.texto}
      </h3>
      <div className={styles.frames}>
        <div className={styles.overlayGrid}>
          {/* <div className={styles.arrowShape}/> */}
          {/* <Image
            src={yellowArrow}
            className={styles.arrow}
            width={2000}
            height={2000}
            quality={100}
            /> */}
          <Image
            src={frame.imagem}
            className={styles.insideImg}
            width={2000}
            height={2000}
            quality={100}
          />
        </div>
      </div>
    </div>
  )
}

export default function servicosHome({servicosHome}) {

  const firstFrame = {
    imagem : servicosHome.imagem1,
    texto : servicosHome.servico1
  }

  const secondFrame = {
    imagem : servicosHome.imagem2,
    texto : servicosHome.servico2
  }

  const thirdFrame = {
    imagem : servicosHome.imagem3,
    texto : servicosHome.servico3
  }

  const fourthFrame = {
    imagem : servicosHome.imagem4,
    texto : servicosHome.servico4
  }

  const fifthFrame = {
    imagem : servicosHome.imagem5,
    texto : servicosHome.servico5
  }

  const sixthFrame = {
    imagem : servicosHome.imagem6,
    texto : servicosHome.servico6
  }

  return(
    <>
      <div className={styles.container}>
        <h1 className={styles.titleText}>NOSSOS SERVIÇOS</h1>
        <div className={styles.blocksHandler}>
          <div className={styles.firstTwo}>
            {cadaServico(firstFrame)}
            {cadaServico(secondFrame)}
          </div>
          <div className={styles.secondTwo}>
            {cadaServico(thirdFrame)}
            {cadaServico(fourthFrame)}
          </div>
          <div className={styles.thirdTwo}>
            {cadaServico(fifthFrame)}
            {cadaServico(sixthFrame)}
          </div>
        </div>
      </div>
    </>
  )
}