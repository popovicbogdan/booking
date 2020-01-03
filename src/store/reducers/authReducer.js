import {
  USER_LOADED,
  USER_LOADING,
  REGISTER_USER,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  AUTH_ERROR,
  ADD_TO_FAV,
  REMOVE_FROM_FAV
} from "../actions/types";

const initState = {
  isAuthenticated: false,
  isLoading: false,
  user: null,
  token: localStorage.getItem("token"),
  favs: { user: null, favs: [] }
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        isLoading: true
      };

    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload,
        // get the favorites from localstorage if user exists
        favs: localStorage.getItem(action.payload.username)
          ? JSON.parse(localStorage.getItem(action.payload.username))
          : state.favs
      };

    case REGISTER_USER:
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        ...action.payload,
        //get the favorites from localstorage if the user already exists
        favs: localStorage.getItem(action.payload.user.username)
          ? JSON.parse(localStorage.getItem(action.payload.user.username))
          : state.favs
      };
    case LOGOUT:
      console.log("logout invoked");

      localStorage.removeItem("token");
      return {
        ...state,
        isAuthenticated: false,
        isLoading: false,
        user: null,
        token: null,
        favs: { user: null, favs: [] }
      };
    case LOGIN_FAIL:
    case AUTH_ERROR:
      localStorage.removeItem("token");
      return {
        ...state,
        isAuthenticated: false,
        isLoading: false,
        user: null,
        token: null
      };

    case ADD_TO_FAV:
      //add hotel to favorites in localstorage
      localStorage.setItem(
        action.user,
        JSON.stringify({
          user: action.user,
          favs: [...state.favs.favs, action.id]
        })
      );
      return {
        ...state,
        favs: {
          user: action.user,
          favs: [...state.favs.favs, action.id]
        }
      };
    case REMOVE_FROM_FAV:
      //remove the hotel from favorites in localstorage
      localStorage.setItem(
        action.user,
        JSON.stringify({
          user: action.user,
          favs: state.favs.favs.filter(elem => elem !== action.id)
        })
      );
      return {
        ...state,
        favs: {
          user: action.user,
          favs: state.favs.favs.filter(elem => elem !== action.id)
        }
      };
    default:
      return state;
  }
};

export default authReducer;
