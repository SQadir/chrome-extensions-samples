chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  console.log(message);
  if (message.action === "greetings") {
    sendResponse({message: "Hello from Chrome Extension!"});
  }
  if (message.action === "login") {
    document.querySelector('[type="submit"]').click();
    sendResponse({message: "login clicked"});
  }
});
