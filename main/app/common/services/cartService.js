'use strict';

angular.module("phonecat.services").provider("Cart", [function () {
    var self = this;
    // je ne retourne pas l'objet tout de suite, je vais le modifier
    self.maxAmount = 1000;

    function _displayAmount(){
        console.log("Max amount is ", self.maxAmount);
    }

    function _checkAmount(potentialAmount){
        console.log("amount = ",potentialAmount);
        var result = potentialAmount < self.maxAmount;

        if(!result){
            alert("Le Montant max du panier est  "+ self.maxAmount);
        }
        return result;
    }


    // ensuite je fais ma méthode "$get" qui va retourner l'objet voulu,
    // comme d'hab
    this.$get = function () {

        var Cart =
        {
            "maxAmount": null,
            "displayMaxAmount" : _displayAmount,
            "checkAmount" : _checkAmount
        }

        if(Cart.maxAmount == null){
            Cart.maxAmount = this.maxAmount;
        }

        return Cart;
    }
}])
;