const arrayImgs = [
  'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/001.png',
  'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/004.png',
  'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/007.png',
  'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/010.png',
  'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/013.png',
  'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/016.png',
  'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/019.png',
  'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/021.png',
  'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/023.png',
  'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/025.png'
]
const reversed = arrayImgs.reverse()
const imgsList = document.createElement('section')
for (const arrayImg of arrayImgs) {
  const div = document.createElement('div')
  const imgElement = document.createElement('img')
  imgElement.src = arrayImg
  div.append(imgElement)
  imgsList.append(div)
}
document.body.append(imgsList)

/*for (let i = 0; i < arrayImgs.length; i++) {
  const imgElement = document.createElement('img')
  if (i === 2 || i === 6) {
    imgElement.className = 'img-special'
  } else {
    imgElement.className = 'img-common'
  }
}*/

// si la imagen es la tercera imagen por el principio o la séptima

// añadir una nueva clase a esas imágenes y distinguirlas de alguna manera mediante css, borde dorado, un tamaño distinto
