import { actions } from 'react-redux-form';
import {LEADERS} from '../shared/leaders';
import * as ActionTypes from './ActionTypes';

export const Leaders=(state=LEADERS,actions)=>{
    switch(actions.type){
        default:
            return state;
    }
}