import Link from 'next/link'
import styles from './navbar.module.css'

export default () => (
    <>
        <div className={styles.navbar} id='navBarPoint'>
            <ul className={styles.navList}>
                <li className={styles.navItem}>
                    <Link href="/">
                        <h4>Home</h4>
                    </Link>
                </li>
                <li>
                    <Link href="/quemSomos">
                        <h4>Quem Somos</h4>
                    </Link>
                </li>
                <li>
                    <Link href="/servicos">
                        <h4>Serviços</h4>
                    </Link>
                </li>
                <li>
                    <Link href="/blog">
                        <h4>Blog</h4>
                    </Link>
                </li>
            </ul>
        </div>
    </>
);