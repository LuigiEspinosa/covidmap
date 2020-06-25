export default class Statistic {
    constructor({TotalConfirmed, TotalDeaths, TotalRecovered}) {
        this.TotalConfirmed = TotalConfirmed
        this.TotalDeaths = TotalDeaths
        this.TotalRecovered = TotalRecovered
        this.TotalActive = TotalConfirmed - TotalRecovered

        // this.RateConfirmed = (TotalConfirmed / TotalDeaths).toFixed(2)
        this.RateDeaths = (TotalConfirmed / TotalDeaths).toFixed(2)
        // this.RateRecovered = (TotalConfirmed / TotalDeaths).toFixed(2)
        // this.RateActive = TotalConfirmed - (TotalRecovered / TotalDeaths).toFixed(2)

        this.$statisticContainer = document.querySelector('#statistic')
        this.render()
    }

    renderExtraData() {
        return ` 
            <div class="stc-card stc-infect">
                <p class="stc-card-num">${this.TotalConfirmed}</p>
                <p class="stc-card-title">Infections</p>
                <p class="stc-card-rate">Mild cases</p>
                <p class="stc-card-percent"><i class="fas fa-angle-double-up"></i>95.5%</p>
            </div>
            <div class="stc-card stc-death">
                <p class="stc-card-num">${this.TotalDeaths}7</p>
                <p class="stc-card-title">Deaths</p>
                <p class="stc-card-rate">Death rate</p>
                <p class="stc-card-percent"><i class="fas fa-angle-double-up"></i>${this.RateDeaths}%</p>
            </div>
            <div class="stc-card stc-recover">
                <p class="stc-card-num">${this.TotalRecovered}</p>
                <p class="stc-card-title">Recoveries</p>
                <p class="stc-card-rate">Recovery Rate</p>
                <p class="stc-card-percent"><i class="fas fa-angle-double-up"></i>95.5%</p>
            </div>
            <div class="stc-card stc-critical">
                <p class="stc-card-num">${this.TotalActive}</p>
                <p class="stc-card-title">Active</p>
                <p class="stc-card-rate">Active cases</p>
                <p class="stc-card-percent"><i class="fas fa-angle-double-up"></i>95.5%</p>
            </div>
        `
    }

    render() {
        this.$statisticContainer.innerHTML = this.renderExtraData()
    }    
}