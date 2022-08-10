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

/**
 * Autocomplete class.
 *
 * @author Gustavo Ocanto <gustavoocanto@gmail.com>
 * @license https://github.com/gocanto/google-autocomplete/blob/master/LICENSE.md
 */

import Loader from './Loader'

class Autocomplete {
  /**
   * Create a new autocomplete instance.
   *
   * @param {String} ref
   * @param config
   */
  constructor(ref, config = {}) {
    this.lastAddress = null

    /**
     * The retrieved place.
     *
     * @type {Object}
     */
    this.place = {}

    /**
     * The google autocomplete payload.
     *
     * @type {Object}
     */
    this.response = {}

    /**
     * The autocomplete instance.
     *
     * @type {Object}
     */
    this.autocomplete = null

    /**
     * The bounded input.
     *
     * @type {String}
     */
    this.ref = document.getElementById(ref)

    /**
     * The autocomplete config
     *
     * @type {Object}
     */
    this.config = config

    //Boots the autocomplete.
    this.boot()
  }

  /**
   * Create a new google map instance.
   *
   * @return Autocomplete
   */
  static make(ref, config = {}) {
    return new Autocomplete(ref, config)
  }

  /**
   * Load the google places API.
   */
  boot() {
    Loader.load(() => {
      return this.bind(this)
    })
  }

  /**
   * Binds the autocomplete to the given reference.
   *
   * @param obj
   */
  bind(obj) {
    ;(function pacSelectFirst(input) {
      // store the original event binding function
      const _addEventListener = input.addEventListener ? input.addEventListener : input.attachEvent

      function addEventListenerWrapper(type, listener) {
        // Simulate a 'down arrow' keypress on hitting 'return' when no pac suggestion is selected,
        // and then trigger the original listener.
        if (type === 'keydown') {
          let orig_listener = listener
          listener = function (event) {
            let suggestion_selected = document.querySelectorAll('.pac-item-selected').length > 0
            if (event.which === 13 && !suggestion_selected) {
              // let simulated_downarrow = $.Event("keydown", {
              // 	keyCode: 40,
              // 	which: 40
              // });
              let simulated_downarrow = new KeyboardEvent('keydown', {
                keyCode: 40,
                which: 40,
                bubbles: true,
                cancelable: true,
              })
              orig_listener.apply(input, [simulated_downarrow])
            }

            orig_listener.apply(input, [event])
          }
        }

        _addEventListener.apply(input, [type, listener])
      }

      input.addEventListener = addEventListenerWrapper
      input.attachEvent = addEventListenerWrapper
    })(obj.ref)

    obj.autocomplete = new google.maps.places.Autocomplete(obj.ref, this.config)

    google.maps.event.addDomListener(obj.ref, 'keydown', function (e) {
      if (e.keyCode === 13) {
        e.preventDefault()
      }
    })
    obj.autocomplete.addListener('place_changed', () => {
      obj.pipe()
    })
  }

  placeChanged() {
    if (this.ref.value.length === 0) {
      google.maps.event.trigger(this.ref, 'focus', {})
      google.maps.event.trigger(this.ref, 'keydown', {
        keyCode: 13,
      })
    }
  }

  /**
   * Pipes out the retrieved place information.
   */
  pipe() {
    let data = {}
    let googleInputs = window.GOOGLE_AUTOCOMPLETE.inputs
    let place = (this.response = this.autocomplete.getPlace())

    if (place && place.address_components !== undefined) {
      this.lastAddress = this.ref.value

      for (let i = 0; i < place.address_components.length; i++) {
        let input = place.address_components[i].types[0]

        if (googleInputs[input]) {
          data[input] = place.address_components[i][googleInputs[input]]
        }
      }

      this.place = JSON.parse(JSON.stringify(data))
    } else {
      this.lastAddress = null
      this.place = null
    }
  }

  /**
   * Bind the browser location to the given input.
   */
  geolocate() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let geolocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        }

        let circle = new google.maps.Circle({
          center: geolocation,
          radius: position.coords.accuracy,
        })

        this.autocomplete.setBounds(circle.getBounds())
      })
    }
  }

  getLastAddress() {
    return this.lastAddress
  }

  /**
   * Returns the retrieved address.
   *
   * @return {Object}
   */
  getPlace() {
    return this.place
  }

  /**
   * Returns the retrieved response.
   *
   * @return {Object}
   */
  getResponse() {
    return this.response
  }

  /**
   * Returns the google autocomplete object.
   *
   * @return {Object}
   */
  getInstance() {
    return this.autocomplete
  }
}

export default Autocomplete
