document.addEventListener('DOMContentLoaded', function () {
    // Retrieve the count from the query parameter in the URL
    const urlParams = new URLSearchParams(window.location.search);
    const noButtonClickCount = parseInt(urlParams.get('noButtonClickCount')) || 0;

    // Display the count on the page
    let clickCountElement = document.getElementById('clickCount');
    clickCountElement.innerText = `No button clicked ${noButtonClickCount} times`;
});
