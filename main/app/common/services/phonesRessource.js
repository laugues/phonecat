'use strict';

angular.module('phonecat').factory('Phones', ['$resource', function ($resources) {
    return $resources('assets/json/phones/:phoneId.json', {},
        {
            getAll: {method:'GET', params:{phoneId:'phones'}, isArray:true}
        }
    );
}])