function SearchController (model, searchView, resultView){
    this.model = model;
    this.searchView = searchView;
    this.resultView = resultView;

    this.configUI = async function (){
        // submit event on the form
        this.searchView.view.addEventListener('submit', this.onHandleSubmit)

        // call on the model to init do the inital data fetch
        const data = await model.init();
        this.resultView.configUI(data)
            
    }

    this.onHandleSubmit = async (e) => {
        e.preventDefault();
        //combine search, parse search parameter
        // no validation yet
        const searchParams = {
            queryFunction:e.currentTarget.timeSeries.value,
            querySymbol:e.currentTarget.symbol.value,
            queryInterval:e.currentTarget.interval.value
        }

        console.log(e.currentTarget.symbol.value);

        const stockSearch = await this.model.search(searchParams)
        this.resultView.renderStock(stockSearch)
    }

    this.configUI();

    return this
}

export default SearchController