import styles from './servicosHome.module.css'
import Image from 'next/image'


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
function servicesHandler(){
  for(var i = 0; i <= (servicos.length)/3; i+=3){
    
  }
  return(
    <div></div>
  )
}
export default function servicosHome({servicosHome, servicos}) {

  var frames = new Array();
  for(var i = 0; i < servicos.length; i++){
    const frame = {
      imagem : servicos[i].imagem,
      texto :  servicos[i].servico
    }
    frames[i] = frame;
  }

  return(
    <>
      <div className={styles.container}>
        <h1 className={styles.titleText}>NOSSOS SERVIÇOS</h1>
        <div className={styles.blocksHandler}>
          <div className={styles.firstTwo}>
            {cadaServico(frames[0])}
            {cadaServico(frames[1])}
          </div>
          <div className={styles.secondTwo}>
            {cadaServico(frames[2])}
            {cadaServico(frames[3])}
          </div>
          <div className={styles.thirdTwo}>
            {cadaServico(frames[4])}
            {cadaServico(frames[5])}
          </div>
        </div>
      </div>
    </>
  )
}