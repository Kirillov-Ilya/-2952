document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('dataForm');
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      alert('Data saved');
    });
  });