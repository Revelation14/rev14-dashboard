export function getFromLocalStorage(key: string): string | null {
  if (typeof window !== 'undefined') {
    return window.localStorage.getItem(key) === undefined
      ? null
      : JSON.parse(window.localStorage.getItem(key) as string);
  }
  return null;
}

export function setToLocalStorage(key: string, value: any): void {
  window.localStorage.setItem(key, JSON.stringify(value));
}
