function save_options() {
	let page = docuement.getElementById('page').value

    chrome.storage.sync.set({
		page,
	}),
		function() {
			let status = document.getElementById('status')
			status.textContent = 'Options saved.'
			setTimeout(() => (status.textContent = ''), 750)
		}
}

function restore_options() {

    chrome.storage.sync.get(
		{
			page: 'page',
		},
		function(items) {
            document.getElementById('page').value = items.page;
        },
    )
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
