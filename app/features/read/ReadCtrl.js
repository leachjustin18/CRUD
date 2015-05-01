cruddly.controller('ReadCtrl', function ($scope, DataSource) {
    $scope.read = DataSource.read();
});