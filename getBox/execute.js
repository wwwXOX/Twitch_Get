let refreshIntervalId = null
let x = null
function getJewelry() {
  refreshIntervalId = setInterval(() => {
   x = document.getElementsByClassName("tw-button tw-button--success tw-interactive")
   if(x[0]) { x[0].click() }
  }, 60000);
}

const enable = () => {
  getJewelry()
}
const disable = () => {
  clearInterval(refreshIntervalId)
}

const onMessage = (message) => {
  switch (message.action) {
    case 'enable':
      enable();
      break;
    case 'disable':
      disable();
      break;
    default:
      break;
  }
}

chrome.runtime.onMessage.addListener(onMessage);