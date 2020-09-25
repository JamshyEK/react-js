import * as ActionTypes from "./ActionTypes";

export const Dishes = (
  state = { loading: true, dishErr: null, dishes: [] },
  actions
) => {
  switch (actions.type) {
    case ActionTypes.ADD_DISHES:
      return {
        ...state,
        loading: false,
        dishErr: null,
        dishes: actions.payload.dishes
      };
    case ActionTypes.DISHES_ERROR:
      return {
        ...state,
        loading: false,
        dishErr: actions.payload.dishesErr,
        dishes: []
      };
    case ActionTypes.DISHES_LOADING:
      return { ...state,
         loading: true, 
         dishErr: null, 
         dishes: []
         };
    default:
      return state;
  }
};
