document.addEventListener('DOMContentLoaded', function () {
  const container = document.querySelector(".info-box");
  const toggle = document.querySelector(".about-me-toggle");
  const details = document.querySelector('.info-box .details');
  const socialMediaLinks = document.querySelectorAll(".social-media div");

  // Toggle info box details visibility
  toggle.addEventListener("click", () => {
      container.classList.toggle("active");
      details.classList.toggle('active');
      if (details.classList.contains('active')) {
          toggle.innerHTML = 'About me <i class="fas fa-chevron-up"></i>';
      } else {
          toggle.innerHTML = 'About me <i class="fas fa-chevron-down"></i>';
      }
  });

  // Vibration function
  function vibrate() {
      navigator.vibrate(6);
  }

  // Assign vibrate function to the toggle button
  toggle.addEventListener("click", vibrate);

  // Scroll reveal effect for social media links
  ScrollReveal().reveal(socialMediaLinks, {
      duration: 1000,
      opacity: 0,
      distance: "30%",
      origin: "bottom",
      scale: 0.9,
  });

  // On load name effect
  setTimeout(() => document.querySelector('.name').classList.add('loaded'), 500);
});
