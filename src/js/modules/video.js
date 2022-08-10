/*
 * Xeader Studios
 *
 * NOTICE OF LICENCE
 *
 * This source file is subject to the EULA
 * that is bundled with this package in the file LICENSE.txt
 * It is also available through th world-wide-web at this URL:
 * https://xeader.com/LICENCE-CE.txt
 *
 * @category telethon-landings
 * @package telethon-landings
 *
 * @author Antonio Gatta <a.gatta@xeader.com>
 * @url http://xeader.com
 * @copyright Copyright (c) 2019 Xeader Studios
 * @license All right reserved
 */
import config from '../../data/global'

export class Video {
  /** @type HTMLElement el */
  constructor(el) {
    this.el = el
    const instance = this
    this.video = el.querySelector('video')
    this.button = el.querySelector('button')

    // Show video controls only on small devices
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
