export function convertIsoDate(isoDate) {
    const date = new Date(isoDate);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' });
}
