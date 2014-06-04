var fellowsApp = angular.module('fellowsApp', ['fellowsApp.services']);

fellowsApp.controller('mainController', function($scope, fellowsMap) {
    $scope.fellows = fellowsMap.get();
});