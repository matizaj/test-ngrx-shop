import * as AuthAction from '../actions/auth.actions';

export interface State {
  token: string;
  authenticated: boolean;
}

const initialState: State = {
  token: null,
  authenticated: false
};
export function authReducer(state = initialState, action: AuthAction.AuthAction) { // stupid part AuthAction.AuthAction
  switch (action.type) {
    case AuthAction.SIGNUP:
    case AuthAction.SIGNIN:
    return {...state, authenticated: true};

    case AuthAction.LOGOUT:
    return {...state, token: null, authenticated: false};

    case AuthAction.SET_TOKEN:
    return {...state, token: action.payload};

    default:
    return state;

  }
}
