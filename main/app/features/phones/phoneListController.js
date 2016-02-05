angular.module('phonecat')
    .controller('PhoneListController', [
        '$scope', '$http', 'Phones', 'Cart',
        function ($scope, $http, Phones, Cart) {

            //$http.get('assets/json/phones/phones.json').success(function(data) {
            //    $scope.phones = data;
            //});
            $scope.cart = Cart;


            $scope.phones = Phones.getAll();
            $scope.orderProp = 'age';
            $scope.cartTotal = 0;
            $scope.selectedPhones = [];


            $scope.addToCart = function (phoneObject) {
                var potentialAmount = $scope.cartTotal + phoneObject.price;
                if (Cart.checkAmount(potentialAmount)) {
                    $scope.selectedPhones.push(phoneObject);
                    $scope.cartTotal += phoneObject.price;
                }
            };


        }]);

