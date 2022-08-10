export default class HeaderLinks {
  /** @param el HTMLElement */
  constructor(el) {
    this.el = el
    this.toggle = el.querySelector('.links__btn')
    this.tooltip = el.querySelector('.links__tooltip')
    this.closeBtn = el.querySelector('.links__tooltip__close')

    if (this.tooltip && this.closeBtn && this.toggle) {
      this.toggle.addEventListener('click', () => {
        this.tooltip.classList.toggle('links__tooltip--open')
      })
      this.closeBtn.addEventListener('click', () => {
        this.tooltip.classList.remove('links__tooltip--open')
      })
    }
  }
}
