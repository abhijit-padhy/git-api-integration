var app = angular.module('app',['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "./views/login.html",
        controller : "loginCtrl"
    })
    .when("/home",{
        templateUrl : "./views/home.html",
        controller : "homeCtrl"
    })
    .otherwise({
        redirecTo : "/"
    });
});
app.service('dataService',function(){
    this.data = {};
})
app.controller('homeCtrl',function($scope,$routeParams,dataService,$http){
    $scope.homeMessage = "In home message";
    $scope.data = dataService.data;
    $scope.keys = Object.keys($scope.data);
    $scope.repos = [];
    var _url = $scope.data['repos_url'];
    $http.get(_url).then(function(response){
        $scope.repos = response.data;
        console.log("repos response:",$scope.repos);
        
    });
    
});
app.controller('ctrl',function($scope){
    $scope.message = "index message";
});
app.controller('loginCtrl',function($scope,$http,$location,dataService){
    $scope.userList = [];
    $scope.login = function(){
        if($scope.userName){
            var _url = "https://api.github.com/search/users?q="+$scope.userName;
            $http.get(_url).then(function(response){
                console.log("response body:",response.data.items);
                $scope.userList = response.data.items;
            });
        }
    };
    $scope.showData = function(data){
        var str = JSON.stringify(data);
        dataService.data = data;
        $location.path("/home");
    }
});