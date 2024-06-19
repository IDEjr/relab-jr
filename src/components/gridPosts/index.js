import styles from './gridPosts.module.css'
import CardPost from '@/components/cardPost'

export default function GridPosts({ posts }) {
  
  return (
    <>
      <div className={styles.container}>
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
