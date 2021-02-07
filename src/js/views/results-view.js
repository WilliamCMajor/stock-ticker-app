import ejs from "ejs";

const resultHeader = `
<h2 class="mb-3">Symbol: <%= information['2. Symbol'] %></h2>
<h3 class="mb-3">Interval: <%= information['4. Interval'] %> Time Zone: <%= information['6. Time Zone'] %></h3>
<p class="last-refresh mb-3">Last refreshed: <%= information['3. Last Refreshed'] %></p>
`

const resultTime = `
<div>

</div>
`

const resultView = `
<div>
    <ul>
        <li>Open: <%= interval['1. open'] %></li>
        <li>High: <%= interval['2. high'] %></li>
        <li>Low: <%= interval['3. low'] %></li>
        <li>Close: <%= interval['4. close'] %></li>
        <li>Volume: <%= interval['5. volume'] %></li>
    </ul>
</div>
`;

const noResultsView = `
<div class="error">
  <header>
    <h3> There are no results matching this search</h3>
 <header>
</div>
`;

function ResultView (viewId){
    // reference in the dom for showing results
    this.view = document.querySelector(viewId)

    // initialize result review
    this.configUI = function(data){
        //access object data by key
        let metaData = Object.keys(data)[0];
        let timeSeries = Object.keys(data)[1];
        console.log(data[timeSeries]);

        // access through the Meta Data object
        // Object.keys(data[metaData]).forEach((element)=>{
            const meta = data[metaData]
            const elemMeta = ejs.render(resultHeader, {information:meta})
            this.view.insertAdjacentHTML('afterbegin', elemMeta)
        // }) 



        // looping through the Time Series object
        Object.keys(data[timeSeries]).forEach((element)=>{
            console.log(element);
            const price = data[timeSeries][element]
            // const time = Object.keys(data[timeSeries])

            const elem = ejs.render(resultView, {interval:price})
            this.view.insertAdjacentHTML('beforeend', elem)
        })      
    }

    this.renderStock = function(stock){
        //access Time Series object
        let timeSeries = Object.keys(stock)[1]

        // clear result after each new search
        this.removeChildElements()

        if(timeSeries === undefined){
            // if no seaerch result, display error message
            const elem = ejs.render(noResultsView)
            this.view.insertAdjacentHTML('afterbegin', elem)

        }else{
            let stockData = Object.keys(stock[timeSeries])
            console.log(stockData);
            stockData.forEach((element)=>{
                const time = stock[timeSeries][element]
                // console.log(time);
                const elem = ejs.render(resultView, {interval:time})
                this.view.insertAdjacentHTML('afterbegin', elem)
            })      
            
        }
             
        
        
    }

    this.removeChildElements = function(){
        // looping throught node list
        this.view.querySelectorAll('div').forEach((item)=> {
            this.view.removeChild(item)
        })
    }

    return this
}

export default ResultView