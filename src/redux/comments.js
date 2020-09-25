import * as ActionTypes from "./ActionTypes";

export const Comments = (
  state = { loading: true, comments: [], commentsErr: null },
  actions
) => {
  switch (actions.type) {
    case ActionTypes.ADD_COMMENTS:
      return {
        ...state,
        loading: false,
        commentsErr: null,
        comments: actions.payload.comments,
      };
    case ActionTypes.COMMENTS_ERROR:
      return {
        ...state,
        loading: false,
        commentsErr: actions.payload.commentsErr,
        comments: [],
      };
    case ActionTypes.ADD_COMMENT:
      var comment = actions.payload;

      console.log("comment:", comment);
      return { ...state, comments: state.comments.concat(comment) };

    default:
      return state;
  }
};
