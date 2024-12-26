export function parseDuration(isDuration: string): number | null {
  if (!isDuration) {
    console.error("Invalid ISO 8601 duration:", isDuration);
    return null;
  }

  const regex: RegExp = /PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/;
  const match: RegExpMatchArray | null = isDuration.match(regex);

  if (!match) {
    console.error("Invalid ISO 8601 duration format:", isDuration);
    return null;
  }

  const hours = parseInt(match[1] || "0", 10);
  const minutes = parseInt(match[2] || "0", 10);
  const seconds = parseInt(match[3] || "0", 10);

  return hours * 60 + minutes + seconds / 60;
}


