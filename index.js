const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

function clockUpdate() {
  let clockEl = new Date();
  let hourHand = clockEl.getHours();
  let secondHand = clockEl.getSeconds();
  let minuteHand = clockEl.getMinutes();
  let ampm = "AM";


if(hourHand >= 12){
  hourHand = hourHand - 12;
  ampm = "PM";
}

// hourHand = hourHand < 10 ? "0" + hourHand : hourHand
// secondHand = secondHand < 10 ? "0" + secondHand : secondHand
// minuteHand = minuteHand < 10 ? "0" + minuteHand : minuteHand

if(hourHand < 10){
  "0" + hourHand
}else{
  hourHand
};
if(secondHand < 10){
  "0" + secondHand
}else{
  secondHand
};
if(minuteHand < 10){
  "0" + minuteHand
}else{
  minuteHand
};


  hourEl.innerText = hourHand;
  minuteEl.innerText = minuteHand;
  secondEl.innerText = secondHand;
  ampmEl.innerText = ampm;



  function check(){
    return clockUpdate() 
   }
   setTimeout(check , 1000)

}
clockUpdate();g

 

// function updateClock() {
//   let h = new Date().getHours();
//   let m = new Date().getMinutes();
//   let s = new Date().getSeconds();
//   let ampm = "AM";

//   if (h > 12) {
//     h = h - 12;
//     ampm = "PM";
//   }

//   h = h < 10 ? "0" + h : h;
//   m = m < 10 ? "0" + m : m;
//   s = s < 10 ? "0" + s : s;

//   hourEl.innerText = h;
//   minuteEl.innerText = m;
//   secondEl.innerText = s;
//   ampmEl.innerText = ampm;
//   setTimeout(() => {
//     updateClock();
//   }, 1000);
// }
// updateClock()

 
