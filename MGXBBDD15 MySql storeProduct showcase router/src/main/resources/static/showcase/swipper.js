export function Swipper(props){

  let {id, modelo,memoria, precio, imageModel} = props,
  myFoto = imageModel ? ("assets/img/imageModel/" + imageModel): "assets/favicon.ico";
//  <img src="https:/placeimg.com/200/200/any" alt="">
  return ` <div class="swiper-slide">
                <div class="picture">

                </div>
                <div class="detail">
                    <h3>Marie Edwards</h3>
                    <span>Web Designer</span>
                </div>
            </div>
            <div class="swiper-slide">
                <div class="picture">
                    <img src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=49899e285952107fdfd9415b8d3bf74a&auto=format&fit=crop&w=634&q=80" alt="">
                </div>
                <div class="detail">
                    <h3>Kelly Woods</h3>
                    <span>Web Designer</span>
                </div>
        </div> `;

}