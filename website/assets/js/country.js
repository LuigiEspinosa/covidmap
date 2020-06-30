export default class Countries {
    constructor({cases, deaths, recovered, active, arrayHistorial}) {
        this.cases = cases
        this.deaths = deaths
        this.recovered = recovered
        this.active = active

        this.$countryContainer = document.querySelector('#countrySelect')
        this.render()
    }

    renderCountryData() {
        return ` 
            <div class="stc-sort">
                <p class="sort-title">Search by country</p>
                <button class="sort-button">Sort By<i class="fas fa-sort"></i></button>
            </div>
        `
    }

    render() {
        this.$countryContainer.innerHTML = this.renderCountryData()
    }    
}