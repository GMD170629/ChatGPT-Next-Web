export function isWeixin() {
  let matchs = window.navigator.userAgent.match(/MicroMessenger/i);
  if (matchs != null) {
    return matchs.includes("MicroMessenger");
  }

  return false;
}
