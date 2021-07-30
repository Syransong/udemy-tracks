import createDataContext from "./createDataContext";

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const signup = (dispatch) => {
  return ({ email, password }) => {
    // make api requrest to sign up with that email and password 

    // if we wign up, modify our state, and say that we are authenticated

    //if signing up fails, we need to reflect an error message somewhere
  };
};

const signin = (dispatch) => {
  return ({ eamil, password}) => {
    // Try to sign in 

    // handle success by updating state


  };
};

const signout = (dispatch) => {
  return () => {

  };
};

export const { Provider, Context } = createDataContext(
  authReducer, 
  { signin, signout, signup},
  { isSignedIn: false }
);