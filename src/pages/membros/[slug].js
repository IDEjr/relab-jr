import fs from 'fs'
import ReactMarkdown from 'react-markdown'
import matter from 'gray-matter'
import styles from './slug.module.css'
import { handleJSONfile } from '@/utils/functions/jsonHandler'

export default function Membros({ content }) {
    return (
        <div className={styles['container']}>
          <div className={styles['examples-container']}>
            <img className={styles['img']} src={`${content.imagem}`}></img>
            <div>{content.texto}</div>
            <div className={styles['markdown']}></div>
          </div>
        </div>
    )
}

export async function getStaticProps({params : {slug} }){
  const caminho = 'membros';

  const content = handleJSONfile(`./content/${caminho}/${slug}.json`);
  return {
    props: { content },
  };
}

export async function getStaticPaths() {
  const raiz = process.env.PWD || process.env.INIT_CWD;
  const caminho = 'membros';

  const filesInProjects = fs.readdirSync(raiz + `/content/${caminho}`)

  const paths = filesInProjects.map(file => {
    const filename = file.slice(0, file.indexOf('.'))
    return { params: { slug: filename }}
  })

  return {
    paths,
    fallback: false 
  }
}