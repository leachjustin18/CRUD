cruddly.controller('CreateCtrl', function ($scope, DataSource) {
    $scope.input = '';

    $scope.create = function () {
       var person = $scope.model;
        DataSource.create(person);
        $scope.model = {};
    };
});