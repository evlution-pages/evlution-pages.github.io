$(function () {
  $(".scale-transition").delay(2500).addClass("scale-in");

  setTimeout(() => {
    $(".pulse").removeClass("pulse");
  }, 2500);


  $(".nav-wrapper").addClass("white black-text")
  $(".btn").addClass("blue darken-3 white-text");

  $("body").css("visibility", "visible");
  $('.tooltipped').tooltip();
  $('.sidenav').sidenav();
  $('img').addClass('responsive-img');
});


function navigate_tag(tag) {
  window.location.href = tag;
}