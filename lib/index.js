import updateQuery from 'update-query'
// Diff:
// Vue 1.x $router.go   $route.path
// Vue 2.x $router.push $route.fullPath
let fullPath = 'fullPath'
const opt = (window.Vue || require('vue')).version[0] === '2' ? 'push' : (fullPath = 'path', 'go')

export default {
  methods: {
    updateQuery (obj) {
      this.$router[opt](updateQuery(this.$router[fullPath], obj))
    }
  }
}
