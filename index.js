
function navClick(element) {
  console.log('click')
  window.scrollTo({top: 0, behavior: 'smooth'})

  if (element.className == "navOff") {
    oldActive = document.getElementsByClassName('navOn').item(0)
    oldActive.className = "navOff"
    element.className = "navOn"
  }
}
