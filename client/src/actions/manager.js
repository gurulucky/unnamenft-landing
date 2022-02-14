import api from '../utils/api'

import {
  SET_ALERT
} from './types';

export const setAlert = (open, text) => dispatch => {
  dispatch({
    type: SET_ALERT,
    payload: { alertOpen: open, alertText: text }
  })
}

export const getProof = async (address) => {
  try {
    const res = await api.get('/getProof', { params: { address } })
    // console.log('proof', res.data)
    return res.data
  } catch (err) {
    console.log(err.message)
    return null
  }
}
