export default class API {
    async getWorldTotalData() {
        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        
        const response = await fetch("https://api.covid19api.com/world/total", requestOptions)
        const data = await response.json()
        return data
    }
}