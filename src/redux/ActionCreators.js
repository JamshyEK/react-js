import * as ActionTypes from "./ActionTypes";
import {DISHES} from '../shared/dishes';

export const addComment = (dishId, rating, author, comment) => ({
  type: ActionTypes.ADD_COMMENT,
  payload: {
    dishId: dishId,
    rating: rating,
    author: author,
    comment: comment,
  },
});

export const fetchDishes=()=> (dispatch)=>{
dispatch(dishesLoading());
setTimeout(()=>{
  dispatch(addDishes(DISHES));
},2000)
}


export const addDishes = (DISHES) => ({
  type: ActionTypes.ADD_DISHES,
  payload:{
      dishes:DISHES
  }
});

export const dishesLoading=()=>({
type:ActionTypes.DISHES_LOADING
})


export const dishesErr=(msg)=>({
  type:ActionTypes.DISHES_ERROR,
  payload:{dishesErr:msg}
})