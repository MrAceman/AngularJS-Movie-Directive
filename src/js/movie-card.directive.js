function MovieCard () {
  return {
    restrict: 'E',
    scope: {
      name: '@'
    },
    templateUrl: 'templates/movie-card.tpl.html',
    controller: function ($http, $scope) {
      let vm = this;
      $http.get('http://www.omdbapi.com/?i=' + $scope.name).then( (res) => {
      vm.movie = res.data;
      console.log(vm.movie);
      });
    },
    controllerAs: 'vm'
  };
}

MovieCard.$inject = [];
export { MovieCard };
