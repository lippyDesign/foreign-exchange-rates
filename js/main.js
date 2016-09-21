$(document).ready(() => {
    url = 'http://api.fixer.io/latest?base=USD'

    // make ajax request with fetch
    fetch(url)
        // the following callback will take the response and convert it to readable data
        .then(response => response.json())
        // the following will console log the data from json
        .then(data => console.log(data))
        .catch(error => console.log(`BAD ${error}`))
})