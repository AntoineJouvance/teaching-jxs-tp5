var pokeApp = angular.module('pokedex', ['ngResource']);

// With this you can inject POKEAPI url wherever you want
pokeApp.constant('POKEAPI', 'http://pokeapi.co');

pokeApp.config(['$resourceProvider', function($resourceProvider) {
    $resourceProvider.defaults.stripTrailingSlashes = false;
}]);

pokeApp.controller('myCtrl',['$scope', '$log',
    function($scope, $log){
        $scope.id = '1';
        $scope.$log = $log;
        $scope.list = {
            model: null,
            poke :[
                {id: '1', name: 'bulbasaur'},
                {id: '2', name: 'ivysaur'},
                {id: '3', name: 'venusaur'},
                {id: '7', name: 'squirtle'},
                {id: '8', name: 'Wartortle'},
                {id: '9', name: 'Blastoise'},
                {id: '150', name: 'Mewtwo'}

            ]
        };
    }]);

pokeApp.controller('httpCtrl', function($scope, $http) {
    $http.get("https://pokeapi.co/api/v1/pokedex/")
        .then(function(response) {
            $scope.data = response.data;
        });
});

pokeApp.factory("infoPokeFactory", function ($resource) {
    return $resource("http://pokeapi.co/api/v1/pokemon/:id/");
});