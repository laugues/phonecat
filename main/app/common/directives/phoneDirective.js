'use strict';

angular.module('phonecat.directives')
    .directive('phone', [function () {

        var _link = function (scope, element, attrs) {

        }

        return {
            restrict:'EA',
            scope:{
                phoneObject:'=',
                addToCartAction:'&'
            },
            transclude:true,
            templateUrl:'app/common/directives/phoneTemplate.html',
            link:_link
    }
    }]);

