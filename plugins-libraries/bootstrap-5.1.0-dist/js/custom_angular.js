var app = angular.module("simpleApp",[]);

app.controller("simpleController",function($scope){
    $scope.collection = [{name:"Venkat",role:"Front-end Developer",salary:25000}];

    $scope.addEntry = function(){
        $scope.collection.push($scope.newData);
        $scope.newData = '';
    };
});