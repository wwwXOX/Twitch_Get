var getSelectedTab = (tab) => {
  var tabId = tab.id;
  var sendMessage = (messageObj) => chrome.tabs.sendMessage(tabId, messageObj);
  document.getElementById('enable').addEventListener('click', () => sendMessage({ action: 'enable' }));
  document.getElementById('disable').addEventListener('click', () => sendMessage({ action: 'disable' }))
}
chrome.tabs.getSelected(null, getSelectedTab);