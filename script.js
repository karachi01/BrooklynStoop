  // Set the start time (in milliseconds)
  const startTime = new Date("2024-07-11T22:33:00").getTime();

  // Set the deadline time (in milliseconds)
  const deadline = new Date("2024-08-14T15:00:00").getTime();

  // Get the countdown element
  const countdownElement = document.getElementById("countdown");

  // Initialize the remaining time
  let remainingTime = deadline - startTime;

  // Update the countdown every second
  setInterval(updateCountdown, 1000);

  function updateCountdown() {
    // Get the current time
    const currentTime = new Date().getTime();

    // Calculate the remaining time
    remainingTime = deadline - currentTime;

    // If the remaining time is less than or equal to 0, stop the countdown
    if (remainingTime <= 0) {
      clearInterval(this);
      countdownElement.innerHTML = "Countdown finished!";
      return;
    }

    // Calculate the days, hours, minutes, and seconds
    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    // Update the countdown display
    document.getElementById("days").innerHTML = pad(days);
    document.getElementById("hours").innerHTML = pad(hours);
    document.getElementById("minutes").innerHTML = pad(minutes);
    document.getElementById("seconds").innerHTML = pad(seconds);
  }

  // Pad a number with leading zeros
  function pad(number) {
    return (number < 10 ? "0" : "") + number;
  }

document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('nav a');

  for (const link of links) {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      window.scrollTo({
        top: targetElement.offsetTop - document.querySelector('nav').offsetHeight,
        behavior: 'smooth'
      });
    });
  }
});

