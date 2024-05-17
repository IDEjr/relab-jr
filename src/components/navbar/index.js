import styles from './navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from "react"
import { FaBars, FaTimes, FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa"
import classnames from 'classnames'

export default function Navbar({ logo, linkedin, instagram, email }) {
  const navRef = useRef();
  const logoRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle( "responsiveNav" );
    logoRef.current.classList.toggle(	"responsiveLogo" );
	};

  const closeNavbar = () => {
    navRef.current.classList.remove("responsiveNav");
    logoRef.current.classList.remove("responsiveLogo");
  };
  // const style = { color: "#F2C12E !important", fontSize: "1.5em", marginTop: "150px" }
  // removing for simplicity, dont know why its here
  
  return(
    <>
      <header className={styles.cabecalho}>
        <Link href="/" className={styles.logo} >
          <Image
            src={logo}
            width={95}
            height={95}
            alt="Logo"
          />
        </Link>
        <nav className={styles.navbar} ref={navRef}>
          <button className={
            classnames(
              styles.navBtn,
              styles.navRelabBtn
            )
            } ref={logoRef}>
            <Link href="/" className={styles.droplogo}>
              <Image
                src={logo}
                width={95}
                height={95}
                alt="Logo"
              />
            </Link> 
          </button>
          
          <h3 className={styles.anchorStuff} onClick={closeNavbar}><Link href="/quemSomos">QUEM SOMOS</Link></h3>
          <h3 className={styles.anchorStuff} onClick={closeNavbar}><Link href="/servicos">SERVIÇOS</Link></h3>
          <h3 className={styles.anchorStuff} onClick={closeNavbar}><Link href="/blog">BLOG</Link></h3>
          
          <button
            className={
              classnames(
                styles.navBtn,
                styles.navCloseBtn
              )
            }
            onClick={showNavbar}>
            <FaTimes />
          </button>
          <div className={styles.links}>
            <button
              className={
                classnames(
                  styles.navBtn
                )
              }
              onClick={showNavbar}>
              <Link href={instagram} target="_blank"><FaInstagram className={styles.socialNetworks} /></Link>
            </button>
            <button
              className={
                classnames(
                  styles.navBtn
                )
              }
              onClick={showNavbar}>
              <Link href={linkedin} target="_blank"><FaLinkedin className={styles.socialNetworks}/></Link>
            </button>
            <button
              className={
                classnames(
                  styles.navBtn
                )
              }
              onClick={showNavbar}>
              <Link href={`mailto:${email}`} target="_blank"><FaEnvelope className={styles.socialNetworks}/></Link>
            </button>
          </div>
        </nav>
        <button
          className={styles.navBtn}
          onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
    </>
  );
}