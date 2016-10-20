var loginApp=angular.module('LoginApp',[]);
loginApp.const('self',self);
loginApp.controller('loginController',function($scope){
  self.email=$scope.email;
  self.password=$scope.password;
})
