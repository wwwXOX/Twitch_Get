let refreshIntervalId = null
let x = null
function getJewelry() {
  refreshIntervalId = setInterval(() => {
   x = document.getElementsByClassName("tw-button tw-button--success tw-interactive")
   if(x[0]) { x[0].click() }
  }, 60000);
}
/*
const enable = () => {
  getJewelry()
}*/


chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript({
    code: 'getJewelry();'
  });
});