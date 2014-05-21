angular.module('GYST', ['ionic'])

.controller('GystCtrl', function($scope, $ionicModal, $ionicListDelegate, $http) {
  // No need for testing data anymore

  $scope.tasks = [{title: "Do a thing"}, 
  				  {title: "Contemplate the mysteries"},
  				  {title: "Eat a burrito"}];

  $scope.items = [{title: "A seedy old man just consumed an entire city #yolo"},
			      {title: "asdfjkl;"}];

  $scope.shouldShowDelete = false;
  $scope.shouldShowReorder = false;
  $scope.isChecked = false;

  // Create and load the Modal
  $ionicModal.fromTemplateUrl('new-task.html', function(modal) {
    $scope.taskModal = modal;
  }, {
    scope: $scope,
    animation: 'slide-in-right'
  });

  // Called when the form is submitted
  $scope.createTask = function(task) {
    $scope.tasks.unshift({
      title: task.title
    });
    $scope.taskModal.hide();
    task.title = "";
  };

  $scope.showDelete = function(){
  	$scope.shouldShowDelete = !$scope.shouldShowDelete;
  };
  $scope.showChecked = function(){
  	$scope.isChecked = !$scope.isChecked;
  };

  $scope.showReorder = function(){
  	$scope.shouldShowReorder = !$scope.shouldShowReorder;
  };

  // Open our new task modal
  $scope.newTask = function() {
    $scope.taskModal.show()
    .finally(function() {
       // Stop the ion-refresher from spinning
       $scope.$broadcast('scroll.refreshComplete');
     });
  };

  // Close the new task modal
  $scope.closeNewTask = function() {
    $scope.taskModal.hide();
  };
});