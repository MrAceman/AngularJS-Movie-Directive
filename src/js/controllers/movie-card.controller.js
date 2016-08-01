function MovieCardController ($http, $scope) {
  let vm = this;
  $http.get('http://www.omdbapi.com/?i=' + $scope.name).then( (res) => {
  vm.movie = res.data;
  console.log(vm.movie);
  });
},
controllerAs: 'vm'

MovieCardController.$inject = ['$http', '$scope'];
export { MovieCardController };
