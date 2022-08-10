import axios from 'axios'

module.exports = {
  Thankyou: class Thankyou {
    /** @type HTMLElement el */
    constructor(el) {
      this.el = el
      const messageWrapper = document.querySelector('.thank-you__message')

      el.addEventListener('submit', (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        event.target.setAttribute('disabled', true)
        const submitButton = el.querySelector('button[type=submit]')
        let originalSubmitContent
        if (submitButton && submitButton.matches('[data-sending-text]')) {
          originalSubmitContent = submitButton.innerHTML
          submitButton.innerHTML = `<span>${submitButton.dataset.sendingText}</span>`
        }

        axios(
          {
            url: el.getAttribute('action'),
            method: el.getAttribute('method') || 'post',
          },
          formData
        )
          .then((response) => {
            event.target.removeAttribute('disabled')
            event.target.reset()
            if (originalSubmitContent) {
              submitButton.innerHTML = originalSubmitContent
            }
            messageWrapper.innerHTML = response.data
          })
          .catch((error) => {
            console.log(error)
          })
      })
    }
  },
}
