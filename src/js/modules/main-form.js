import Vue from 'vue/dist/vue.esm.browser.min.js'
import { assignIn } from 'lodash-es'
import { Power3 as ease, TweenLite } from 'gsap/all'
import VeeValidate, { Validator } from 'vee-validate'
import * as validateIt from 'vee-validate/dist/locale/it.js'
import iban from 'iban'
import { checkCF, checkPIVA } from '../lib/fatturaelettronica'
import { GoogleAutocomplete } from '../lib/google-autocomplete/Components/googleAutocomplete'

window.GOOGLE_AUTOCOMPLETE = {
  domain: 'https://maps.googleapis.com/maps/api/js',
  key: 'AIzaSyBpXckAsqq5TEwQ9M2e9Atm_F1tOVMEL3I',
  library: 'places',

  // google inputs retrieved.
  inputs: {
    administrative_area_level_1: 'long_name',
    administrative_area_level_2: 'short_name',
    street_number: 'short_name',
    postal_code: 'short_name',
    locality: 'long_name',
    country: 'long_name',
    route: 'long_name',
  },
}

Validator.extend('iban', {
  getMessage: (field, params, data) => `Il campo ${field} non contiene un IBAN valido`,
  validate: (value) => iban.isValid(value),
})

Validator.extend('codicefiscale_piva', {
  getMessage: (field, params, data) => `Il campo ${field} non contiene una partita IVA valida`,
  validate: (value) => checkPIVA(value),
})

Validator.extend('piva', {
  getMessage: (field, params, data) =>
    `Il campo ${field} non contiene una partita IVA o un codice fiscale valido`,
  validate: (value) => checkCF(value) || checkPIVA(value),
})

Validator.extend('codicefiscale', {
  getMessage: (field, params, data) => `Il campo ${field} non contiene un codice fiscale valido`,
  validate: (value) => checkCF(value),
})

export default class MainForm {
  /** @type HTMLElement el */
  constructor(el) {
    this.el = el
    const instance = this

    if (el.dataset.googleApiKey) {
      window.GOOGLE_AUTOCOMPLETE.key = el.dataset.googleApiKey
    }

    if (el.querySelector('.follow-button')) {
      window.addEventListener('scroll', () => {
        const top = document.querySelector('.main-form')?.getBoundingClientRect().top
        top &&
          el
            .querySelector('.follow-button')
            .classList.toggle('disabled', top < window.innerHeight / 2)
      })
    }

    Vue.use(VeeValidate)
    Validator.localize('it', validateIt)

    Vue.filter('currency', function (amount) {
      if (
        amount !== '' ||
        amount !== undefined ||
        amount !== 0 ||
        amount !== '0' ||
        amount !== null
      ) {
        return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
      } else {
        return amount
      }
    })

    this.vue = new Vue({
      el: el,
      components: {
        'google-autocomplete': GoogleAutocomplete,
      },
      data() {
        let data = {
          donation: {
            custom_amount: false,
          },
          info: {
            address_manual: false,
            address: {},
          },
        }
        data = assignIn(data, JSON.parse(el.dataset.form || '{}'))

        // Donation defaults
        if (data.donation_options) {
          data.donation.client = instance.getValue(data.donation_options, 'client', 'private')
          data.donation.type = instance.getValue(data.donation_options, 'type', 'regular')
          data.donation.frequency = instance.getValue(data.donation_options, 'frequency', 'monthly')
          data.donation.payment = instance.getValue(data.donation_options, 'payment', 'paypal')

          // data.donation.custom_amount_min = data.donation_options.donation_custom_amount_min || 30;
          data.donation.amount = this.donation_custom_amount_min || 30 //
          data.donation.amount_is_custom = data.donation_options.donation_amount_is_custom || false
        }

        // Recurrence Options
        if (data.recurrence_options) {
          data.recurrence = {
            address_manual: false,
            address: {},
          }
        }

        return data
      },
      provide() {
        return {
          $validator: this.$validator,
        }
      },
      methods: {
        toggleCustomAmount(force) {
          if (force && this.donation.amount_is_custom === force) return

          this.donation.amount_is_custom =
            force === undefined ? !this.$data.donation_amount_is_custom : force

          if (this.donation.amount_is_custom === true) {
            this.donation.custom_amount = this.donation.amount
            this.donation.amount = false
          } else {
            this.donation.custom_amount = false
          }
        },
        checkCustomAmount() {
          this.donation.custom_amount = this.donation_custom_amount
        },
        resetInitialValues() {
          this.donation.amount_is_custom = false
          this.donation.custom_amount = false
          this.donation.amount = this.pricepoints[0].amount
          const payment = document.querySelector('[name=payment]')
          if (payment) {
            this.donation.payment = payment.value
          }
        },
        setAddress(address) {
          this.info.address = address.place
        },
        setRecurrenceAddress(address) {
          this.recurrence.address = address.place
        },
        onSubmit(event) {
          this.$validator.validateAll().then((valid) => {
            const firstInvalidField = document.querySelector('[aria-invalid=true]')

            if (!valid || firstInvalidField) {
              event.preventDefault()
              const y = firstInvalidField.getBoundingClientRect().top + window.scrollY - 100

              TweenLite.to(window, 1, {
                scrollTo: { y: y, autoKill: true },
                ease: ease.easeInOut,
                autoKill: true,
                overwrite: 1,
                onComplete: function () {
                  firstInvalidField.focus()
                },
              })
            }
          })
        },
      },
      watch: {
        'donation.client': function (newValue, oldValue) {
          if (newValue !== oldValue) {
            this.resetInitialValues()
          }
        },
        'donation.type': function (newValue, oldValue) {
          if (newValue !== oldValue) {
            this.resetInitialValues()
          }
        },
        'donation.frequency': function (newValue, oldValue) {
          if (newValue !== oldValue) {
            this.resetInitialValues()
          }
        },
      },
      computed: {
        donation_custom_amount() {
          if (this.donation.amount_is_custom === false) return false
          return Math.max(this.donation.custom_amount, this.donation_custom_amount_min)
        },
        donation_custom_amount_min() {
          return parseInt(
            (this.pricepoints && this.pricepoints[0] && this.pricepoints[0].min_free_amount) ||
              this.currentOptions.min_free_amount ||
              this.donation_options.donation_custom_amount_min ||
              30
          )
        },
        pricepoints() {
          const frequencySuffix = this.donation.frequency === 'monthly' ? '' : '_year'
          return this.currentOptions
            ? this.currentOptions.price_point[this.donation.type + '_donation' + frequencySuffix] ||
                []
            : []
        },
        currentOptions() {
          return this.donation_options[this.donation.client + '_donation_options'] || null
        },
      },
      mounted() {
        this.resetInitialValues()
      },
    })
  }

  getValue(data, name, defaultValue) {
    const domElement = this.el.querySelector(`[name=${name}]:checked,[name=${name}]`)
    return data[name] || (domElement ? domElement.value : defaultValue)
  }
}
