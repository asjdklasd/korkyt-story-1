const slideTwoTrigger = document.getElementById('slide-two-trigger')
const slideSixTrigger = document.getElementById('slide-six-trigger')
const triggers = [slideTwoTrigger, slideSixTrigger]
const slideTwo = document.getElementById('slide-two')
const slideSix = document.getElementById('slide-six')
const slideFive = document.getElementById('slide-five')
const imageOneTrigger = document.getElementById('image-one-trigger')
const imageTwoTrigger = document.getElementById('image-two-trigger')
const imageThreeTrigger = document.getElementById('image-three-trigger')


const createModal = (id, image, header, body, className) => {
  const element = document.createElement('div')
  element.setAttribute('class', className)
  element.setAttribute('id', id)
  
  const headerComponent = document.createElement('h2')
  headerComponent.innerText = header
  headerComponent.setAttribute('class', 'info__header')

  const bodyComponent = document.createElement('p')
  bodyComponent.innerText = body
  headerComponent.setAttribute('class', 'info__body')

  const textContent = document.createElement('div')
  textContent.setAttribute('class', 'text-container')
  textContent.appendChild(headerComponent)
  textContent.appendChild(bodyComponent)

  const imageComponent = document.createElement('img')
  imageComponent.setAttribute('src', image)
  imageComponent.setAttribute('class', 'info__image')

  const closeButton = document.createElement('button')
  const buttonImage = document.createElement('img')
  buttonImage.setAttribute('src', '../icons/close.png')
  buttonImage.setAttribute('class', 'close-button__image')
  closeButton.setAttribute('class', 'close-button')
  closeButton.setAttribute('id', 'close-button')
  closeButton.onclick = () => closeDialog(id)
  closeButton.appendChild(buttonImage)

  element.appendChild(imageComponent)
  element.appendChild(textContent)
  element.appendChild(closeButton)

  return element
}

const openDialog = (element, id, link, header, body) => {
  element.after(createModal(id, link, header, body, 'info'))
}

const closeDialog = (id) => {
  const modal = document.getElementById(id)
  enableTriggers()
  modal.remove()
}

const enableTriggers = () => {
  triggers.forEach(element => element.setAttribute('class', 'circle'))
}

slideTwoTrigger.onclick = () => {
  const id = 'modal-one'
  const link = '../images/image-8.jpg'
  const header = 'yurt'
  const body = 'A yurt (from the Turkic languages) or ger (Mongolian) is a portable, round tent covered and insulated with skins or felt and traditionally used as a dwelling by several distinct nomadic groups in the steppes and mountains of Inner Asia. The structure consists of a flexible angled assembly or latticework of wood or bamboo for walls, a door frame, ribs (poles, rafters), and a wheel (crown, compression ring) possibly steam-bent as a roof. The roof structure is sometimes self-supporting, but large yurts may have interior posts supporting the crown.'

  openDialog(slideTwo, id, link, header, body)
  slideTwoTrigger.setAttribute('class', 'circle disabled')
}

slideSixTrigger.onclick = () => {
  const id = 'modal-two'
  const link = '../images/image-8.jpg'
  const header = 'NE yurt'
  const body = 'NOT A yurt (from the Turkic languages) or ger (Mongolian) is a portable, round tent covered and insulated with skins or felt and traditionally used as a dwelling by several distinct nomadic groups in the steppes and mountains of Inner Asia. The structure consists of a flexible angled assembly or latticework of wood or bamboo for walls, a door frame, ribs (poles, rafters), and a wheel (crown, compression ring) possibly steam-bent as a roof. The roof structure is sometimes self-supporting, but large yurts may have interior posts supporting the crown.'
  
  openDialog(slideSix, id, link, header, body)
  slideSixTrigger.setAttribute('class', 'circle disabled')
}

const openModal = (element, id, link, header, body) => {
  element.appendChild(createModal(id, link, header, body, 'modal-dialog'))
}

imageOneTrigger.onclick = () => {
  const id = 'modal-three'
  const link = '../images/image-8.jpg'
  const header = 'yurt'
  const body = 'A yurt (from the Turkic languages) or ger (Mongolian) is a portable, round tent covered and insulated with skins or felt and traditionally used as a dwelling by several distinct nomadic groups in the steppes and mountains of Inner Asia. The structure consists of a flexible angled assembly or latticework of wood or bamboo for walls, a door frame, ribs (poles, rafters), and a wheel (crown, compression ring) possibly steam-bent as a roof. The roof structure is sometimes self-supporting, but large yurts may have interior posts supporting the crown.'

  openModal(slideFive, id, link, header, body)
}

imageTwoTrigger.onclick = () => {
  const id = 'modal-four'
  const link = '../images/image-8.jpg'
  const header = 'yurt'
  const body = 'A yurt (from the Turkic languages) or ger (Mongolian) is a portable, round tent covered and insulated with skins or felt and traditionally used as a dwelling by several distinct nomadic groups in the steppes and mountains of Inner Asia. The structure consists of a flexible angled assembly or latticework of wood or bamboo for walls, a door frame, ribs (poles, rafters), and a wheel (crown, compression ring) possibly steam-bent as a roof. The roof structure is sometimes self-supporting, but large yurts may have interior posts supporting the crown.'

  openModal(slideFive, id, link, header, body)
}

imageThreeTrigger.onclick = () => {
  const id = 'modal-five'
  const link = '../images/image-8.jpg'
  const header = 'yurt'
  const body = 'A yurt (from the Turkic languages) or ger (Mongolian) is a portable, round tent covered and insulated with skins or felt and traditionally used as a dwelling by several distinct nomadic groups in the steppes and mountains of Inner Asia. The structure consists of a flexible angled assembly or latticework of wood or bamboo for walls, a door frame, ribs (poles, rafters), and a wheel (crown, compression ring) possibly steam-bent as a roof. The roof structure is sometimes self-supporting, but large yurts may have interior posts supporting the crown.'

  openModal(slideFive, id, link, header, body)
}