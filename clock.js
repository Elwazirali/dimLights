zone = 0;
isitlocal = true;
ampm = '';
var i = 3; 

function WorldClock() {
  now = new Date();
  secs = now.getSeconds();
  mins = now.getMinutes();
  hr = now.getHours()
  if (hr < 0) hr += 24;
  if (hr > 23) hr -= 24;
  ampm = (hr > 11) ? "PM" : "AM";
  statusampm = ampm.toLowerCase();

  hr2 = hr;
  if (hr2 === 0) hr2 = 12;
  (hr2 < 13) ? hr2: hr2 %= 12;
  if (hr2 < 10) hr2 =  + hr2

  var finaltime = hr2 + ':' + ((mins < 10) ? "0" + mins : mins) + ' ' + statusampm;

  if (document.all)
    worldclock.innerHTML = finaltime
  else if (document.getElementById)
    document.getElementById("worldclock").innerHTML = finaltime
  

  setTimeout('WorldClock()', 1000);
  
}

window.onload = WorldClock