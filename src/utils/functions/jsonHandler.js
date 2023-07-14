/**
 * @description função que coloca todos o JSONs de uma pasta dentro de um array, para conseguirmos manipular
 * @param filePath caminho do arquivo com base na raiz
 */
export function handleJSONfiles(filePath) {
  let posts = [];
  const fs = require("fs");
  const path = require("path");

  const jsonsInDir = fs
    .readdirSync(filePath)
    .filter((file) => path.extname(file) === ".json");

  jsonsInDir.forEach((file) => {
    const fileData = fs.readFileSync(path.join(filePath, file));
    const json = JSON.parse(fileData.toString());
    posts.push({
      ...json,
      fileName: file.split(".")[0]
    });
  });
  return posts;
}
  
/**
 * @description função que carrega um único JSON de um caminho
 * @param filePath caminho do arquivo com base na raiz
 */
export function handleJSONfile(filePath) {
  const fs = require("fs");

  const post = fs.readFileSync(filePath);
  const jsonPost = JSON.parse(post.toString());

  return jsonPost;
}