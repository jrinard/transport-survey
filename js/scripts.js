$(document).ready(function(){
    $("form#transportation_survey").submit(function(event){
      event.preventDefault();
      $("#work-responses, #fun-responses").show();
      $("input:checkbox[name=work-transportation]:checked").each(function(){
        var workTransportationMode = $(this).val();
        $('#work-responses').append(workTransportationMode + "<br>");
      }); // each close
      $("input:checkbox[name=fun-transportation]:checked").each(function(){
        var funTransportationMode = $(this).val();
        $('#fun-responses').append(funTransportationMode + "<br>");  
      });
      $('#transportation_survey').hide();
    });// submit
});// ready
