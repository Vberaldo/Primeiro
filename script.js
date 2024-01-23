/* if = se / else = se não */

  /* const html = document.documentElement  DOCUMENT . (PROPRIEDADES E FUNDIONALIDADES) DOCUMENTELEMENT

  if(html.classList.contains('light')) {    SE HTML CONTER LIGHT
    html.classList.remove('light')        HTML REMOVE LIGHT
  } else {                                SE NÃO
    html.classList.add('light')         HTML ADD LIGHT
  }

JEITO MAIS FÁCIL É html.classList.toggle('light') / mais não funcionou no meu codigo
*/


function toggleMode() {
 
  const html = document.documentElement  

  if(html.classList.contains('light')) {   
    html.classList.remove('light')        
  } else {                             
    html.classList.add('light')         
  }

  // pegar a tag img e depois substituir
const img = document.querySelector("#profile img")

// condição  se tiver light toggleMode, add img light 
  if(html.classList.contains('light')) {
    img.setAttribute('src', './assets/avatar-light.png')
  } else {
    img.setAttribute('src', './assets/avatar-dark.png')
  }
    //se tiver sem light mode, manter a imagem normal







}