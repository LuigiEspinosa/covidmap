// import API from './api.js'
// import Statistic from './statistic.js'
// import Countries from './country.js'

// const api = new API()

const chk = document.getElementById('chk');
chk.addEventListener('change', () => {
	document.body.classList.toggle('light');
});

const chk_desktop = document.getElementById('chk_desktop');
chk_desktop.addEventListener('change', () => {
	document.body.classList.toggle('light');
});

const usSort = document.querySelector('.drop-us').addEventListener("click", openUsMenu);
const jpSort = document.querySelector('.drop-japan').addEventListener("click", openJpMenu);
const countrySort = document.querySelector('.drop-country').addEventListener("click", openCountryMenu);

function openUsMenu() { document.querySelector('.us-dropdown').classList.toggle('show') }
function openJpMenu() { document.querySelector('.jp-dropdown').classList.toggle('show') }
function openCountryMenu() { document.querySelector('.country-dropdown').classList.toggle('show') }

const handleClick = (e) => {
    e.preventDefault();
    const active = document.querySelector('.country-dropdown .slots');
    if(active){
      active.classList.remove('active');
    }
    e.currentTarget.classList.add('active');
  }

document.querySelector('.country-dropdown .slots').addEventListener("click", handleClick);


// async function renderWorldTotalData() {
//     const data = await api.getWorldTotalData()
//     console.log(data)
//     new Statistic(data)
// }

// async function renderCountryData() {
//     const country = await api.getCountries()
//     console.log(country)
//     new Countries(country)
// }

// renderWorldTotalData()
// renderCountryData()
