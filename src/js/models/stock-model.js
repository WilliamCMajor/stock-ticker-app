/* Using async function fetching data */

function stockModel(){
    // define base url and apikey
    this.apiBaseUrl = 'https://www.alphavantage.co/';
    this.apiKey = "apikey=P159SVR0FGV49277";

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

    this.search = async function (data){
        // destructure objects
        const {queryFunction, querySymbol, queryInterval} = {...data}
        console.log(queryFunction, querySymbol, queryInterval);
        let url = new URL(this.apiBaseUrl + "query?");
        // let url = new URL(this.apiBaseUrl + "function=" + queryFunction + "interval=" + queryInterval + "symbol=" + querySymbol);

        //html encode the query params
        const params = new URLSearchParams()
        params.set('function', queryFunction)
        params.set('interval', queryInterval)
        params.set('symbol', querySymbol)
        params.set('apikey', this.apiKey)

        url = url + params;

        const req = await fetch(url)
        const res = await req.json()
        console.log(res);
        return res
    }

    return this;
}

export default stockModel;