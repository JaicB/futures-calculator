import axios from "axios"

const initialState = {
  email_address: null,
  password: null,
  full_name: null,
}

const LOGIN_USER = 'LOGIN_USER'

export function loginUser(user) {
  const action = {
    type: LOGIN_USER,
    payload: user,
  }
  return action
}

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      return Object.assign({}, state, { user: action.payload })
    default:
      return state
  }
}