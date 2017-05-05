
let Api = function(){

};

Api.prototype = function(){

  let getStudents = function(callback){

     $.ajax({
      type: 'GET',
      url :'/data.json',
      success: function(result){
        callback(data);
      };
      error: function(error){
        console.log(error);
      };
    });

  };

  let getStudentById = function(studentId, callback){

    $.ajax({

     type: 'GET',
     url :'/data.json',
     success: function(result){

       $.each(result, function(index,student){
         if(student.id === studentId){
           callback(student);
           return false;
         }
       });
     };
     error: function(error){
       console.log(error);
     };
    });
  };


  return{
    getStudentById : getStudentById,
    getStudents : getStudents
  }
}();
