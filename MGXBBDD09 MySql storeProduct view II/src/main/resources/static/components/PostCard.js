export function PostCard(props){

  let {referencia, brand, imageModel} = props,
  myFoto = imageModel ? ("assets/img/imageModel/" + imageModel): "assets/favicon.ico";

  return `  
  <article class="post-card">
    <img src="https:/placeimg.com/200/200/any" alt="">
    <h2>${referencia}</h2>
    <p>
  <span>
    ${brand}
  </span>
      <img src=${myFoto} alt="no sale">
    <a href="#">Ver publicación</a>
    </p>
  </article>  
  `;
}