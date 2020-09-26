import * as ActionTypes from "./ActionTypes";

export const Leaders = (
  state = { loading: true, leaders: [], leadersErr: null },
  actions
) => {
  switch (actions.type) {
    case ActionTypes.LEADERS_LOADING:
      return {
        ...state,
        loading: true,
        leaders: [],
        leadersErr: null,
      };
    case ActionTypes.LEADERS_ERROR:
      return {
        ...state,
        loading: false,
        leaders: [],
        leadersErr: actions.payload.leadersErr,
      };
    case ActionTypes.ADD_LEADERS:
      return {
        ...state,
        loading: false,
        leaders: actions.payload.leaders,
        leadersErr: null,
      };
    default:
      return state;
  }
};
