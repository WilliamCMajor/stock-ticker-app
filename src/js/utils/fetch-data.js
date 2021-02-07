

function httpGetRequest (url) {
    const requestData = fetch(url)
    .then(res=>res.json())
    .then(result=> result)
    .catch(err=> console.log(err))

    return requestData
};

export default httpGetRequest;