cruddly.controller('DeleteCtrl', function ($scope, $state, $stateParams, DataSource) {
     var id = $stateParams.id;
    
    var load = function () {
        $scope.read = DataSource.read();
        var currentUser = DataSource.getById(id);
        $scope.model = currentUser;
    };

    var returnRead = function () {
        $state.go('read');
    };


    $scope.remove = function () {
        DataSource.remove($scope.model);
        returnRead();
    };

    $scope.returnToRead = function () {
        returnRead();
    };

    load();
});