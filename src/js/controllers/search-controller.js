function SearchController (model, searchView, resultView){
    this.model = model;
    this.searchView = searchView;
    this.resultView = resultView;

    this.configUI = async function (){
        // call on the model to init do the inital data fetch
        const data = await model.init();
        this.resultView.configUI(
            (data['Time Series (5min)']).forEach(element => {
                console.log(element);
            })
        )
            
    }

    this.configUI()
    return this
}

export default SearchController