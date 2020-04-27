$(document).ready(function () {
  let dayList = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  setInterval(() => {
    let myDate = new Date();
    let seconds = myDate.getSeconds();
    let minutes = myDate.getMinutes();
    let hours = myDate.getHours();

    $(".seconds").css({
      transform: "rotate(" + seconds * -6 + "deg)",
    });
    $(".minutes").css({
      transform: "rotate(" + minutes * -6 + "deg)",
    });

    $(".hours").css({
      transform: "rotate(" + (hours % 12) * -30 + "deg)",
    });

    /*to display month*/
    let month = myDate.toLocaleDateString("en-us", { month: "long" });
    let date = myDate.getDate();
    let day = myDate.getDay();
    $(".today").text(date + " " + month);
    $(".day").text(dayList[day]);
    hours >= 12
      ? $(".time").text((hours % 12) + ":" + minutes + " PM")
      : $(".time").text((hours % 12) + ":" + minutes + " AM");
  }, 1000);
});
