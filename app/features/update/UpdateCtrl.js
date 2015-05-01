cruddly.controller('UpdateCtrl', function ($scope, $state, $stateParams, DataSource) {

    var id = $stateParams.id;

    var load = function () {
        $scope.read = DataSource.read();
        var currentUser = DataSource.getById(id);
        $scope.model = currentUser;
    };

    $scope.update = function () {
        DataSource.update($scope.model);
        $state.go('read');
    };

    load();
});