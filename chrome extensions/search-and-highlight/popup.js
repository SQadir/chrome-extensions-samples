function runSearch(searchTerm) {
    console.log('searchTerm: ', searchTerm)
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        const tabId = tabs[0].id;
        const payload = { action: "findAndHighlight", searchTerm: searchTerm };
        chrome.tabs.sendMessage(tabId, payload, function(response) {
            console.log("Found: ", response);
        });
    });
}


document.addEventListener('DOMContentLoaded', function() {

    const searchField = document.getElementById('searchField');
    const searchButton = document.getElementById('searchButton');
    const checkbox = document.getElementById('chk');

    searchButton.addEventListener('click', function() {
        const searchTerm = searchField.value;
        runSearch(searchTerm)
    });
    searchField.addEventListener('keyup', function() {
        const searchTerm = searchField.value;
        if (checkbox.checked) {
            runSearch(searchTerm);
        }
    });

});
