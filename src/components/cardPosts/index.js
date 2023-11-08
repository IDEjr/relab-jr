import Link from 'next/link'
import Image from 'next/image'
import styles from './cardPosts.module.css'
import fs from 'fs';
import path from 'path';

export default function cardPosts({ index, imagem, titulo, data, previa, autor}) {

  var dataForm;
  dataForm = data.substring(8, 10) + '/' + data.substring(5, 7) + '/' + data.substring(0, 4);


  index={i}



  const fs = require('fs');
  const path = require('path')

  // content\posts\11111111111111111111111111.json
  
  
  const directoryPath = './././content/posts';

  const jsonFilenames = fs.readdirSync(directoryPath)
  .filter((filename) => path.extname(filename) === '.json');

  console.log(jsonFilenames);

  return (
    <>
      <Link href="/" className={styles.link}>
        <div className={styles.card}>
          <div className={styles.box}>
            <div className={styles.img}>
              <Image
                src={imagem}
                fill
                style={{objectFit: 'cover'}}
                alt="Post"
              />
            </div>
            <div className={styles.dados}>
              <div className={styles.emCima}>
                <h2 className={styles.titulo}>{titulo}</h2>
                <hr className={styles.linha} />
                <p className={styles.previa}>{previa}</p>
              </div>
              <div className={styles.embaixo}>
                <span className={styles.data}>{dataForm}</span>
                <span className={styles.autor}>{autor}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}




// export async function getStaticProps() {

//   // obtendo nomes dos arquivos .json
//   const caminhoPosts = 'posts';
//   const jsonNomes = fs.readdirSync(`./content/${caminhoPosts}`)
//     .filter(fileName => path.extname(fileName) === '.json');

//   return {
//     props: {jsonNomes },
//   };
// }





// const jsonsInDir = fs.readdirSync('content/posts').filter(file => path.extname(file) === '.json');
  
//   jsonsInDir.forEach(file => {
//     const fileData = fs.readFileSync(path.join('content/posts', file));
//     const json = JSON.parse(fileData.toString());
//   });





// function fetchJSONFilenames() {
//   const caminhoPosts = 'posts';
//   const jsonNomes = fs.readdirSync(join(process.cwd(), `content/${caminhoPosts}`))
//     .filter(fileName => path.extname(fileName) === '.json');
//   return jsonNomes;
// }

// Fetch JSON filenames
// const jsonNomes = fetchJSONFilenames();



// console.log(index);
// console.log('jsonNomes:', jsonNomes); 



// url = `/posts/${jsonNomes[index]}`;

// {url}