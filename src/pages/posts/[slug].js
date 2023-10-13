import fs from 'fs'
import ReactMarkdown from 'react-markdown'
import matter from 'gray-matter'
import styles from './slug.module.css'
import { handleJSONfile } from '@/utils/functions/jsonHandler'
import { useRouter } from 'next/router'
import Image from 'next/image'
import pencilImg from '../../../public/uploads/slug/pencil.png'
import buttonImg from '../../../public/uploads/slug//voltarButton.png'



const handleMove = () => {
  window.scrollTo({ top: 0, behavior: "smooth" }); // here it goes
};



export default function Posts({ content }) {
  const router = useRouter();
  const { postId } = router.query


  return (
    <div className={styles['container']}>
      <div className={styles['top-part']}>
        <img className={styles['img']} src={`${content.imagem}`}></img>
      </div>
      <div className={styles['bottom-part']}>
        <div className={styles['text-and-rest']}>
          <div className={styles['text-formater']}>
            <text className={styles['post-text']}>
              {content.conteudo}
            </text>
          </div>
          <div className={styles['author']}>
            <div className={styles['author-and-pencil']}>
              <Image className={styles['']} src={pencilImg}/>
              <text className={styles['author-name']}>
                {content.autor}
              </text>
            </div>
            <button onClick={handleMove} className={styles['voltar-button']}>
              <Image className={styles['button-image']} src={buttonImg}/>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps({params : {slug} }){
  const caminho = 'posts';

  const content = handleJSONfile(`./content/${caminho}/${slug}.json`);
  return {
    props: { content },
  };
}

export async function getStaticPaths() {
  const raiz = process.env.PWD || process.env.INIT_CWD;
  const caminho = 'posts';

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