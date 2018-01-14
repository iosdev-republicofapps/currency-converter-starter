// export default function* rootSaga() {
//   yield;
// }

import { takeEvery, select, call, put } from 'redux-saga/effects';

import {
  SWAP_CURRENCY,
  CHANGE_BASE_CURRENCY,
  GET_INITIAL_CONVERSION,
  CONVERSION_RESULT,
  CONVERSION_ERROR,
} from '../actions/currencies';

const rootSagaFn = function* rootSaga() {
  yield takeEvery(GET_INITIAL_CONVERSION, fetchLatestConversionRatesFn);
  yield takeEvery(SWAP_CURRENCY, fetchLatestConversionRatesFn);
  yield takeEvery(CHANGE_BASE_CURRENCY, fetchLatestConversionRatesFn);
};

const getLatestRate = currency => fetch(`http://api.fixer.io/latest?base=${currency}sdsd`);

const fetchLatestConversionRatesFn = function* fetchLatestConversionRates(action) {
  try {
    console.log('fetchLatestConversionRates', action);

    let currency = action.currency;
    if (currency === undefined) {
      currency = yield select(state => state.currencies.baseCurrency);
    }
    console.log('currency', currency);

    const response = yield call(getLatestRate, currency);
    const result = yield response.json();

    if (result.error) {
      yield put({ type: CONVERSION_ERROR, error: result.error });
    } else {
      yield put({ type: CONVERSION_RESULT, result });
    }
  } catch (e) {
    console.log('saga error', e);
    yield put({ type: CONVERSION_ERROR, error: e.message });
  }
};

export default rootSagaFn;
