import ejs from "ejs";

const resultHeader = `
<div class="result-header">
    <h2 class="mb-3">Company Symbol: <%= information['2. Symbol'] %></h2>
    <h3 class="mb-3">Information: <%= information['1. Information'] %></h3>
    <p>Time Zone: <%= information['5. Time Zone'] %><%= information['4. Time Zone'] %></p>
    <p class="last-refresh mb-3">Last refreshed: <%= information['3. Last Refreshed'] %></p>
</div>
`

const resultHeaderIntraday = `
<div class="result-header">
    <h2 class="mb-3">Company Symbol: <%= intraday['2. Symbol'] %></h2>
    <h3 class="mb-3">Interval: <%= intraday['4. Interval'] %>, Time Zone: <%= intraday['6. Time Zone'] %></h3>
    <p class="last-refresh mb-3">Last refreshed: <%= intraday['3. Last Refreshed'] %></p>
</div>
`

const resultView = `
<div>
    <ul>
        <li>Time: <%= interval['time'] %> </li>
        <li>Open: <%= interval['1. open'] %></li>
        <li>High: <%= interval['2. high'] %></li>
        <li>Low: <%= interval['3. low'] %></li>
        <li>Close: <%= interval['4. close'] %></li>
        <li>Volume: <%= interval['5. volume'] %><%= interval['6. volume'] %></li>
    </ul>
</div>
`;

const noResultsView = `
<div class="error">
    <h3> There are no results matching this search</h3>
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
        // console.log(data[timeSeries]);

        //result header
        const meta = data[metaData]
        const elemMeta = ejs.render(resultHeaderIntraday, {intraday:meta})
        this.view.insertAdjacentHTML('afterbegin', elemMeta) 



        // looping through the Time Series object
        Object.keys(data[timeSeries]).forEach((element)=>{
            // console.log(element);
            const price = data[timeSeries][element]
            price.time = element;
            // const time = Object.keys(data[timeSeries])

            const elem = ejs.render(resultView, {interval:price})
            this.view.insertAdjacentHTML('beforeend', elem)
        })      
    }

    this.renderStock = function(stock){
        //access object data by key
        let metaData = Object.keys(stock)[0];
        let timeSeries = Object.keys(stock)[1]
        

        // clear result after each new search
        this.removeChildElements()

        // if no seaerch result, display error message
        if(timeSeries === undefined){
            
            const elem = ejs.render(noResultsView)
            this.view.insertAdjacentHTML('afterbegin', elem)

        }else{
            let stockData = Object.keys(stock[timeSeries])
            
            // intraday object data would containe interval pairs, object structure would different
            if((document.querySelector('#timeSeries').value) === "TIME_SERIES_INTRADAY"){

                //result header
                const metaIntraday = stock[metaData]
                const elemMeta = ejs.render(resultHeaderIntraday, {intraday:metaIntraday})
                this.view.insertAdjacentHTML('afterbegin', elemMeta)
            
            // else access non-Intraday object
            }else{
                //result header
                const meta = stock[metaData]
                const elemMeta = ejs.render(resultHeader, {information:meta})
                this.view.insertAdjacentHTML('afterbegin', elemMeta)
            }
             

            stockData.forEach((element)=>{
                const time = stock[timeSeries][element]
                time.time = element;
                const elem = ejs.render(resultView, {interval:time})
                this.view.insertAdjacentHTML('beforeend', elem)
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