let HomeController = function(PARSE, $http, $cookies, $state){
  let vm = this;
  vm.title="yay";



  vm.signUp = function (userObj) {
    
    return $http.post(PARSE.URL + 'users', userObj, PARSE.CONFIG).then((res)=>{
      console.log(res);
      $cookies.put('auth_token', res.data.sessionToken);
      $cookies.put('objectId', res.data.objectId);
      $state.go('root.people');
    });
  };
  vm.login = function (userObj) {
    
    return $http.get(PARSE.URL + 'login', {
      headers: PARSE.CONFIG.headers,
      params: userObj
    }).then((res)=>{
      $cookies.put('auth_token', res.data.sessionToken);
      $cookies.put('objectId', res.data.objectId);
      $state.go('root.people');
      
    });
  };

  
};
HomeController.$inject = ['PARSE', '$http', '$cookies', '$state'];
export default HomeController;

      