// export default function* rootSaga() {
//   yield;
// }

import { takeEvery } from 'redux-saga/effects';

import { SWAP_CURRENCY, CHANGE_BASE_CURRENCY, GET_INITIAL_CONVERSION } from '../actions/currencies';

const rootSagaFn = function* rootSaga() {
  yield takeEvery(GET_INITIAL_CONVERSION, fetchLatestConversionRatesFn);
  yield takeEvery(SWAP_CURRENCY, fetchLatestConversionRatesFn);
  yield takeEvery(CHANGE_BASE_CURRENCY, fetchLatestConversionRatesFn);
};

const fetchLatestConversionRatesFn = function* fetchLatestConversionRates(action) {
  console.log('fetchLatestConversionRates', action);
  yield;
};

export default rootSagaFn;
