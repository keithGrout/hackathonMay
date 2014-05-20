angular.module('GYST', ['ionic'])

.controller('GystCtrl', function($scope, $ionicModal, $ionicListDelegate) {
  // No need for testing data anymore
  $scope.tasks = [{title: "Do a thing"}, 
  				  {title: "Do another thing"}, 
  				  {title: "Do one final thing."},
  				  {title: "Contemplate the mysteries."}];

  // Create and load the Modal
  $ionicModal.fromTemplateUrl('new-task.html', function(modal) {
    $scope.taskModal = modal;
  }, {
    scope: $scope,
    animation: 'slide-in-right'
  });

  // Called when the form is submitted
  $scope.createTask = function(task) {
    $scope.tasks.push({
      title: task.title
    });
    $scope.taskModal.hide();
    task.title = "";
  };

  $scope.showReorderButtons = function(){
  	$ionicListDelegate.showReorder(true);
  };

  // Open our new task modal
  $scope.newTask = function() {
    $scope.taskModal.show();
  };

  // Close the new task modal
  $scope.closeNewTask = function() {
    $scope.taskModal.hide();
  };
});