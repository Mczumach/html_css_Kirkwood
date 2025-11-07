
function updateRelativeTime() {
    const createDate = new Date('2025-09-22T00:00:00');
    const now = new Date();
    const diff = now - createDate;

    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const years = Math.floor(days / 365);

    let timeString = "";
    if (years > 0) {
        timeString = `${years} year${years > 1 ? 's' : ''} ago`;
    } else if (days > 0) {
        timeString = `${days} day${days > 1 ? 's' : ''} ago`;
    } else if (hours > 0) {
        timeString = `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else if (minutes > 0) {
        timeString = `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } else {
        timeString = `${seconds} second${seconds > 1 ? 's' : ''} ago`;
    }

    document.getElementById('timer').textContent = "This Website Was Created " + timeString;
}

setInterval(updateRelativeTime, 1000);
updateRelativeTime();
