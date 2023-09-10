document.addEventListener("DOMContentLoaded", function() {

    const slackUserName = document.querySelector('[data-testid="slackUserName"]');
    const slackDisplayImage = document.querySelector('[data-testid="slackDisplayImage"]');
    const currentDayOfTheWeek = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    const currentUTCTime = document.querySelector('[data-testid="currentUTCTime"]');
    const myTrack = document.querySelector('[data-testid="myTrack"]');
    const githubURL = document.querySelector('[data-testid="githubURL"]');

    function updateDayOfTheWeek() {
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const currentDate = new Date();
        const dayIndex = currentDate.getUTCDay();
        currentDayOfTheWeek.textContent =`Day: ${daysOfWeek[dayIndex]}`;
    }
    function updateUTCTime() {
        const currentUTCTimeValue = Date.now();
        currentUTCTime.textContent = `Current UTC Time: ${currentUTCTimeValue} milliseconds`;
    }
    updateDayOfTheWeek();
    updateUTCTime();
    setInterval(updateDayOfTheWeek, 60000);

    setInterval(updateUTCTime, 1000);
});
