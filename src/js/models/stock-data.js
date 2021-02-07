let store = {};
let once; /* undefined */

function setStockData (timeSeries){
    // copy and store data in a new array
    
    if(once === undefined){
        store = {...timeSeries}
        once = true;
    }
    /* timeSeries.forEach(element => {
        element.forEach(data => {
            console.log(data);
        })
    }) */;
}

function updateStockData (timeSeries){
    once = undefined;
    setStockData(timeSeries);
}

function getStockData() {
    return store;
}
export {setStockData, updateStockData, getStockData};