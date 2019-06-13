//adding a class to a tag
$("h1").addClass("big-title");

//remove a class from a tag
$("h1").removeClass("big-title");

//Change the content of the tag
$("h1").text("Goodbye");

//adding HTML element
$("button").html("<em>Goodbye</em>");

//Adding event listener
$("button").click(function() {
  $("h1").css("color", "purple");
});
