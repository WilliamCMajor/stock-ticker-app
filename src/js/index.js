import stockModel from "./models/stock-model.js";
import SearchView from "./views/search-view.js";
import ResultView from "./views/results-view.js";
import SearchController from "./controllers/search-controller.js";





window.addEventListener('load', function(e){

    /* httpGetRequest("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=P159SVR0FGV49277").then(result=>{
        setStockData(result['Time Series (5min)'])

        const timeSeries = getStockData()
        console.log(timeSeries);
        // const stockData = setStockData(result)

        // const templates = stockView(result['Time Series (5min)'])
        // console.log(templates);

    }) */
    
    const stockData = new stockModel();
    const searchView = new SearchView('#search');
    const resultView = new ResultView('#results');
    const searchController = new SearchController(stockData, searchView, resultView);
    console.log(searchController);



})