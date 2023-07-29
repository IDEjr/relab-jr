import Link from 'next/link'
import styles from '../styles/footer.module.css'

export default () => (
    <>
        <div className='footer'>
            <br></br>
            <br></br>
            <br></br>
            <h1 className={styles["box"]}>Footer</h1>
            <h2>
                <Link href="/">Back to home</Link>
            </h2>
            <br></br>
            <br></br>
            <br></br>
        </div>
    </>
);