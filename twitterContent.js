const regEx = /(?!\w_+)(_|\*)(innen|in|e)/gi

function nodeInsertedCallback($event) {
	let html = $(event.srcElement).has('article')

	if (html.text().length !== 0) {
		html
			.find('div[lang]')
			.children()
			.each((i, element) => {
				let el = $(element)
				if (!el.is('span') || el.find('a').length > 0) return

				el.text((i, old) => {
					old.match(regEx)
					return old.replace(regEx, '')
				})
			})
	}
}

document.addEventListener('DOMNodeInserted', nodeInsertedCallback)
