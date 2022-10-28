process = { env: {} }

import './pageLoaded'
import './scrollTo'

const moduleElements = document.querySelectorAll('[data-module]')

for (let i = 0; i < moduleElements.length; i++) {
  const el = moduleElements[i]
  const name = el.getAttribute('data-module')
  try {
    // console.info(`Loading module ${name}`)
    import(`./modules/${name}.js`).then(({ default: Module }) => {
      // console.info(`Loaded module ${name}`)
      new Module(el)
    })
  } catch (e) {
    console.error(e)
  }
}
