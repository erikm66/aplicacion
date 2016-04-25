$(document).ready(function(){
  $("#confadd").hide();
  $("#canadd").hide();
var id = 0;
      
carguser();

      $("#add").click(function(){
        $("#add").hide();
        $("#confadd").show();
        $("#canadd").show();
        id=parseInt($("tr:last td:last").text());
        id=id+1;
        $('#my-table').append('<tr><td id="nom" style="text-align: left;">Nombre</td><td id="pass" style="text-align: left;">Pass</td><td id="email" style="text-align: left;">Email</td><td id="rol" style="text-align: left;">Rol</td><td id="id" style="text-align: left;">'+id+'</td></tr>');
      });
      $("#confadd").click(function(){
        nombre=$("#nom").text();
        password=$("#pass").text();
        correo=$("#email").text();
        rol=$("#rol").text();
        datastr = "name="+nombre+"&pass="+password+"&email="+correo+"&rol="+rol;
        $.ajax({
        url:'http://127.0.0.1/M-master/api/users',
        type:'POST',
        data: datastr, 
        success:function(){
        alert("todo correcto");
        location.reload();
        },
        error: function(data,XMLHttpRequest, textStatus, errorThrown) { 
        alert("Status: " + textStatus); 
        alert("Error: " + errorThrown);
        console.log(data);
    }   

  });
        $("#add").show();
        $("#confadd").hide();
        $("#canadd").hide();
      });
      $("#canadd").click(function(){
        $('tr:last').remove();
        $("#add").show();
        $("#confadd").hide();
        $("#canadd").hide();
      });

      $('#my-table tbody').on( 'click', 'tr', function () {
        if($(this).hasClass("select")){
        $(this).removeClass("select");}
        else{
          $(this).addClass("select");
        }
        });
      
});


  function carguser(){
 $.getJSON('http://127.0.0.1/M-master/api/users',function(data){
       dynatable = $('#my-table').dynatable({
          dataset: {
            records: data
          }
        });
       $('#my-table tbody').attr('contenteditable','true');
       $('tr').each(function(){
    $(this).find('td').eq(4).attr('contenteditable','false');
})
});

  };
     

/*
  ({
  url:'http://127.0.0.1/M-master/api/users',
  type:'POST',
  data: {something: true},
  contentType: 'application/json',
  dataType: 'json',
  success:function(respuesta){
  	var data = JSON.parse(respuesta);
$("#consultar").html("<table><tbody><tr><th>Nombre</th><th>Pass</th><th>Email</th><th>Rol</th></tr>"); 
    for(i=0;i<data.length;i++){ 
    $("#consultar table").append("<tr><td>"+data[i].name+"</td><td>"+data[i].pass+"</td><td id='email'>"+data[i].email+"</td><td>"+data[i].rol+"</td><td><input type='checkbox' name='user' value='"+data[i].idUsuaris+"'></td></tr>");
     }
 $("#consultar table").append("</tbody></table>").appendTo('#consultar');
  },
   error: function (request, error) {
        console.log(arguments);
        alert(" Can't do because: " + error);
    }
  });*/

$.getJSON('http://127.0.0.1/M-master/api/users',function(data){
$("#consultar").html("<table><tbody><tr><th>Nombre</th><th>Pass</th><th>Email</th><th>Rol</th></tr>"); 
    for(i=0;i<data.length;i++){ 
    $("#consultar table").append("<tr><td>"+data[i].name+"</td><td>"+data[i].pass+"</td><td id='email'>"+data[i].email+"</td><td>"+data[i].rol+"</td><td><input type='checkbox' name='user' value='"+data[i].idUsuaris+"'></td></tr>");
     }
 $("#consultar table").append("</tbody></table>").appendTo('#consultar');});