$(document).ready(function () {
  $("#safety-popup").after(function () {
    return $(this).clone().removeAttr("id").attr("id", "safety-bottom");
  });
});

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
