chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
		var activeTab = tabs[0]
		chrome.tabs.sendMessage(
			tabId,
			{
				message: 'clicked_browser_action',
			},
			function(response) {
				chrome.browserAction.setBadgeText({ text: '0' })
			},
		)
	})
})

// chrome.tabs.onActivated.addListener(function(activeInfo) {
//   console.log(activeInfo.tabId);
// });

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
	chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
		var activeTab = tabs[0]
		chrome.tabs.sendMessage(
			tabId,
			{ message: 'update_browser_action' },
			function(response) {
				if (!response) return
				if (!response.hasOwnProperty('len')) return

				let len = response.len ? response.len : 0
				chrome.browserAction.setBadgeText({ text: len.toString() })
			},
		)
	})
})
