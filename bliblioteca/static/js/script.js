//Contador
function compras(idElemento) {
  let contador = document.querySelector(idElemento);
  let numeroActual = parseInt(contador.innerText);
  contador.innerText = numeroActual + 1;
}
//Cambio imagen
const galleryImg = document.getElementById("imagen-Grandota");


const originalImageSrc = "static/images/image 7.jfif";
const hoverImageSrc = "static/images/images 8.jfif";
const hoverImageSrc = "static/images/images 9.jfif";



galleryImg.addEventListener("mouseover", () => {
  galleryImg.src = hoverImageSrc;
  
});

galleryImg.addEventListener("mouseout", () => {
  galleryImg.src = originalImageSrc;
  
});