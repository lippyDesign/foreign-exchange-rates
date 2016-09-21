$(document).ready(() => {
    let currencyType = 'USD'
    let url = `http://api.fixer.io/latest?base=${currencyType}`
    makeList = (url) => {
        // make ajax request with fetch
        fetch(url)
            // the following callback will take the response and convert it to readable data
            .then(response => response.json())
            // the following will take the data from json and put it on the screen
            .then(data => {
                $('.currency').append(data.base)
                $('.date').append(data.date)
                // the following function will make a list of data
                for (var prop in data.rates) {
                    $('.currencyList').append('<li><button value=' + prop + ' ' + 'class="currencyLink">' + data.rates[prop] + ' ' + prop + '</button></li>');
                }
            })
            // if we had an error getting data
            .catch(error => {
                console.log(`BAD ${error}`)
                $('.currency').append('Uh Oh! Something went wrong :(')
            })
    }
    makeList(url)
})