document.addEventListener('DOMContentLoaded', () => {
  console.log("Page fully loaded and scripts running!");

  // ---- Sticky Discount Button Smooth Scroll ----
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

  // ---- Countdown Timer ----
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

  // ---- FAQ ACCORDION ----
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const answer = question.nextElementSibling;
      if (answer) {
        answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';
      }
    });
  });

  // ---- Bottles Left Sparkle Effect ----
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
