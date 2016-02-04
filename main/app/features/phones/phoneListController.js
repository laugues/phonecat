angular.module('phonecat')
    .controller('PhoneListController', ['$scope','$http','Phones', function ($scope, $http, Phones) {

        //$http.get('assets/json/phones/phones.json').success(function(data) {
        //    $scope.phones = data;
        //});

        $scope.phones = Phones.getAll();
        $scope.orderProp = 'age';
        $scope.titi="titsdfsdfsdi";
    }]);

