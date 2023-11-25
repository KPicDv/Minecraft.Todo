const $container = document.getElementById('items')

const items = [
  'Couper un arbre',
  'Faire des outils en bois',
  'Casser de la pierre',
  'Faire des outils en pierre',
]

items.forEach((item) => {
  const $li = document.createElement('li')

  const $checkbox = document.createElement('input')
  $checkbox.type = 'checkbox'

  const $text = document.createElement('span')
  $text.innerText = item
  
  $li.appendChild($checkbox)
  $li.appendChild($text)

  $li.onclick = () => {
    $checkbox.checked = !$checkbox.checked
    $li.className = $li.className == 'checked' ? '' : 'checked'
  }

  $container.appendChild($li)
})