document.addEventListener('DOMContentLoaded', function() {

  document.body.style.backgroundColor = "lightBlue";
  document.body.style.width = '160px';

  const showMessageButton = document.getElementById('showMessage');
  showMessageButton.addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {action: "greetings"}, function(response) {
        alert(response?.message)
        console.log("Page responded: ", response);
      });
    });
  });

  const loginButton = document.getElementById('login');
  loginButton.addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {action: "login"}, function(response) {
        console.log("Login action: ", response);
      });
    });
  });

});
