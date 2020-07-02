const chk = document.getElementById('chk');
chk.addEventListener('change', () => {
	document.body.classList.toggle('light');
});

const chk_desktop = document.getElementById('chk_desktop');
chk_desktop.addEventListener('change', () => {
	document.body.classList.toggle('light');
});

function openAdviceMenu() { document.querySelector('.advice-content').classList.toggle('show') }
document.querySelector('.advice-button .sort-button').addEventListener("click", openAdviceMenu);

function changeLang() { document.querySelector('.lang').classList.toggle('show') }
document.querySelector('.lang').addEventListener("click", changeLang)

function openUsMenu() { document.querySelector('.us-dropdown').classList.toggle('show') }
document.querySelector('.drop-us').addEventListener("click", openUsMenu);

function openJpMenu() { document.querySelector('.jp-dropdown').classList.toggle('show') }
document.querySelector('.drop-japan').addEventListener("click", openJpMenu);

function openCountryMenu() { document.querySelector('.country-dropdown').classList.toggle('show') }
document.querySelector('.drop-country').addEventListener("click", openCountryMenu);