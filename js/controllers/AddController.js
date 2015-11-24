let AddController = function(PARSE, $http, $cookies, $state){
  let vm = this;
  vm.title="Add";
  function Person(obj){
    this.name = obj.name;
    this.relation=obj.relation;
    this.food=obj.food;
    this.dateComing=obj.dateComing;
    this.dateLeaving=obj.dateLeaving;
  }
  vm.addPerson = function(person){

    console.log('jeu');

    let userId = $cookies.get('objectId');
    let c = new Person(person);

    let ACLObj = {};
    ACLObj[userId] = {
      read: true,
      write: true
    };

    c.ACL = ACLObj;

    c.user = {
      __type: 'Pointer',
      className: '_User',
      objectId: userId
    };
    $http.post(PARSE.URL+'classes/people', c, PARSE.CONFIG).then((res)=>{
      
      $state.go('root.people');
    })
  };

};
AddController.$inject = ['PARSE', '$http', '$cookies', '$state'];
export default AddController;