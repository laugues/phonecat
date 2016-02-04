'use strict';

angular.module("phonecat.services").provider("Cart", [function () {

    // je ne retourne pas l'objet tout de suite, je vais le modifier
    var cartProfiles = [
        {
            "name": "admin",
            "maxAmount": 1000
        },
        {
            "name": "noobs",
            "maxAmount": 10
        },
        {
            "name": "confirm",
            "maxAmount": 100
        }
    ];

    // ensuite je fais ma méthode "$get" qui va retourner l'objet voulu,
    // comme d'hab
    this.$get = function (profile) {

        var cartProfiles = {
            "name": "Playlist de " + profile.name,
            "videos": [],
            "currentVideo": 1,
            "next": function () {
                // passer à la vid suivante
            },
            "previous": function () {
                // passer à la vid précédente
            }
        }

        // Au moment de la création de l'objet, j'utilise les données
        // attachées au provider pour fournir la valeur par défaut.
        if (playlist.videos.length === 0) {
            playlist.videos = this.defaultVideos;
        }

        return playlist;
    }
}]);