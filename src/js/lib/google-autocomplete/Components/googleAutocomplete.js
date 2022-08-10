/**
 * The google autocomplete component.
 *
 * @author Gustavo Ocanto <gustavoocanto@gmail.com>
 * @license https://github.com/gocanto/google-autocomplete/blob/master/LICENSE.md
 */

import Autocomplete from './../Libraries/Autocomplete'

export const GoogleAutocomplete = {
  template: `<input
		   @focus="autocomplete.geolocate()"
		   @blur="resetField"
		   :placeholder="placeholder"
		   :id="input_id"
		   :name="input_id"
		   :data-vv-as="title"
		   :title="title"
		   v-validate="vValidate"
		   v-model="address"
		   type="text"
		 >`,
  inject: ['$validator'],
  props: {
    'v-validate': {
      type: Object,
      default: () => {},
    },
    placeholder: String, //the input placeholder
    input_id: String, // the input id
    title: String, // the input title
    // "class": String, // the input class
    config: {
      type: Object,
      default: () => {
        return {
          types: ['geocode'],
        }
      },
    }, // the Google Autocomplete config to pass-in
  },

  data: function () {
    return {
      /**
       * The Autocomplete object.
       *
       * @type {Autocomplete}
       */
      autocomplete: null,

      /**
       * The typed address.
       *
       * @type {String}
       */
      address: '',
    }
  },

  computed: {
    /**
     * The place variable returns the requested place from the autocomplete object.
     *
     * @return {Object}
     */
    place() {
      if (this.hasAutocompleteInstance() && this.autocomplete.getPlace() !== null) {
        return this.autocomplete.getPlace()
      }

      return {}
    },

    /**
     * The response variable returns the whole google autocomplete payload.
     *
     * @return {Object}
     */
    response() {
      if (this.hasAutocompleteInstance() && this.autocomplete.getPlace() !== null) {
        return this.autocomplete.getResponse()
      }

      return {}
    },

    /**
     * The response variable returns the whole google autocomplete payload.
     *
     * @return {Object}
     */
    lastAddress() {
      if (this.hasAutocompleteInstance() && this.autocomplete.getLastAddress() !== null) {
        return this.autocomplete.getLastAddress()
      }

      return null
    },
  },

  mounted() {
    //Creates a new Autocomplete object and bind it to the given key.
    this.autocomplete = Autocomplete.make(this.input_id, this.config)
  },

  watch: {
    place() {
      // fires an event to have the retrieved place within the parent component.
      this.$emit('set-address', {
        response: this.response,
        place: this.place,
      })
    },
  },

  methods: {
    /**
     * Checks whether the Autocomplete was loaded.
     *
     * @return boolean
     */
    hasAutocompleteInstance() {
      return this.autocomplete != null && this.autocomplete.getInstance() != null
    },

    resetField() {
      this.address = this.lastAddress
    },
  },
}
