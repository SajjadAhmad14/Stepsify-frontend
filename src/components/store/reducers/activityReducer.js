const initialState = {
  target: ''
}

const activityReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ACTIVITY':
      return {
        ...state,
        activity: action.activity
      }
    default:
      return state
  }
}

export default activityReducer

