$(document).ready(function () {
  $("div.safety-popup").after(function () {
    return $(this).clone().toggleClass("safety-popup safety-bottom");
  });
});

$(document).scroll(function () {
  if (
    $(this).scrollTop() + $(window).height() >
    $(".safety-bottom").offset().top
  ) {
    $(".safety-popup").addClass("close");
  } else {
    $(".safety-popup").removeClass("close");
  }
});
