import * as ActionTypes from "./ActionTypes";
// import { DISHES } from "../shared/dishes";
import { baseUrl } from "../shared/baseUrl";

export const addComment = (dishId, rating, author, comment) => ({
  type: ActionTypes.ADD_COMMENT,
  payload: {
    dishId: dishId,
    rating: rating,
    author: author,
    comment: comment,
  },
});

export const fetchDishes = () => (dispatch) => {
  dispatch(dishesLoading());
  // setTimeout(()=>{
  //   dispatch(addDishes(DISHES));
  // },2000)
  return fetch(baseUrl + "dishes")
    .then((response) => response.json())
    .then((dishes) => dispatch(addDishes(dishes)));
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
    .then((response) => response.json())
    .then((comments) => dispatch(addComments(comments)));
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
    .then((response) => response.json())
    .then((promos) => dispatch(addPromos(promos)));
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