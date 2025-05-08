// script.js
document.addEventListener('DOMContentLoaded', () => {
  // Get package from URL
  const urlParams = new URLSearchParams(window.location.search);
  const selectedPackage = urlParams.get('package');
  const packageMap = {
    '1': 'You selected: 1 Bottle - 30-Day Supply',
    '3': 'You selected: 3 Bottles - 90-Day Supply (Most Popular)',
    '6': 'You selected: 6 Bottles - 180-Day Supply'
  };

  // Show package message
  const selectedDiv = document.getElementById('selected-package');
  if (selectedDiv && selectedPackage && packageMap[selectedPackage]) {
    selectedDiv.innerHTML = `<p>${packageMap[selectedPackage]}</p>`;
  }

  // Set hidden input value in form
  const packageInput = document.getElementById('package');
  if (packageInput && selectedPackage) {
    packageInput.value = selectedPackage;
  }

  // Form validation
  const form = document.getElementById('orderForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      const inputs = form.querySelectorAll('input[required]');
      let valid = true;

      inputs.forEach(input => {
        if (!input.value.trim()) {
          input.style.borderColor = 'red';
          valid = false;
        } else {
          input.style.borderColor = '#ccc';
        }
      });

      if (!valid) {
        e.preventDefault();
        alert('Please fill in all required fields.');
      } else {
        alert('Thank you! Your order has been placed.');
        // e.preventDefault(); // REMOVE this when connecting to backend
      }
    });
  }
});



  // Function to set the selected package and show it on the page
  function selectPackage(packageName) {
    // Set hidden inputs for both forms
    document.getElementById('packageTop').value = packageName;
    document.getElementById('packageBottom').value = packageName;

    // Optionally, display the selected package info on the page
    const selectedDiv = document.getElementById('selected-package');
    if (selectedDiv) {
      let packageText = '';
      switch (packageName) {
        case '1':
          packageText = 'You selected: 1 Bottle - 30-Day Supply';
          break;
        case '3':
          packageText = 'You selected: 3 Bottles - 90-Day Supply (Most Popular)';
          break;
        case '6':
          packageText = 'You selected: 6 Bottles - 180-Day Supply';
          break;
        default:
          packageText = 'No package selected';
      }

      selectedDiv.innerHTML = `
        <div class="package-summary">
          <h3>${packageText}</h3>
        </div>
      `;
      selectedDiv.classList.add('highlight-package');
    }
  }

  // Sticky Discount Button Smooth Scroll
  const discountBtn = document.getElementById('discount-btn');
  if (discountBtn) {
    discountBtn.addEventListener('click', function (e) {
      e.preventDefault();
      const formSection = document.getElementById('order-form');
      if (formSection) {
        formSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // Countdown Timer
  const timerElement = document.getElementById('timer');
  if (timerElement) {
    let countdownMinutes = 10;
    let countdownSeconds = 0;

    const countdownInterval = setInterval(() => {
      if (countdownSeconds === 0) {
        if (countdownMinutes === 0) {
          clearInterval(countdownInterval);
          timerElement.textContent = "Expired!";
        } else {
          countdownMinutes--;
          countdownSeconds = 59;
        }
      } else {
        countdownSeconds--;
      }

      const minutesDisplay = countdownMinutes < 10 ? "0" + countdownMinutes : countdownMinutes;
      const secondsDisplay = countdownSeconds < 10 ? "0" + countdownSeconds : countdownSeconds;
      timerElement.textContent = `${minutesDisplay}:${secondsDisplay}`;
    }, 1000);
  }

  // Fake Comment Submit - Just for realism
  const sendBtn = document.getElementById('send-comment');
  const input = document.getElementById('comment-input');
  const toast = document.getElementById('comment-toast');

  if (sendBtn && input && toast) {
    sendBtn.addEventListener('click', () => {
      if (input.value.trim() !== '') {
        toast.style.display = 'block';
        input.value = '';
        setTimeout(() => {
          toast.style.display = 'none';
        }, 3000);
      }
    });
  }

  // FAQ Accordion
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const answer = question.nextElementSibling;
      if (answer) {
        answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';
      }
    });
  });

  // Bottles Left Sparkle Effect
  const bottlesLeft = document.getElementById('bottles-left');
  if (bottlesLeft) {
    setInterval(() => {
      bottlesLeft.style.transform = 'scale(1.1)';
      setTimeout(() => {
        bottlesLeft.style.transform = 'scale(1)';
      }, 300);
    }, 5000);
  }
});
