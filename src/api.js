
let Api = function(){

};

Api.prototype = function(){

  let getStudents = function(callback){

     $.ajax({
      type: 'GET',
      url :'src/data.json',
      success: function(result){
        callback(result);
      },
      error: function(error){
        console.log(error);
      }
    });

  };
  return{
    getStudents : getStudents
  }
}();
