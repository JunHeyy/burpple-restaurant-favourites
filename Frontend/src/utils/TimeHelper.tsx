// Function to format the date as "X days ago," "X months ago," or "X years ago"
export const timeAgo = (date: Date): string => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30); // Approximate
    const years = Math.floor(days / 365); // Approximate

    if (years > 0) {
        return `${years}y${years > 1 ? 's' : ''}`;
    } else if (months > 0) {
        return `${months}m${months > 1 ? 's' : ''}`;
    } else if (days > 0) {
        return `${days}d${days > 1 ? 's' : ''}`;
    } else if (hours > 0) {
        return `${hours}h${hours > 1 ? 's' : ''}`;
    } else if (minutes > 0) {
        return `${minutes}min${minutes > 1 ? 's' : ''}`;
    } else {
        return `${seconds}secs${seconds > 1 ? 's' : ''}`;
    }
};