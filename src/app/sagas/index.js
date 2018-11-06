import { all, takeLatest, put, call } from 'redux-saga/effects'
import axios from 'axios';
import { START_GET_DATA, endGetData, errorGetData } from '../reducers/process-data.js';
import calculateData from './calculateData.js';

const apiClient = axios.create({
  baseURL: 'http://localhost:3009',
  timeout: 5000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'my-header': 'your-value',
  },
});


function retrieveData() {
    return(apiClient.get('/getdata'));
}

function* getData() {
    try {
        const response = yield call(retrieveData);
        yield put(endGetData(calculateData(response.data)));
    } catch (error) {
        yield put(errorGetData('a very bad error happened.'));
    }
}


export default function* rootSaga() {
  yield (takeLatest(START_GET_DATA, getData));
}