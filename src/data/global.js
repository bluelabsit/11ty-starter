/**
 * Prefer to use the JS module exports syntax instead of JSON file (.json) syntax.
 */
module.exports = {
  test: 'ok',
  breakpoints: {
    small: {
      min: '0',
      max: '639px',
    },
    medium: {
      min: '640px',
      max: '1023px',
    },
    large: {
      min: '1024px',
      max: '1199px',
    },
    xlarge: {
      min: '1200px',
      max: '1440px',
    },
    xxlarge: {
      min: '1440px',
      max: '9999px',
    },
  },
  form: {
    recurrence_options: {
      title: 'Chi vuoi ricordare?',
      title_ship_to: 'Destinatario spedizione',
      options: [
        { text: 'Scomparsa', value: 'passing' },
        { text: 'Anniversario della Scomparsa', value: 'passing_anniversary' },
        { text: 'Commemorazione dei defunti', value: 'commemoration_dead' },
      ],
    },
    donation_options: {
      amount_label: 'Importo',
      company_donation_options: {
        label: 'Azienda',
        min_free_amount: '25',
        img: 'https://tt.bluelabs.it/uploads/2019/06/placeholder-04-1.jpg',
        price_point: {
          single_donation: [
            {
              amount: '100',
              image: false,
              text: '',
            },
            {
              amount: '250',
              image: false,
              text: '',
            },
            {
              amount: '500',
              image: false,
              text: '',
            },
            {
              amount: '1000',
              image: false,
              text: '',
            },
          ],
          regular_donation: [
            {
              amount: '100',
              image: false,
              text: '',
            },
            {
              amount: '500',
              image: false,
              text: '',
            },
            {
              amount: '1000',
              image: false,
              text: '',
            },
          ],
          regular_donation_year: [
            {
              amount: '120',
              image: false,
              text: '',
            },
            {
              amount: '250',
              image: false,
              text: '',
            },
            {
              amount: '300',
              image: false,
              text: '',
            },
          ],
        },
      },
      cta: 'Dona ora',
      donation_type_label: 'Tipo di donazione',
      form_title: 'La tua donazione',
      img: 'https://tt.bluelabs.it/uploads/2019/07/1.jpg',
      private_donation_options: {
        label: 'Privato',
        min_free_amount: '10',
        img: 'https://tt.bluelabs.it/uploads/2019/06/placeholder-06.jpg',
        price_point: {
          single_donation: [
            {
              min_free_amount: '5',
              amount: '30',
              image: 'https://picsum.photos/id/33/512/450',
              text: '',
            },
            {
              amount: '60',
              image: 'https://picsum.photos/id/34/512/450',
              text: '',
            },
            {
              amount: '100',
              image: 'https://picsum.photos/id/35/512/450',
              text: '',
            },
          ],
          regular_donation: [
            {
              min_free_amount: '7',
              amount: '25',
              image: false,
              text: '',
            },
            {
              amount: '30',
              image: false,
              text: '',
            },
            {
              amount: '60',
              image: false,
              text: '',
            },
          ],
          regular_donation_year: [
            {
              min_free_amount: '9',
              amount: '100',
              image: false,
              text: '',
            },
            {
              amount: '200',
              image: false,
              text: '',
            },
            {
              amount: '300',
              image: false,
              text: '',
            },
          ],
        },
      },
      recurring_donation_label: 'Donazione regolare',
      single_donation_label: 'Donazione singola',
      text: '...delle persone che lottano e non si arrendono a una malattia genetica rara, offrendo alla ricerca la possibilit\u00e0 di avvicinarsi ogni giorno',
      title: 'La tua donazione pu\u00f2 cambiare la vita',
    },
  },
}
