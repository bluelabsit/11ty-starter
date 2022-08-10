import { assignIn, throttle } from 'lodash-es'

export default class Viewport {
  constructor(element, options) {
    this.options = assignIn(
      {
        offset: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        },
        throttleInterval: 100,
        threshold: 0,
        test: function (element, options) {
          const { top, right, bottom, left, width, height } = element.getBoundingClientRect()

          const intersection = {
            t: bottom,
            r: window.innerWidth - left,
            b: window.innerHeight - top,
            l: right,
          }

          const threshold = {
            x: options.threshold * width,
            y: options.threshold * height,
          }

          return (
            intersection.t > options.offset.top + threshold.y &&
            intersection.r > options.offset.right + threshold.x &&
            intersection.b > options.offset.bottom + threshold.y &&
            intersection.l > options.offset.left + threshold.x
          )
        },
      },
      options || {}
    )
    this.element = element
    this.handlers = { enter: [], exit: [] }
    this.singles = { enter: [], exit: [] }

    const triggers = ['scroll', 'resize', 'load']
    const check = throttle(() => {
      this.check()
    }, this.options.throttleInterval)

    triggers.forEach((event) => addEventListener(event, check))

    if (window.MutationObserver) {
      addEventListener('DOMContentLoaded', () => {
        new MutationObserver(check).observe(document.body, {
          attributes: true,
          childList: true,
          subtree: true,
        })
      })
    }

    return this
  }

  check() {
    let passes = this.options.test(this.element, this.options)
    if (passes) {
      this.emit('enter', this.element)
    }

    return this
  }

  /**
   * Register a handler for event, to be fired
   * for every event.
   */
  on(event, handler) {
    this.handlers[event].push(handler)
    return this
  }

  /**
   * Register a handler for event, to be fired
   * once and removed.
   */
  once(event, handler) {
    this.singles[event].unshift(handler)
    return this
  }

  /**
   * Emit event on given element. Used mostly
   * internally, but could be useful for users.
   */
  emit(event, element) {
    while (this.singles[event].length) {
      this.singles[event].pop()(element)
    }
    let length = this.handlers[event].length
    while (--length > -1) {
      this.handlers[event][length](element)
    }
    return this
  }
}
