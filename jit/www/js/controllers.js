angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $ionicModal, $http) {




    $scope.startOrder = function(){
        // Make a HTTP POST with the order to the server

        $scope.closeModal();

        $http.post(
            'https://hit-cloud.eu-gb.mybluemix.net/order',
             '{"name":"me", "cost": 10, "options": {"milk": 5}}',
             {headers: {'Content-Type': 'application/json'}}
            )
            .then(function suc(response){
                console.log(response);
        swal("Order Placed!", "It will be made fresh and be ready for you to just grab and go", "success");

            }, function err(response) {
                console.log(response);

            });



    };






  $ionicModal.fromTemplateUrl('my-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $scope.openModal = function() {
    $scope.modal.show();
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };
  // Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
  // Execute action on hide modal
  $scope.$on('modal.hidden', function() {
    // Execute action
  });
  // Execute action on remove modal
  $scope.$on('modal.removed', function() {
    // Execute action
  });






})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
