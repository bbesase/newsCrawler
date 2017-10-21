import axios from 'axios'

export default {
  methods: {
    getSources: function () {
      console.log('fuck')
      axios.get(`https://newsapi.org/v1/sources?language=en`)
        .then(response => {
          console.log('response', response)
          return response.data
        })
    },
    hello: function () {
      console.log('heyyyyyy')
    }
  }
}
