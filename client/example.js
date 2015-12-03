angular.module('example', ['angular-meteor']);

angular.module('example').controller('ExampleCtrl', ['$scope', function ($scope) {
  $scope.images = $scope.$meteorCollectionFS(Images, false, Images);

  $('#upload-file').bind("change", function (event) {
    $scope.images.save(event.target.files[0]).then(function(data) {
    	console.log('saved file', data); // you can see that the returned object contains url() and other functions
    	console.log('saved file url', data[0]._id.url({store: 'original'})); // yet, when we call url function, it returns null
    });
  });

  $scope.removeImage = function(image) {
    $scope.images.remove(image);
  };
}]);