import styles from './servicesHome.module.css'
import React from 'react'

import Image from 'next/image'
import backFrame from '../../../public/uploads/image/servicosHome/yellowFrame.png'


function eachService(frame) { 
    return(
        <div className={styles['individual-block']}>
            <h3 className={styles['top-text']}>
                {frame.texto}
            </h3>
            <div className={styles['frames']}>
                <div className={styles['overlayGrid']}>
                    <Image
                        src={frame.imagem}
                        width={321}
                        height={497}
                        className={styles['insideImg']}
                        
                    />
                    <Image
                        src={backFrame}
                        width={400}
                        height={580}
                        className={styles['frameImg']}
                        
                    />
                    
                    
                </div>
                
                
                
                
            </div>
        </div>
    )
}

export default function servicesHome({servicosHome}) {


   const firstFrame = {
    imagem : servicosHome.imagem1,
    texto : servicosHome.servico1
   };
   const secondFrame = {
    imagem : servicosHome.imagem2,
    texto : servicosHome.servico2
   };
   const thirdFrame = {
    imagem : servicosHome.imagem3,
    texto : servicosHome.servico3
   };
   const fourthFrame = {
    imagem : servicosHome.imagem4,
    texto : servicosHome.servico4
   };
   const fifthFrame = {
    imagem : servicosHome.imagem5,
    texto : servicosHome.servico5
   };
   const sixthFrame = {
    imagem : servicosHome.imagem6,
    texto : servicosHome.servico6
   };
   return(
        <>
        
            <div className={styles['container']}>
                <h1 className={styles['title-text']}>NOSSOS SERVIÇOS</h1>
                <div className={styles['blocks-handler']}>
                    <div className={styles['first-two']}>
                        {eachService(firstFrame)}
                        {eachService(secondFrame)}
                    </div>
                    <div className={styles['second-two']}>
                        {eachService(thirdFrame)}
                        {eachService(fourthFrame)}
                    </div>
                    <div className={styles['third-two']}>
                        {eachService(fifthFrame)}
                        {eachService(sixthFrame)}
                    </div>
                </div>
            </div>
        </>
    )
}
