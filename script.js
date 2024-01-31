// script.js

// Initialize noButtonClickCount to 0 if not found in sessionStorage
let noButtonClickCount = parseInt(sessionStorage.getItem('noButtonClickCount')) || 0;

// Display the count on the page
let clickCountElement = document.getElementById('clickCount');
clickCountElement.innerText = `No button clicked ${noButtonClickCount} times`;

function nextPage() {
    // Reset the counter to 0 when navigating to the next page
    sessionStorage.setItem('noButtonClickCount', 0);
    window.location.href = `yes.html?noButtonClickCount=${noButtonClickCount}`;
}

function noButtonClick() {
    // Increment the counter and update the display
    noButtonClickCount++;
    sessionStorage.setItem('noButtonClickCount', noButtonClickCount);
    clickCountElement.innerText = `No button clicked ${noButtonClickCount} times`;
    console.log("No button clicked");
}
