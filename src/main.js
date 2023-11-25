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
  'Construire une maison',
  'Trouver du charbon',
  'Fabriquer une torche',
  'Récolter des graines',
  'Planter du blé',
  'Tuer un animal',
  'Cuire un steak',
  'Tondre un mouton',
  'Fabriquer un lit',
  'Faire un élevage de poule / vache / cochon / mouton',
  'Trouver un cheval',
  'Chevaucher un cheval',
  'Fabriquer une épée',
  'Fabriquer un arc',
  'Fabriquer des flèches',
  'Tuer un monstre avec un arc',
  'Tuer un monstre avec une épée',
  'Tuer un Creeper',
  'Fabriquer une canne à pêche',
  'Pêcher une poisson',
  'Explorer une grotte',
  'Trouver du fer',
  'Faire fondre des lingots de fer',
  'Trouver de la redstone',
  'Faire un circuit en redstone',
  'Trouver un slime',
  'Construire un mécanisme avec un piston collant',
  'Trouver du diamant',
  'Fabriquer des outils en diamant',
  'Fabriquer un équipement complet en diamant',
  'Trouver de la lave',
  'Fabriquer la porte du Nether',
  'Aller dans le Nether',
  'Fabriquer une maison dans le Nether',
  'Tuer un Ghast',
  'Trouver une forteresse',
  'Trouver une verrue du Nether',
  'Tuer un Blaze',
  'Créer une potion',
  'Fabriquer une bibliothéque',
  'Fabriquer une table d\'enchantement',
  'Trouver du lapis-lazuli',
  'Enchanter un objet',
  'Trouver des villagois',
  'Trouver de l\'or',
  'Fabriquer une pomme d\'or',
  'Changer un zombie en villageois',
  'Commercer avec un villagois',
  'Tuer un enderman',
  'Trouver le portail de l\'End',
  'Aller dans l\'End',
  'Tuer l\'Ender Dragon',
  'Trouver un navire de l\'End',
  'Fabriquer des élytres',
  'Fabriquer une fusée de feu d\'artifice',
  'Voler'
]

$total.innerText = items.length

const previouslyCheckedItems = localStorage.getItem('checked')
const checkedItems = previouslyCheckedItems ? previouslyCheckedItems.split(',').map((item) => Number(item)) : []

const refreshCheckedCount = () => {
  $checkedCount.innerText = checkedItems.length
}

refreshCheckedCount()

items.forEach((item, index) => {
  const $li = document.createElement('li')

  if (checkedItems.indexOf(index) != -1) {
    $li.className = 'checked'
  }

  const $checkbox = document.createElement('div')
  $checkbox.className = 'checkbox'

  const $text = document.createElement('span')
  $text.innerText = item
  
  $li.appendChild($checkbox)
  $li.appendChild($text)

  $li.onclick = () => {
    if ($li.className === '') {
      $li.className = 'checked'
      checkedItems.push(index)
    } else {
      $li.className = ''
      const checkedIndex = checkedItems.indexOf(index)
      console.log(checkedIndex);
      checkedItems.splice(checkedIndex, 1)
    }
    refreshCheckedCount()
    localStorage.setItem('checked', checkedItems)
  }

  $container.appendChild($li)
})