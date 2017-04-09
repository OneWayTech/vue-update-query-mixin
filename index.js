var updateQuery = require('update-query');
// Diff:
// Vue 1.x $router.go   $route.path
// Vue 2.x $router.push $route.fullPath
module.exports = {
  methods: {
    updateQuery: function (obj) {
      var $router = this.$router,
        $route = this.$route;
      ($router.push || $router.go).call($router,
        updateQuery($route.fullPath || $route.path, obj)
      );
    }
  }
};
