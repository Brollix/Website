function theTime(){
    const horarioActual = new Date();

    let h = horarioActual.getHours();
    let m = horarioActual.getMinutes();
    let s = horarioActual.getSeconds();
    
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);

    if (h>12) {
        h-=12;
        document.getElementById('horarioActual').innerHTML = 
            h + ":" + m + ":" + s + " PM";
    }else document.getElementById('horarioActual').innerHTML = 
                h + ":" + m + ":" + s + " AM";

    setTimeout(theTime, 1000);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}
theTime();
checkTime();