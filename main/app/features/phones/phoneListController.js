angular.module('phonecat')
    .controller('PhoneListController', [
        '$scope','$http','Phones','Cart',
        function ($scope, $http, Phones,Cart) {

        //$http.get('assets/json/phones/phones.json').success(function(data) {
        //    $scope.phones = data;
        //});
        $scope.cart = Cart;


        $scope.phones = Phones.getAll();
        $scope.orderProp = 'age';
        $scope.cartTotal = 0;
        $scope.selectedPhones = [];

            
        $scope.addToCart = function (phoneObject){

            if($scope.cart.maxAmount < $scope.cartTotal + phoneObject.price){
                alert("Le Montant max du panier est  "+ $scope.cart.maxAmount);
            } else {
                console.log("add phoneObject to cart = ",phoneObject);
                $scope.selectedPhones.push(phoneObject);
                console.log("current cart = ",$scope.selectedPhones);
                $scope.cartTotal += phoneObject.price;
            }
        };



    }]);

