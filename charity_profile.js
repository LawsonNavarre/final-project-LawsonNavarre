// charity_profile.js

document.addEventListener('DOMContentLoaded', () => {
  const volunteerBtn = document.getElementById('volunteerBtn');
  const form = document.getElementById('volunteerForm');

  // show form on button click
  volunteerBtn.addEventListener('click', () => {
    form.style.display = 'block';
    volunteerBtn.style.display = 'none';
  });

  // create extra message
  const message = document.createElement('div');
  message.textContent = "We appreciate your support!";
  message.style.display = 'none';
  message.style.marginTop = '1rem';
  message.style.padding = '1rem';
  message.style.background = '#e0f7fa';
  message.style.borderRadius = '5px';

  document.querySelector('main').appendChild(message);

  // show/hide message when hovering form
  form.addEventListener('mouseenter', () => {
    message.style.display = 'block';
  });

  form.addEventListener('mouseleave', () => {
    message.style.display = 'none';
  });
});

