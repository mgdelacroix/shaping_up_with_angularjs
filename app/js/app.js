(function() {

    var app = angular.module('store', [ ]);

    app.controller('StoreController', function() {
        this.products = gems;
    });

    var gems = [
        {
            name: 'Dodecahedron',
            price: 2.95,
            description: 'blah blah',
            canPurchase: true,
            soldOut: false
        },
        {
            name: 'Pentagon',
            price: 5.95,
            description: 'blah blah',
            canPurchase: false,
            soldOut: false
        },
    ];

})();
