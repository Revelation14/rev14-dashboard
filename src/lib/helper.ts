export function getFromLocalStorage(key: string): any {
  if (typeof window !== 'undefined') {
    return window.localStorage.getItem(key) === undefined
      ? null
      : window.localStorage.getItem(key);
  }
  return null;
}

export function setToLocalStorage(key: string, value: any): void {
  window.localStorage.setItem(key, JSON.stringify(value));
}
export function toTitleCase(str: string) {
  return str.toLowerCase().replace(/(?:^|\s)\w/g, (match: string) => {
    return match.toUpperCase();
  });
}
