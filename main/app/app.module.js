'use strict';

angular.module('phonecat.services', []);
angular.module('phonecat.directives', []);


angular.module('phonecat', ['ngResource', 'phonecat.services', 'phonecat.directives'])
    .config(['$resourceProvider', function ($resourceProvider) {
        // Don't strip trailing slashes from calculated URLs
        $resourceProvider.defaults.stripTrailingSlashes = false;
    }]).config(['CartProvider', function (CartProvider) {
        CartProvider.maxAmount = 2500;
    }]);
