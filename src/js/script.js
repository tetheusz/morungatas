$(window).on("load", function () {
  $(".loader-wrapper").fadeOut("slow")
})


const newYear = new Date('october 12, 2023').getTime();
let days, hours, minutes, seconds
let regressCount = document.getElementById("regressCount")

setInterval(function () {
  let dateThisMoment = new Date().getTime()
  let secondsThisMoment = (newYear - dateThisMoment) / 1000;

  days = parseInt(secondsThisMoment / 86400)
  secondsThisMoment = secondsThisMoment % 86400

  hours = parseInt(secondsThisMoment / 3600)
  secondsThisMoment = secondsThisMoment % 3600

  minutes = parseInt(secondsThisMoment / 60)
  seconds = parseInt(secondsThisMoment % 60)

  document.getElementById('day').innerHTML = days
  document.getElementById('hour').innerHTML = hours
  document.getElementById('minute').innerHTML = minutes
  document.getElementById('second').innerHTML = seconds
}, 1000)
