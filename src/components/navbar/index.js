import Link from 'next/link'
import Image from 'next/image'
import styles from './navbar.module.css'
import { useRef } from 'react'
import { FaBars, FaTimes, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import classnames from 'classnames'

export default function Navbar({ contato, nav }) {
  const navRef = useRef();
  const logoRef = useRef();

  const toggleNavbar = () => {
    navRef.current.classList.toggle( "responsiveNav" );
    logoRef.current.classList.toggle(  "responsiveLogo" );
  };
  
  return(
    <>
      <header className={styles.cabecalho}>
        <Link href="/" className={styles.logo} >
          <Image
            src={nav.logo}
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
                src={nav.logo}
                width={95}
                height={95}
                alt="Logo"
              />
            </Link>
          </button>
          
          <h3 className={styles.anchorStuff} onClick={toggleNavbar}>
            <Link href="/quemSomos">QUEM SOMOS</Link>
          </h3>
          <h3 className={styles.anchorStuff} onClick={toggleNavbar}>
            <Link href="/servicos">SERVIÇOS</Link>
          </h3>
          <h3 className={styles.anchorStuff} onClick={toggleNavbar}>
            <Link href="/blog">BLOG</Link>
          </h3>
          
          <button
            className={
              classnames(
                styles.navBtn,
                styles.navCloseBtn
              )
            }
            onClick={toggleNavbar}>
            <FaTimes />
          </button>
          <div className={styles.links}>
            <button className={styles.navBtn} onClick={toggleNavbar}>
              <a href={contato.linkedin} target="_blank" >
                <FaLinkedin className={styles.socialNetworks} />
              </a>
            </button>
            <button className={styles.navBtn} onClick={toggleNavbar}>
              <a href={`mailto:${contato.email}`} target="_blank" >
                <FaEnvelope className={styles.socialNetworks} />
              </a>
            </button>
            <button className={styles.navBtn} onClick={toggleNavbar}>
              <a href={contato.instagram} target="_blank" >
                <FaInstagram className={styles.socialNetworks} />
              </a>
            </button>
          </div>
        </nav>
        <button
          className={styles.navBtn}
          onClick={toggleNavbar}>
          <FaBars />
        </button>
      </header>
    </>
  );
}
