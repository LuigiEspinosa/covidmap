import API from './api.js'
import Statistic from './statistic.js'
import Countries from './country.js'

const api = new API()

async function renderWorldTotalData() {
    const data = await api.getWorldTotalData()
    console.log(data)
    new Statistic(data)
}

async function renderCountryData() {
    const country = await api.getCountries()
    console.log(country)
    new Countries(country)
}

renderWorldTotalData()
renderCountryData()
