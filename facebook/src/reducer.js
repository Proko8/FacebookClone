export const initialState = {
  user: false,
  // userName: ""
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET__USER":
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default reducer;
