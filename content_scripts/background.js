var REPO_REGEX = new RegExp("://github\\.com/[^/]+/.+");

// Called when the url of a tab changes
function checkForValidUrl(tabId, changeInfo, tab) {
  // If we are inside of a repo
  if (tab.url.match(REPO_REGEX)){
    // ... show the page action.
    chrome.pageAction.show(tabId);
  }
}

// Called when the page action is clicked
function onClick(tab){
  chrome.tabs.getSelected(null, function(tab) {
    chrome.tabs.sendMessage(tab.id, {action: 'toggleTerminal'});
  });
}

// Tell chrome to call this method when a new site is visited
chrome.tabs.onUpdated.addListener(checkForValidUrl);