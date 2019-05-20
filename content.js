let regx = /[\.]/g
let i = 0
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
					return old.replace(regx, '!!!')
				})
			})
	}
}

document.addEventListener('DOMNodeInserted', nodeInsertedCallback)
