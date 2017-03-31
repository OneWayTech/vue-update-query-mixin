import updateQuery from 'update-query'
const opt = (window.Vue || require('vue')).version[0] === '2' ? 'push' : 'go'

export default {
  methods: {
    updateQuery (obj) {
      this.$router[opt](updateQuery(this.$route.path, obj))
    }
  }
}
