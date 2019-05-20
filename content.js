const regEx = /(?!\w_+)(_|\*)(innen|in|e)/gi

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	if (request.message === 'clicked_browser_action') {
		removeGenderStar()
	}
})

function removeGenderStar() {
    console.log($('p'))
}
