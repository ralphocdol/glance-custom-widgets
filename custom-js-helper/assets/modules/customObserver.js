/**
 * Custom Observer
 */
let observer, disconnectTimeout;

export default (callback) => {
  if (observer) observer.disconnect(); // Ensure no duplicate observers
  if (typeof callback !== 'function') return;
  observer = new MutationObserver(callback);
  observer.observe(document.body, { childList: true, subtree: true });
  resetDisconnectTimer();
}

export const resetDisconnectTimer = () => {
  clearTimeout(disconnectTimeout);
  disconnectTimeout = setTimeout(() => {
      observer.disconnect();
      console.log("Observer disconnected due to inactivity.");
  }, 10000); // 10 seconds duration, increase if needed
};