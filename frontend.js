var App = angular.module('App',[]);
App.controller('Ctrl',['$scope','$http',function($scope,$http) {
         
    var reset = function(){
      $http.get('/todolist').success(function(response){
        $scope.todolist=response;
        $scope.task="";
        });
     };

  reset();

$scope.addtask = function() {
  $http.post('/todolist', $scope.task).success(function(response) {
       reset();
    });
 };

$scope.deletetask = function(id) {
  $http.delete('/todolist/'+ id).success(function(response){
      reset();
      });
   };
 
$scope.edittask = function(id) {
   $http.get('/todolist/'+ id).success(function(response){
       $scope.task=response;
     });
   };

$scope.updatetask = function(){
   $http.put('/todolist/'+$scope.task._id, $scope.task).success(function(response){
       reset();
    });
 };

$scope.clearfield = function(){
   $scope.task="";
}

}]);


                   
