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
  'Faire un gâteau',
  'Trouver un cheval',
  'Chevaucher un cheval',
  'Fabriquer une épée',
  'Fabriquer un arc',
  'Fabriquer des flèches',
  'Fabriquer un bouclier',
  'Tuer un monstre avec un arc',
  'Tuer un monstre avec une épée',
  'Tuer un Creeper',
  'Fabriquer de la TNT',
  'Fabriquer une canne à pêche',
  'Pêcher un poisson',
  'Fabriquer un bateau',
  'Découvrir l\'océan',
  'Explorer une grotte',
  'Trouver du fer',
  'Faire fondre des lingots de fer',
  'Trouver un donjon',
  'Sécuriser un donjon',
  'Trouver une mine abandonnée',
  'Trouver une géode',
  'Trouver de la redstone',
  'Faire un circuit en redstone',
  'Construire un circuit en ferroviaire',
  'Tuer un slime',
  'Construire un mécanisme avec un piston collant',
  'Trouver du diamant',
  'Fabriquer des outils en diamant',
  'Fabriquer un équipement complet en diamant',
  'Fabriquer une bibliothéque',
  'Fabriquer une table d\'enchantement',
  'Trouver du lapis-lazuli',
  'Atteindre le niveau 30',
  'Enchanter un objet',
  'Trouver de la lave',
  'Créer de l\'obsidienne',
  'Obtenir de l\'obsidienne',
  'Fabriquer la porte du Nether',
  'Aller dans le Nether',
  'Fabriquer une maison dans le Nether',
  'Récolter de la pierre lumineuse',
  'Tuer un Ghast',
  'Trouver une forteresse',
  'Trouver une verrue du Nether',
  'Tuer un Blaze',
  'Fabriquer un coffre de l\'Ender',
  'Trouver de l\'or',
  'Troquer de l\'or avec un Piglin',
  'Obtenir de l\'obsidienne pleureuse',
  'Fabriquer une ancre de réapparition',
  'Créer une potion',
  'Trouver des villagois',
  'Fabriquer une pomme d\'or',
  'Changer un zombie en villageois',
  'Commercer avec un villagois',
  'Attribuer une métier à un villageois',
  'Faire naitre un villegois',
  'Vaincre une invasion',
  'Lancer un raid',
  'Tuer un évocateur',
  'Obtenir un totem d\'immunité',
  'Trouver de la Netherite',
  'Faire un outil en Netherite',
  'Obtenir un trident',
  'Tuer un enderman',
  'Trouver le portail de l\'End',
  'Aller dans l\'End',
  'Tuer l\'Ender Dragon',
  'Trouver un navire de l\'End',
  'Fabriquer une boîte de Shulker',
  'Fabriquer des élytres',
  'Fabriquer une fusée de feu d\'artifice',
  'Voler',
  'Trouver une épave',
  'Trouver une carte au trésor',
  'Trouver un trésor enfoui',
  'Trouver un temple sous-marin',
  'Tuer le Grand gardien',
  'Invoquer le Wither',
  'Tuer le Wither',
  'Fabriquer une balise',
  'Trouver une ancienne cité dans les abîmes',
  'Tuer le Warden',
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
