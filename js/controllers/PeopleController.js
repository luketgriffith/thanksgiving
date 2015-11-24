let PeopleController = function($cookies, $state, $http, PARSE){
  let vm = this;
  vm.title="People";
  let token = $cookies.get('auth_token');
  let userId = $cookies.get('objectId');
  console.log(userId);
  if(!token){
    alert('You are not logged in');
    $state.go('root.home');
  };








  $http.get(PARSE.URL+'classes/people', PARSE.CONFIG).then((res)=>{
    console.log(res);
  })



};
PeopleController.$inject = ['$cookies', '$state', '$http', 'PARSE'];
export default PeopleController;