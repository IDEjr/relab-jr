import CardPosts from "../cardPosts";
import styles from './gridPosts.module.css'

export default function gridPosts(...posts) {
    posts = posts[0];
    var arrPosts = [];
    for( const i in posts){
        arrPosts.push(posts[i]);
    }
    posts = arrPosts
    return (
      <><div className={styles.big}>
          <section className={styles.postsGrid}>
              {posts.map((post, i) => (
              <CardPosts
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
