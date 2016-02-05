'use strict';

angular.module("phonecat.services").provider("Cart", [function () {
    var self = this;
    // je ne retourne pas l'objet tout de suite, je vais le modifier
    self.maxAmount = 1000;

    function displayAmount(){
        console.log("Max amount is ", self.maxAmount);
    }


    // ensuite je fais ma méthode "$get" qui va retourner l'objet voulu,
    // comme d'hab
    this.$get = function () {

        var Cart =
        {
            "maxAmount": null,
            "displayMaxAmount" : displayAmount
        }

        if(Cart.maxAmount == null){
            Cart.maxAmount = this.maxAmount;
        }

        return Cart;
    }
}])
;