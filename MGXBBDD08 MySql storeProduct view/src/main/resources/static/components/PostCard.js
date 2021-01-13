export function PostCard(props){

  let {referencia, foto} = props,
  myFoto = foto ? foto : "assets/favicon.ico";

  return `  
  <article class="post-card">
    <img src="https:/placeimg.com/200/200/any" alt="">
    <h2>${referencia}</h2>
    <p>
      <img src=${myFoto} alt="no sale">
    <a href="#">Ver publicación</a>
    </p>
  </article>  
  `;
}