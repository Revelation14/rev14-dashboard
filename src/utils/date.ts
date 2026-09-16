export function formatLastSeen(isoString: string | null): string {
  if (isoString === null) return 'Unknown time';
  try {
    const date = new Date(isoString);
    if (Number.isNaN(date.getTime())) return 'Invalid date';

    const time = date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
      timeZone: 'UTC',
    });
    const day = date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      timeZone: 'UTC',
    });
    return `${time} on ${day}`;
  } catch {
    return 'Unknown time';
  }
}
