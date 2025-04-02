$(document).scroll(function () {
  if (
    $(this).scrollTop() + $(window).height() >
    $("#safety-bottom").offset().top
  ) {
    $("#safety-popup").addClass("close");
  } else {
    $("#safety-popup").removeClass("close");
  }
});
