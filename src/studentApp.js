
let StudentApp = function(){

};

StudentApp.prototype = function(){
  let api = new Api();

  let loadStudents = function(){
    $.when(
      loadTemplate("templates/student-row.html")
    ).done(function(template){

      $('#student-list').empty();
      $('#student-list').append(template);

      api.getStudents(function(students){

        $.each(students, function(index, student){

          let currentRowView = $(document).find("div[name=student-row]").eq(index);
          $(currentRowView).find("label[name=lblId]").html(student.id);
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
