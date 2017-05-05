
let StudentApp = function(){

};

StudentApp.prototype = function(){
  let loadStudents = function(){
    let api = new Api();

    $.when(
      loadTemplate("templates/student-row.html")
    ).done(function(template){

      $('#student-list').empty();
      api.getStudents(function(students){

        $.each(students, function(index, student){

          $('#student-list').append(template);//Add student row
          let currentRowView = $(document).find("div[name=student-row]").eq(index);

          $(currentRowView).find("label[name=lblId]").html(student.id);//Assign data to related elements
          $(currentRowView).find("label[name=lblName]").html(student.name);
          $(currentRowView).find("label[name=lblAge]").html(student.age);
          $(currentRowView).find("label[name=lblAddress]").html(student.address);

        });

      });
    })
  };

  let loadTemplate = function(url){
    return $.get(url, function (data) {
        var parsed = $.parseHTML(data);
        return parsed;
    });
  };

  return {
    loadTemplate: loadTemplate,
    loadStudents: loadStudents
  };
}();
