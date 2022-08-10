export class Video {
  /** @type HTMLElement el */
  constructor(el) {
    this.el = el
    const instance = this
    this.video = el.querySelector('video')
    this.button = el.querySelector('button')

    // Show video controls only on small devices
    const config = import('../../data/global.js')
    matchMedia('(max-width: ' + config.breakpoints.medium.max + ')').addListener(
      (mq) => (this.video.controls = mq.matches)
    )

    this.video.addEventListener('loadedmetadata', () => {
      debugger
      this.el.classList.toggle('portait', this.video.videoHeight > this.video.videoWidth)
    })
    this.video.addEventListener('pause', () => {
      this.el.classList.remove('playing')
    })

    this.video.addEventListener('play', () => {
      this.el.classList.add('playing')
    })

    this.button.addEventListener('click', () => {
      this.el.matches('.playing') ? this.video.pause() : this.video.play()
    })
  }
}
