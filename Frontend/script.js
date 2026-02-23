let slides = document.querySelectorAll(".slide");
let dots = document.querySelectorAll(".dot");
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
    dots[i].classList.toggle("active", i === index);
  });
  currentSlide = index;
}

function nextSlide() {
  let next = (currentSlide + 1) % slides.length;
  showSlide(next);
}

function goToSlide(index) {
  showSlide(index);
}

// Auto slide every 5 seconds
setInterval(nextSlide, 5000);

const contactForm = document.getElementById("contactForm");
const statusText = document.getElementById("contactStatus");

if (contactForm) {
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = contactForm.querySelector("input[name='name']").value;
    const email = contactForm.querySelector("input[name='email']").value;
    const message = contactForm.querySelector("textarea[name='message']").value;

    statusText.textContent = "Sending message...";

    try {
      const res = await fetch("https://api.expo-gpindustries.com/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (data.success) {
        statusText.textContent = "✅ Message sent successfully!";
        contactForm.reset();
      } else {
        statusText.textContent = "❌ Failed to send message.";
      }
    } catch (err) {
      console.error("Frontend error:", err);
      statusText.textContent = "❌ Error sending message.";
    }
  });
}

// Product sliders: auto-slide only (no conflict with hero slider)
document.querySelectorAll(".product-slider").forEach((slider) => {
  const slides = slider.querySelectorAll(".product-slide");
  let current = 0;

  function showSlide(index) {
    slides.forEach((s, i) => s.classList.toggle("active", i === index));
  }

  setInterval(() => {
    current = (current + 1) % slides.length;
    showSlide(current);
  }, 3500); // change every 3.5 seconds
});


