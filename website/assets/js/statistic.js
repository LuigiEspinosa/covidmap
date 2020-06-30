export default class Statistic {
    constructor({cases, deaths, recovered, active}) {
        this.cases = cases
        this.deaths = deaths
        this.recovered = recovered
        this.active = active

        this.$statisticContainer = document.querySelector('#statistic')
        this.render()
    }

    thousandsCurrencyFormat(num) {
        if (num > 1000) {
            return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        } else {
            return num;
        }
    }

    // getPercentageChange(oldNumber, newNumber) {
    //     const decreaseValue = newNumber - oldNumber;
    //     const percentage = Math.round(decreaseValue / oldNumber * 100);
    //     const output = "";
        
    //     if (percentage > 0) {
    //         output = percentage;
    //     } else {
    //         if (percentage < 0) {
    //             output = percentage;
    //         } else {
    //             output = percentage;
    //         }
    //     }
    //     return output;
    // }

    renderExtraData() {
        return ` 
            <div class="stc-card stc-infect">
                <p class="stc-card-num">${this.thousandsCurrencyFormat(this.cases)}</p>
                <p class="stc-card-title">Infections</p>
                <p class="stc-card-rate">Mild cases</p>
                <p class="stc-card-percent"><i class="fas fa-angle-double-up"></i>95.5%</p>
            </div>
            <div class="stc-card stc-death">
                <p class="stc-card-num">${this.thousandsCurrencyFormat(this.deaths)}7</p>
                <p class="stc-card-title">Deaths</p>
                <p class="stc-card-rate">Death rate</p>
                <p class="stc-card-percent"><i class="fas fa-angle-double-up"></i>95.5%</p>
            </div>
            <div class="stc-card stc-recover">
                <p class="stc-card-num">${this.thousandsCurrencyFormat(this.recovered)}</p>
                <p class="stc-card-title">Recoveries</p>
                <p class="stc-card-rate">Recovery Rate</p>
                <p class="stc-card-percent"><i class="fas fa-angle-double-up"></i>95.5%</p>
            </div>
            <div class="stc-card stc-critical">
                <p class="stc-card-num">${this.thousandsCurrencyFormat(this.active)}</p>
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