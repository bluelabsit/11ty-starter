import { Power4, TweenLite } from 'gsap/all'
import Viewport from '../lib/Viewport'
import Counter from './counter.js'

export default class Pie {
  /** @type HTMLElement el */
  constructor(el) {
    this.el = el
    this.value = this.el.dataset.value
    const pieNumber = el.querySelector('.pie__number')
    pieNumber.dataset.value = this.value
    new Counter(pieNumber)

    new Viewport(this.el).once('enter', () => this.fillPie())
  }

  fillPie() {
    const filler = this.el.querySelector('.pie__svg__value'),
      dashOffset = parseFloat(window.getComputedStyle(filler).strokeDashoffset.replace('px', '')),
      dashArrayMax = dashOffset + filler.getTotalLength(),
      to = ((dashArrayMax - dashOffset) / 100) * this.value + dashOffset,
      degs = ((360 / 100) * (100 - this.value)) / 2

    filler.style.transform = 'rotate(' + degs + 'deg)'

    TweenLite.to(filler, 1.5, {
      strokeDasharray: to,
      ease: Power4.easeInOut,
      overwrite: 1,
    })
  }
}
