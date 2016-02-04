'use strict';

angular.module('phonecat.directives')
    .directive('phone', [function () {

        function _link(){

        }


        return {
            restrict:'EA',
            scope:{
                phoneObject:'=',
                onClick:'&'
            },
            transclude:true,
            templateUrl:'app/common/directives/phoneTemplate.html',
            link:_link
    }
    }]);

