import fs from 'fs'
import ReactMarkdown from 'react-markdown'
import matter from 'gray-matter'
import Head from 'next/head'
import styles from '../../styles/Examples.module.css'
import { handleJSONfile } from '@/utils/functions/jsonHandler'

export default function Blog({ content }) {
    return (
        <div className={styles['container']}>
          <Head>
              <title>Página de demonstração | {content.titulo}</title>
          </Head>
          <div className={styles['examples-container']}>
            <h1>{content.titulo}</h1>
            {content.bool ? <div>true</div> : <div>false</div>}
            <div>{content.data}</div>
            <div style={{backgroundColor: content.cor, color: 'white'}}>exemplo de cor</div>
            <img className={styles['img']} src={`${content.imagem}`}></img>
            <a href={`${content.arquivos}`} download>{content.arquivos}</a>
            <div>{content.localizacao}</div>
            <div>{content.numeros}</div>
            {content.selecao.map(conteudo =>{
              return (<div>{conteudo}</div>)
            })}
            <div>{content.texto}</div>
            <div className={styles['markdown']}>
              <ReactMarkdown>
                  {content.conteudo}
              </ReactMarkdown>
            </div>
          </div>
        </div>
    )
}

export async function getStaticProps({params : {slug} }){
  const caminho = "exemplos";

  const content = handleJSONfile(`./content/${caminho}/${slug}.json`);
  return {
    props: { content },
  };
}

export async function getStaticPaths() {
  const raiz = process.env.PWD;
  const caminho = "exemplos";

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