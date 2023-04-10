const button = document.querySelector("#js-new-quote")
button.addEventListener('click',getQuote);

const endpoint = 'https://yesno.wtf/api'

async function getQuote() {
    // console.log("It Works");
    try{
        const response = await fetch(endpoint)
        if (!response.ok) {
            throw Error(response.statusText)
        }
        
        const json = await response.json();
        //console.log(json.answer);
        displayQuote(json.answer)
    }
    catch (err) {
        console.log(err);
        alert('Failed to fetch answer')
    }
}

function displayQuote(quote){
    const quoteText = document.querySelector("#js-quote-text");
    quoteText.textContent = quote;
}


getQuote();











