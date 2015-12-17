angular.module('example', ['angular-meteor']);

angular.module('example').controller('ExampleCtrl', function ($scope, $reactive, $q) {
  var vm = this;
  $reactive(vm).attach($scope);

  vm.helpers({
    images: () => { return Images.find(); }
  })

  vm.subscribe('images');

  $('#upload-file').bind("change", function (event) {
    Images.insert(event.target.files[0], (err, fileObj) => {
          if(err) console.log(err);         
        });
  });

  vm.removeImage = function(image) {
    Images.remove(image._id);
  };
});