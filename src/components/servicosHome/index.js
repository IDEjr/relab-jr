import styles from './servicosHome.module.css'
import Image from 'next/image'


function Servico( servico ) {
  return(
    <>
      <div className={styles.serviceContainer}>
        <div className={styles.serviceName}>
          <h3>{servico.nome}</h3>
        </div>
        <div className={styles.imgContainer}>
          {/* <div className={styles.arrowShape}/> */}
          {/* <Image
            src={yellowArrow}
            className={styles.arrow}
            width={2000}
            height={2000}
            quality={100}
            /> */}
          <Image
            src={servico.imagem}
            className={styles.serviceImg}
            // width={2000}
            // height={2000}
            fill
            style={{objectFit: 'cover'}}
            quality={100}
            alt="Logo"
          />
        </div>
      </div>
    </>
  )
}


// function servicesHandler() {
//   for(var i = 0; i <= (servicos.length)/3; i+=3) {
    
//   }
//   return(
//     <div></div>
//   )
// }


export default function ServicosHome({ titulo, servicos }) {

  // var frames = new Array();
  // for(var i = 0; i < servicos.length; i++) {
  //   const frame = {
  //     imagem : servicos[i].imagem,
  //     titulo :  servicos[i].servico
  //   }
  //   frames[i] = frame;
  // }

  return(
    <>
      <div className={styles.container}>
        <h2 className={styles.titleText}>{titulo}</h2>
        <div className={styles.serviceFrame}>
          {servicos && servicos.map((servico, i) => (
            <div key={i}>
                {Servico(servico)}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
  // return(
  //   <>
  //     <div className={styles.container}>
  //       <h2 className={styles.titleText}>NOSSOS SERVIÇOS</h2>
  //       <div className={styles.blocksHandler}>
  //         <div className={styles.firstTwo}>
  //           {servico(frames[0])}
  //           {servico(frames[1])}
  //         </div>
  //         <div className={styles.secondTwo}>
  //           {servico(frames[2])}
  //           {servico(frames[3])}
  //         </div>
  //         <div className={styles.thirdTwo}>
  //           {servico(frames[4])}
  //           {servico(frames[5])}
  //         </div>
  //       </div>
  //     </div>
  //   </>
  // )