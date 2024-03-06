//////////////////////////////////////////////////////טיימר
const raffleDate = new Date("2023-08-23T00:00:00").getTime();

// Update the countdown every second
const timer = setInterval(updateCountdown, 1000);

function updateCountdown() {
  const now = new Date().getTime();
  const distance = raffleDate - now;

  // Check if the countdown has ended
  if (distance <= 0) {
    clearInterval(timer);
    document.getElementById("timer").innerHTML = "RAFFLE ENDED";
    return;
  }

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the countdown timer
  document.getElementById("timer").innerHTML = `
    <p>  ${days}d     ${hours}h ${minutes}m  ${seconds}s </p>`;

    
// const 
//   btnPro.onclick= ()=>{
//    const profile = document.getElementById("profile");
//   profile.innerHTML+=" " + usert.firstName1 +" "+usert.lastName1;
//   }

}

