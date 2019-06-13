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

//detect which key was pressed in the input box
$("input").keypress(function(event) {
  $("h1").text(event.key);
});


//adding animation
$("button").click(function() {
  $("h1").toggle();
  //.show(), .toggle(), .fadeOut(), .fadeIn(),
  //.fadeToggle(), .slideUp(), .slideDown(), slideToggle()

  $("h1").animate({opacity: 0.5});

//can do a lot of things at once
  //slide up first then down then change opacity
  $("h1").slideUp().slideDown().animate({opacity:0.5});
});
