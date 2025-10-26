document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded");

  const form = document.getElementById('loginForm');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const remember = document.getElementById('remember');
  const toggleBtn = document.getElementById('togglePw');

  toggleBtn?.addEventListener('click', () => {
    const isHidden = passwordInput.type === 'password';
    passwordInput.type = isHidden ? 'text' : 'password';
    toggleBtn.textContent = isHidden ? 'Hide' : 'Show';
    toggleBtn.setAttribute('aria-label', isHidden ? 'Hide password' : 'Show password');
    passwordInput.focus();
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!form.checkValidity()) {
      e.stopPropagation();
    } else {
      const email = emailInput.value.trim();
      const rememberChecked = remember.checked;
      alert(`Logged in as: ${email}\nRemember me: ${rememberChecked ? 'Yes' : 'No'}`);
    }
    form.classList.add('was-validated');
  });

  [emailInput, passwordInput].forEach(el => {
    el.addEventListener('keydown', (ev) => {
      if (ev.key === 'Enter') {
        form.requestSubmit();
      }
    });
  });
});