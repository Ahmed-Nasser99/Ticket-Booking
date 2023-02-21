$("#openTap").click(() => {
  $(".page nav").toggleClass("widthNav");
  $(".page .home").toggleClass("widthHome");
});
$("#closeTap").click(() => {
  $(".page nav").removeClass("widthNav");
  $(".page .home").removeClass("widthHome");
});

$(".slider-sec h3").click(function () {
  $(this).next().slideToggle();
  $(".slider-sec div").not($(this).next()).slideUp();
});

let dateTarget = new Date("aug 8,2023").getTime();
let countDown = setInterval(() => {
  let nowDate = new Date().getTime();
  let difTime = dateTarget - nowDate;
  let days = Math.floor(difTime / (1000 * 60 * 60 * 24));
  let hours = Math.floor((difTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let munites = Math.floor((difTime % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((difTime % (1000 * 60)) / 1000);
  $("#days").html(`<h3>${days} d</h3>`);
  hours > 10
    ? $("#hours").html(`<h3>${hours} h</h3>`)
    : $("#hours").html(`<h3>0${hours} h</h3>`);
  munites > 10
    ? $("#mintes").html(`<h3>${munites} m</h3>`)
    : $("#mintes").html(`<h3>0${munites} m</h3>`);
  seconds > 10
    ? $("#seconds").html(`<h3>${seconds} s</h3>`)
    : $("#seconds").html(`<h3>0${seconds} s</h3>`);
  if (days == 0) {
    $(".Expired").show();
  }
}, 1000);
function textareaVal(val) {
  $("#charStay").html(100 - val.length);
  if (val.length >= 100) {
    $("#message").val(val.slice(0, 100));
    $("#charStay").html("your available character finished");
  }
}
