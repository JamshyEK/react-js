import * as ActionTypes from "./ActionTypes";
export const Promotions = (
  state = { loading: true, promoErr: null, promotions: [] },
  actions
) => {
  switch (actions.type) {
    case ActionTypes.ADD_PROMOS:
      return {
        ...state,
        loading: false,
        promoErr: null,
        promotions: actions.payload.promos,
      };
    case ActionTypes.PROMOS_LOADING:
      return {
        ...state,
        loading: true,
        promoErr: null,
        promotions: [],
      };
    case ActionTypes.PROMOS_ERROR:
      return {
        ...state,
        loading: false,
        promoErr: actions.payload.promosErr,
        promotions: [],
      };
    default:
      return state;
  }
};
