export default class API {
    async getWorldTotalData() {
        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        
        const response = await fetch("https://corona.lmao.ninja/v2/all", requestOptions)
        const data = await response.json()
        return data
    }

    async getCountries() {
        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        const response = await fetch("https://corona.lmao.ninja/v2/countries", requestOptions)
        const country = await response.json()
        return country
    }
}