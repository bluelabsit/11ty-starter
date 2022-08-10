document.addEventListener(
  'click',
  function (event) {
    let button
    if (
      (event.target.matches('.scroll-to') && (button = event.target)) ||
      (event.target.parentNode.matches('.scroll-to') && (button = event.target.parentNode))
    ) {
      const target = document.querySelector(
        button.getAttribute('href') || button.getAttribute('data-target')
      )

      if (target) {
        let y = target.offsetTop

        window.scrollTo({ behavior: 'smooth', top: y })

        event.preventDefault()
      }
    }
  },
  false
)
