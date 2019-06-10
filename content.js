const regEx = /(?!\w_+)(_|\*)(innen|in|e)/gi

jQuery.extend(jQuery.expr[':'], {
	regex: function(a, i, m, r) {
		return regEx.test(jQuery(a).text())
	},
})

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	switch (request.message) {
		case 'clicked_browser_action':
			removeGenderStar()
			sendResponse()
			break
		case 'update_browser_action':
			sendResponse({ len: countOccurrence() })
			break
		default:
			break
	}
})

function countOccurrence() {
	return $(`p:regex("${regEx}")`).length
}

function removeGenderStar() {
	$(`p:regex("${regEx}")`).each((i, el) => {
		let target = $(el).text((i, old) => {
			return old.replace(regEx, '')
		})

		console.log(target)
	})
}
