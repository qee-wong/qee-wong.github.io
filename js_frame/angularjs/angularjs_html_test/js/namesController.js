var controller = angular.module('myApp', []);
controller.controller('namesCtrl', function($scope) {
    var list = [
        {name:'Jani1',country:'Norway'},
        {name:'Hege',country:'Sweden'},
        {name:'Kai',country:'Denmark'}
    ];

    for (var e in list) {
        if (list[e].name == 'Jani1') {
            list[e].country = 'hubei';
        }
    }

    $scope.names = list;
});

controller.controller('nameCtrl', function($scope) {
    $scope.names = [
        {name:'Jani',country:'Norway'},
        {name:'Hege',country:'Sweden'},
        {name:'Kai',country:'Denmark'}
    ];
});
