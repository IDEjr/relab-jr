import CardPosts from "../cardPosts";
import styles from './gridPosts.module.css'

export default function gridPosts(...posts) {
    posts = posts[0];
    //console.log(posts);
    var arrPosts = [];
    for( const i in posts){
        //console.log(posts[i]);
        arrPosts.push(posts[i]);
    }
    posts = arrPosts
    //console.log(posts);
    return (
      <>
        <section className={styles.postsGrid}>
            {posts.map((post, i) => (
            <CardPosts
            key={i}
            imagem={post.imagem}
            titulo={post.titulo}
            data={post.data}
            previa={post.previa}
            autor={post.autor}
            />   
         ))}
        </section>
      
      
      </>
    );
  }
  