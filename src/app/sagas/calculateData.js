import momentz from 'moment-timezone';


function getMaxQuote(item) {
    console.log('getMaxQuote', item);
    var maxPrice = 0;
    var foundItem = { time: '00:00', price: 0.00 };
    item.quotes.forEach(quote => {
       if (quote.price >= maxPrice) {
        maxPrice = quote.price;
        foundItem = quote;
       }
    })

    return foundItem;
}

function getMinQuote(item) {
    console.log('getMinQuote', item);
    var minPrice = 999999999.99;
    var foundItem = { time: '00:00', price: 0.00 };
    item.quotes.forEach(quote => {
       if (quote.price <= minPrice) {
        minPrice = quote.price;
        foundItem = quote;
       }
    })

    return foundItem;
}

export default function calculateData(currencyData){  
    console.warn('calculateDAta:  ',currencyData);
    const structuredData = currencyData.map(item => ({
        tradeDate: momentz(item.date, 'YYYYMMDD').format('DD-MMM-YY'),
        currency: item.currency,
        buyPrice: `$${getMinQuote(item).price}`,
        sellPrice: `$${getMaxQuote(item).price}`,
        buyTime: momentz(getMinQuote(item).time, 'hh:mm').format('hh:mm a'),
        sellTime: momentz(getMaxQuote(item).time, 'hh:mm').format('hh:mm a'),
        profit: `$${(getMaxQuote(item).price - getMinQuote(item).price).toFixed(2)}`,
    }))
    return structuredData;
}