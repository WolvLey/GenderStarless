const regEx = /(?!\w_+)(_|\*)(innen|in|e)/gi

jQuery.extend(
    jQuery.expr[':'], {
        regex: function(a, i, m, r) {
            var r = regEx;
            return r.test(jQuery(a).text());
        }
    }
);

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	if (request.message === 'clicked_browser_action') {
		removeGenderStar()
	}
})

function removeGenderStar() {
	$(`p:regex("${regEx}")`).each((i, el)=>{
		console.log($(el).text((i, old)=>{
			return old.replace(regEx, '');
		}))

	});
}
