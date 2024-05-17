import styles from './footer.module.css'
import Image from 'next/image'
import {FaInstagram, FaLinkedin, FaEnvelope} from "react-icons/fa"
import Link from 'next/link'


const handleMove = () => {
  window.scrollTo({ top: 0, behavior: "smooth" }); // here it goes
};

export default function Footer( footerData ) {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.linearGradient}/>
        {/* <Image 
        src={footerData.background}
        
        layout="fill"
        objectFit="cover"
        quality={100}
        className={styles.bgImgHandle}
        
        >
        </Image> */}
        <div className={styles.topPart}>
          <a onClick={handleMove}>
            <Image
              src={footerData.logo}
              width={150}
              height={150}
              className={styles.relabLogo}
              alt="Logo"
            />
          </a>        
          <div className={styles.contactSocials}>
            <h3 className={styles.contactText}>
              Entre em contato:
            </h3>
            <div className={styles.socialIcons}>
              <Link className={styles.linkedinIcon} href={footerData.linkedin} target="_blank">
                <FaLinkedin size={40}/>
              </Link>
              <Link className={styles.mailIcon} href={`mailto:${footerData.email}`} target="_blank">
                <FaEnvelope size={40}/>
              </Link>
              <Link className={styles.instagramIcon} href={footerData.instagram} target="_blank">
                <FaInstagram size={40}/>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.bottomPart}>
          <div className={styles.membershipIcons}>
            <a className={styles.watermarkCover} href='https://unisinos.br/lab/programas/relab' target='_blank'>
              <Image
                src={footerData.watermark1}
                // width={90}
                // height={35}
                fill
                style={{objectFit: 'contain'}}
                className={styles.watermark}
                quality={100}
                alt="Unisinos LAB"
              />
            </a>            
            <a className={styles.watermarkCover} href='https://jesuitasbrasil.org.br' target='_blank'>
              <Image
                src={footerData.watermark2}
                // width={165}
                // height={50}
                fill
                style={{objectFit: 'contain'}}
                className={styles.watermark}
                quality={100}
                alt="Jesuítas Brasil"
              />
            </a>
            <a className={styles.watermarkCover} href='https://www.unisinos.br/' target='_blank'>
              <Image
                src={footerData.watermark3}
                // width={150}
                // height={40}
                fill
                style={{objectFit: 'contain'}}
                className={styles.watermark}
                quality={100}
                alt="Unisinos"
              />
            </a>
          </div>
          <div className={styles.footerText}>
            <p className={styles.footerText}>{footerData.copy}</p>
          </div>
        </div>
      </div>
    </>
  );
}