export function initTelegram() {
  if (typeof window !== 'undefined') {
    // @ts-ignore
    window.Telegram?.WebApp?.ready();
  }
}
