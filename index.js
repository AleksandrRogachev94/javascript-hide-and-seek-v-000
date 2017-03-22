function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById('nested').getElementsByClassName("target")[0]
}

function increaseRankBy(n) {
  var elements, children, i, j
  elements = document.querySelectorAll(".ranked-list")

  for(i = 0; i < elements.length; i++) {
    children = elements[i].children

    for(j = 0; j < children.length; j++) {
    children[j].textContent = parseInt(children[j].textContent) + n
    }
  }
}

function deepestChild() {
  let node = document.getElementById('grand-node')
  let nextNode = node.children[0]

  while (nextNode) {
    node = nextNode
    nextNode = node.children[0]
  }

  return node
}
