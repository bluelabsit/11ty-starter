import { assignIn } from 'lodash-es'
import { CountUp } from 'countup.js/dist/countUp.umd.js'
import Viewport from '../lib/Viewport'

export default class Counter {
  /** @type HTMLElement el */
  constructor(el) {
    this.el = el
    const value = this.el.dataset.value || this.el.innerText
    this.instance = this
    this.options = assignIn(
      {
        startVal: 0,
        decimal: ',',
        decimalPlaces: this.countDecimals(value),
        function(t, b, c, d) {
          let ts = (t /= d) * t
          let tc = ts * t
          return b + c * (tc * ts + -5 * ts * ts + 10 * tc + -10 * ts + 5 * t)
        },
      },
      JSON.parse(this.el.dataset.counter || '{}')
    )

    this.countUp = new CountUp(this.el, value, this.options)

    new Viewport(this.el).once('enter', () => this.countUp.start())

    this.el.counter = this
  }

  countDecimals(value) {
    if (Math.floor(value) === parseFloat(value)) return 0
    return value.toString().split('.')[1].length || 0
  }
}
