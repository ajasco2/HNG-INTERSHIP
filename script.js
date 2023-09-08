document.addEventListener("DOMContentLoaded", function() {
    // Get elements by data-testid
    const slackUserName = document.querySelector('[data-testid="slackUserName"]');
    const slackDisplayImage = document.querySelector('[data-testid="slackDisplayImage"]');
    const currentDayOfTheWeek = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    const currentUTCTime = document.querySelector('[data-testid="currentUTCTime"]');
    const myTrack = document.querySelector('[data-testid="myTrack"]');
    const githubURL = document.querySelector('[data-testid="githubURL"]');

    // Function to update the current day of the week
    function updateDayOfTheWeek() {
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const currentDate = new Date();
        const dayIndex = currentDate.getUTCDay();
        currentDayOfTheWeek.textContent = daysOfWeek[dayIndex];
    }

    // Function to update the current UTC time in milliseconds
    function updateUTCTime() {
        const currentUTCTimeValue = Date.now();
        currentUTCTime.textContent = `Current UTC Time: ${currentUTCTimeValue} milliseconds`;
    }

    // Initial function calls
    updateDayOfTheWeek();
    updateUTCTime();

    // Update the current day of the week every 1 minute
    setInterval(updateDayOfTheWeek, 60000);

    // Update the current UTC time every 1 second
    setInterval(updateUTCTime, 1000);
});
