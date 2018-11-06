import { createActions, handleActions, combineActions } from 'redux-actions'

// Actions
export const START_GET_DATA = 'START_GET_DATA'
export const END_GET_DATA = 'END_GET_DATA'
export const ERROR_GET_DATA = 'ERROR_GET_DATA'

const initialState = {
  data: [],
  error: false,
  inProgress: false,
};

export const {
  startGetData,
  endGetData,
  errorGetData,
} = createActions({
  [START_GET_DATA]: () => ({ inProgress: true }),
  [END_GET_DATA]: data => ({ data, inProgress: false }),
  [ERROR_GET_DATA]: error => ({ error, inProgress: false }),
})

const processData = handleActions({
  [combineActions(
    startGetData,
    endGetData,
    errorGetData,
  )](state, {
    payload: { data, error, inProgress },
  }) {
    return {
      ...state, data, error, inProgress,
    }
  },
}, initialState)

export default processData