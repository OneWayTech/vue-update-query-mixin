import updateQuery from 'update-query'

export default {
  methods: {
    updateQuery (obj) {
      this.$router.go(updateQuery(this.$route.path, obj))
    }
  }
}
