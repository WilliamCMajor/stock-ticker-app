# Stock Ticker App
## Introduction
Site URL: https://stocker-ticker.netlify.app/
This appliction prompt user to enter a stock symbol, choose time interval, and the real time stock data would display.

## Application
This is a MVC (model, view, control) web application.
This web application is connect to an Alpha Advantage API and query the api to return stock data. The client
using the app will be able to enter a stock symbol into a single form input.

The model will send a GET request to the API, and return data.
The returning data wil be a json file and containing stock information.
There are two views, result view will munipulate data and render and display on the site. Search view will have initial data on the site, grab the input value send to controller. Controll is to modify the request URL and parsing data from the model, modify and parsing back to views.

Here is an example of returning data:
```javascript
{
    "Meta Data": {
        "1. Information": "Intraday (5min) open, high, low, close prices and volume",
        "2. Symbol": "IBM",
        "3. Last Refreshed": "2021-02-05 18:55:00",
        "4. Interval": "5min",
        "5. Output Size": "Compact",
        "6. Time Zone": "US/Eastern"
    },
    "Time Series (5min)": {
        "2021-02-05 18:55:00": {
            "1. open": "121.7900",
            "2. high": "121.7900",
            "3. low": "121.7900",
            "4. close": "121.7900",
            "5. volume": "164"
        },
        "2021-02-05 18:45:00": {
            "1. open": "121.7900",
            "2. high": "121.7900",
            "3. low": "121.7900",
            "4. close": "121.7900",
            "5. volume": "401"
        }
}
```

## API
https://www.alphavantage.co/documentation/
