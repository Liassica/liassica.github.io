$(document).ready(function () {
  $("#safety-popup").after(function () {
    return $(this).clone().removeAttr("id").attr("id", "safety-bottom");
  });

  $("#safety-bottom").append($("#safety-info").html());

  $("#safety-popup h2")
    .append('<i class="bi bi-chevron-up"></i>')
    .wrapInner('<a href="#safety-bottom"></a>');
});

$(document).on("click", 'a[href^="#"]', function (event) {
  event.preventDefault();

  $("html, body").animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top,
    },
    500,
  );
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
