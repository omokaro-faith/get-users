import actionTypes from "../actions/actionTypes"
const initialState = {
  users: [],
  message: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_USER_REQUEST: 
    return { ...state, message: 'fetching user requested', }
    case actionTypes.GET_USER_SUCCESSFUL: 
    return { ...state, users: action.data.data, message: 'fetching user success' }
    case actionTypes.GET_USER_FAILED: 
    return { ...state, message: 'error fetching users' }
    default:
      return state
  }
}