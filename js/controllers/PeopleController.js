let PeopleController = function($cookies, $state){
  let vm = this;
  vm.title="People";
  let token = $cookies.get('auth_token');
  if(!token){
    alert('You are not logged in');
    $state.go('root.home');
  }


};
PeopleController.$inject = ['$cookies', '$state'];
export default PeopleController;