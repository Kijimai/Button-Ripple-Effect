const rippleBtns = document.querySelectorAll('.rippleBtn')

rippleBtns.forEach(button => {
  button.addEventListener('click', function(e) {
    const x = e.clientX
    const y = e.clientY

    const buttonTop = e.target.offsetTop
    const buttonLeft = e.target.offsetLeft
    
    const xInside = x - buttonLeft  //Coordinate value for the click in the button
    const yInside = y - buttonTop

    console.log(xInside, yInside)

    const circleEl = document.createElement('span')
    circleEl.classList.add('circle')
    circleEl.style.top = yInside + 'px'
    circleEl.style.left = xInside + 'px'

    this.appendChild(circleEl)

    setTimeout( () => circleEl.remove(), 300)
    // button.innerHTML = `<span class="circle" style="top: ${y}px; left: ${x}px;"></span>`
  })
})