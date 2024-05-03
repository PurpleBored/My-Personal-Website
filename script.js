// Time Widget.
function updateTime() {
    const now = new Date();
    const options = {
        timeZone: 'Europe/Warsaw',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false
    };
    const timeString = now.toLocaleTimeString('en-US', options);
    document.getElementById('time').textContent = timeString;
}

updateTime();
setInterval(updateTime, 1000);
