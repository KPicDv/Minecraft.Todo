const $checkedCount = document.getElementById('checked-count')
const $total = document.getElementById('total')
const $container = document.getElementById('items')

const items = [
  'Couper un arbre',
  'Fabriquer des planches de bois',
  'Fabriquer une table de fabrication',
  'Fabriquer des outils en bois',
  'Casser de la pierre',
  'Fabriquer des outils en pierre',
  'Trouver du charbon',
  'Fabriquer une torche',
  'Récolter des graines',
  'Planter du blé',
  'Faire un élevage de poule / vache / cochon',
  'Trouver un cheval',
  'Fabriquer une épée',
  'Fabriquer un arc',
  'Fabriquer des flèches',
  'Tuer un monstre avec un arc',
  'Tuer un monstre avec une épée',
  'Tuer un Creeper',
  'Explorer une grotte',
  'Trouver du fer',
  'Faire fondre des lingots de fer',
  'Trouver de l\'or',
  'Trouver du diamant',
  'Trouver de la lave',
  'Fabriquer un équipement complèt en diamant',
  'Fabriquer des outils en diamant',
  'Fabriquer la porte du Nether',
  'Trouver des villagois',
]

$total.innerText = items.length

let checkedItems = 0

const refreshCheckedCount = () => {
  $checkedCount.innerText = checkedItems
}

items.forEach((item) => {
  const $li = document.createElement('li')

  const $checkbox = document.createElement('input')
  $checkbox.type = 'checkbox'
  $checkbox.disabled = true

  const $text = document.createElement('span')
  $text.innerText = item
  
  $li.appendChild($checkbox)
  $li.appendChild($text)

  $li.onclick = () => {
    $checkbox.checked = !$checkbox.checked
    if ($checkbox.checked) {
      $li.className = 'checked'
      checkedItems++
    } else {
      $li.className = ''
      checkedItems--
    }
    refreshCheckedCount()
  }

  $container.appendChild($li)
})