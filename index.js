var updateQuery = require('update-query');

module.exports = {
  methods: {
    updateQuery: function (obj) {
      this.$router.go(updateQuery(this.$route.path, obj));
    }
  }
};
