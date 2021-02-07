/* Using async function fetching data */

function stockModel(){
    this.apiBaseUrl = 'https://www.alphavantage.co/';
    /* https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=P159SVR0FGV49277 */

    // set initial data call
    this.init = function() {
        const result = this.query('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=P159SVR0FGV49277').then(res=> res)

        return result
    }

    // fetch data search query
    this.query = async function(url){
        const req = await fetch(url);
        const res = await req.json();
        return res
    }

    return this;
}

export default stockModel;