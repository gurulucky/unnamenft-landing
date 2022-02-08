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

export const getSign = async (userAddress) => {
  try {
    const res = await api.get('/getSign', { params: { userAddress } })
    console.log(res.data.sign)
    return res.data.sign
  } catch (err) {
    console.log(err.message)
    return null
  }
}
