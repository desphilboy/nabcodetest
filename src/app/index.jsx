import React from 'react';
import ReactDOM from 'react-dom';
import ViewResults from './containers/view-results.js';
import store from './store.js';
import { endGetData, startGetData } from './reducers/process-data.js';

const currenciesData = [
    {
        tradeDate: '07-May-18',
        currency: 'BTC',
        buyPrice: '$33.2',
        sellPrice: '$35.1',
        buyTime: '09:15AM',
        sellTime: '12:30PM',
        profit: '$1.9',
    },
    {
        tradeDate: '07-May-18',
        currency: 'ETH',
        buyPrice: '$33.2',
        sellPrice: '$35.1',
        buyTime: '09:15AM',
        sellTime: '12:30PM',
        profit: '$1.9',
    },
    {
        tradeDate: '07-May-18',
        currency: 'LTC',
        buyPrice: '$33.2',
        sellPrice: '$35.1',
        buyTime: '09:15AM',
        sellTime: '12:30PM',
        profit: '$1.9',
    },
];

console.log(store);
store.dispatch(startGetData())
store.dispatch(endGetData(currenciesData));


ReactDOM.render(
    <ViewResults  store={store} />,
    document.getElementById('app-container'),
);

