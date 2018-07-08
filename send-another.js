(function () {
  document.getElementById('send-another').addEventListener('click', () => {
    document.getElementById('thankyou_message').style.display = 'none';
    document.getElementById('gform').style.display = 'block';
  });
})();