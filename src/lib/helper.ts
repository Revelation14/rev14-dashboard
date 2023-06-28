export function getFromLocalStorage(key: string): string | null {
  if (typeof window !== 'undefined') {
    return JSON.parse(window.localStorage.getItem(key) || 'null');
  }
  return null;
}

export function setToLocalStorage(key: string, value: any): void {
  window.localStorage.setItem(key, JSON.stringify(value));
}
