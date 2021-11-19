const initialState = {
  user: {},
};

const signUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SIGN_UP':
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default signUpReducer;
