export function parseDuration(isoDuration: string): number | null {
  if (!isoDuration) {
    console.error("Invalid ISO 8601 duration:", isoDuration);
    return null;
  }

  const regex: RegExp = /PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/;
  const match: RegExpMatchArray | null = isoDuration.match(regex);

  if (!match) {
    console.error("Invalid ISO 8601 duration format:", isoDuration);
    return null;
  }

  const hours = parseInt(match[1] || "0", 10);
  const minutes = parseInt(match[2] || "0", 10);
  const seconds = parseInt(match[3] || "0", 10);

  return hours * 60 + minutes + seconds / 60;
}
