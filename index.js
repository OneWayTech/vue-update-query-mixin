var vue = require('vue');
var updateQuery = require('update-query');
var opt = vue.version[0] === 2 ? 'push' : 'go';

module.exports = {
  methods: {
    updateQuery: function (obj) {
      this.$router[opt](updateQuery(this.$route.path, obj));
    }
  }
};
