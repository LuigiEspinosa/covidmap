import API from './api.js'
import Statistic from './statistic.js'

const api = new API()

async function renderWorldTotalData() {
    const data = await api.getWorldTotalData()
    console.log(data)
    new Statistic(data)
}

renderWorldTotalData()
