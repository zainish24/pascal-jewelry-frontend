//////////// Loader JavaScript ////////////
window.addEventListener('load', function () {
  const loader = document.getElementById('loader');
  loader.style.opacity = '0';

  setTimeout(() => {
    loader.style.display = 'none';
  }, 1000);
});





//////////// Rating JavaScript in Feedback Form ////////////
$(document).ready(function () {
  $(".rating i").on("click", function () {
    let index = $(this).data("index");
    $(".rating i").removeClass("active");
    for (let i = 1; i <= index; i++) {
      $(`.rating i[data-index="${i}"]`).addClass("active");
    }
  });


  document.querySelector(".feedback-card form").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = this.querySelector('input[type="text"]').value.trim();
    const email = this.querySelector('input[type="email"]').value.trim();
    const feedback = this.querySelector('textarea').value.trim();


    const stars = document.querySelectorAll(".rating i.active");
    const rating = stars.length;

    alert(
      `✅ Thank you for your feedback!\n\n` +
      `👤 Name: ${name}\n` +
      `📧 Email: ${email}\n` +
      `🌟 Rating: ${rating} Star${rating > 1 ? 's' : ''}\n` +
      `📝 Feedback: ${feedback}`
    );

    this.reset();
    document.querySelectorAll(".rating i").forEach(star => star.classList.remove("active"));
  });
});





//////////// Contact Form ////////////
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  const successMessage = document.getElementById('formSuccess');

  form.addEventListener('submit', function (e) {
    e.preventDefault();


    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();


    if (!name || !email || !subject || !message) {
      alert('Please fill in all fields.');
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    successMessage.classList.remove('d-none');
    form.reset();

    setTimeout(() => {
      successMessage.classList.add('d-none');
    }, 5000);
  });
});
