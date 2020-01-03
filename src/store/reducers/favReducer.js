// import { ADD_TO_FAV, REMOVE_FROM_FAV } from "../actions/types";

// const initState = { user: null, favs: [] };

// export const favReducer = (state = initState, action) => {
//   switch (action.type) {
//     case ADD_TO_FAV:
//       localStorage.setItem(
//         action.user,
//         JSON.stringify({
//           user: action.user,
//           favs: [...state.favs, action.id]
//         })
//       );
//       return {
//         user: action.user,
//         favs: [...state.favs, action.id]
//       };
//     case REMOVE_FROM_FAV:
//       localStorage.setItem(
//         action.user,
//         JSON.stringify({
//           user: action.user,
//           favs: state.favs.filter(elem => elem !== action.id)
//         })
//       );
//       return {
//         user: action.user,
//         favs: state.favs.filter(elem => elem !== action.id)
//       };
//     default:
//       return state;
//   }
// };

// export default favReducer;
