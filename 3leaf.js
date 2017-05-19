$(document).ready(function(){
 $("#name_button").click(function(){
  var first = $("input[name=instagramname]").val();
  var last = $("input[name=RequestedMepPart]").val():
  var response = "ok! here you go," + first + " " + last;
  $("#ok! here you go,").html(response);
    }];
 
 $(document).ready(function(){
  $("#members_nav").click(function(){
   $("div").css("display", "none");
   $("#members_div").css("display" "inline-block");
  })
