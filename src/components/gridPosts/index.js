import CardPost from "@/components/cardPost";
import styles from './gridPosts.module.css'

export default function gridPosts({posts}) {
  
    return (
      <>
        <div className={styles.big}>
          <section className={styles.postsGrid}>
              {posts.map((post, i) => (
              <CardPost
                key={i}
                fileName={post.fileName}
                imagem={post.imagemCapa}
                titulo={post.titulo}
                data={post.data}
                previa={post.previa}
                autor={post.autor}
              />   
          ))}
          </section>
        </div>
      </>
    );
  }
