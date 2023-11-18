export function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

export function getCSRFToken() {
    return getCookie('csrftoken')
}

export function parseTimeToSeconds(timeStr) {
    let totalSeconds = 0;
    let timeParts = timeStr.match(/(\d+)([hms])/g);

    timeParts.forEach((part) => {
        let num = parseInt(part.slice(0, -1));
        let unit = part.slice(-1);
        if (unit === 'h') {
            totalSeconds += num * 60 * 60;
        } else if (unit === 'm') {
            totalSeconds += num * 60;
        } else if (unit === 's') {
            totalSeconds += num;
        }
    });
    return totalSeconds;
}

export function convertSecondsToTime(totalSeconds) {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    let timeStr = '';
    if (hours > 0) timeStr += `${hours}h `;
    if (minutes > 0) timeStr += `${minutes}m `;
    if (seconds > 0) timeStr += `${seconds}s`;
    return timeStr.trim();
}
