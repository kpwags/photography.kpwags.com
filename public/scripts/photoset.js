function closeModal() {
	document.querySelector('dialog.photo-modal').close();
}

function openModal(img) {
	const imgSrc = img.getAttribute('src');
	const imgAlt = img.getAttribute('alt');

	document.querySelector('dialog.photo-modal img').setAttribute('src', imgSrc);
	document.querySelector('dialog.photo-modal img').setAttribute('alt', imgAlt);

	document.querySelector('dialog.photo-modal').showModal();
}

addEventListener('DOMContentLoaded', function () {
	const photoButtons = document.querySelectorAll('button.image');

	photoButtons.forEach((btn) => {
		btn.addEventListener('click', function (e) {
			openModal(e.target);
		});
	});

	document.querySelector('button.close-photo-modal')?.addEventListener('click', function () {
		closeModal();
	});
});