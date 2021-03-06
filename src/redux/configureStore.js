import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {Dishes} from './dishes';
import {Comments} from './comments';
import {Promotions} from './promotions';
import {Leaders} from './leaders';
import {createForms} from 'react-redux-form';
import {initialFeedback} from './forms'
// import {Reducer,initialState} from './reducer';

export const configureStore=()=>{
    const store = createStore (combineReducers({
        dishes:Dishes,
        comments:Comments, 
        promotions:Promotions,
        leaders:Leaders,
        ...createForms({
            feedback: initialFeedback
        })
    }),
    applyMiddleware(thunk,logger)
    );
return store;

}