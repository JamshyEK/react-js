import * as ActionTypes from "./ActionTypes";
// import { DISHES } from "../shared/dishes";
import { baseUrl } from "../shared/baseUrl";

export const addComment = (comment) => ({
  type: ActionTypes.ADD_COMMENT,
  payload: comment,
});

export const postComment = (dishId, rating, author, comment) => (dispatch) => {
  const newComment = {
    dishId: dishId,
    rating: rating,
    author: author,
    comment: comment,
  };
  newComment.date = new Date();
  return fetch(baseUrl + "comments", {
    method: "POST",
    body: JSON.stringify(newComment),
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "same-origin",
  })
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error:" + response.status + ":" + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        var errMsg = new Error(error.message);
        throw errMsg;
      }
    )
    .then((response) => response.json())
    .then((response) => dispatch(addComment(response)))
    .catch((error) => {
      console.log("post comments", error.message);
      alert("Your comment could not be posted\nError: " + error.message);
    });
};

export const fetchDishes = () => (dispatch) => {
  dispatch(dishesLoading());
  // setTimeout(()=>{
  //   dispatch(addDishes(DISHES));
  // },2000)
  return fetch(baseUrl + "dishes")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error:" + response.status + ":" + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        var errMsg = new Error(error.message);
        throw errMsg;
      }
    )
    .then((response) => response.json())
    .then((dishes) => dispatch(addDishes(dishes)))
    .catch((error) => dispatch(dishesErr(error.message)));
};

export const addDishes = (DISHES) => ({
  type: ActionTypes.ADD_DISHES,
  payload: {
    dishes: DISHES,
  },
});

export const dishesLoading = () => ({
  type: ActionTypes.DISHES_LOADING,
});

export const dishesErr = (msg) => ({
  type: ActionTypes.DISHES_ERROR,
  payload: { dishesErr: msg },
});

export const fetchComments = () => (dispatch) => {
  dispatch(dishesLoading());

  return fetch(baseUrl + "comments")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error:" + response.status + ":" + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        var errMsg = new Error(error.message);
        throw errMsg;
      }
    )
    .then((response) => response.json())
    .then((comments) => dispatch(addComments(comments)))
    .catch((error) => dispatch(commentsErr(error.message)));
};

export const addComments = (COMMENTS) => ({
  type: ActionTypes.ADD_COMMENTS,
  payload: {
    comments: COMMENTS,
  },
});

export const commentsErr = (msg) => ({
  type: ActionTypes.COMMENTS_ERROR,
  payload: { commentsErr: msg },
});

export const fetchPromos = () => (dispatch) => {
  dispatch(promosLoading());

  return fetch(baseUrl + "promotions")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error:" + response.status + ":" + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        var errMsg = new Error(error.message);
        throw errMsg;
      }
    )
    .then((response) => response.json())
    .then((promos) => dispatch(addPromos(promos)))
    .catch((error) => dispatch(promosErr(error.message)));
};

export const addPromos = (PROMOS) => ({
  type: ActionTypes.ADD_PROMOS,
  payload: {
    promos: PROMOS,
  },
});

export const promosLoading = () => ({
  type: ActionTypes.PROMOS_LOADING,
});

export const promosErr = (msg) => ({
  type: ActionTypes.PROMOS_ERROR,
  payload: { promosErr: msg },
});
