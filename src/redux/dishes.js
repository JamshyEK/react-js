import { actions } from 'react-redux-form';
import {DISHES} from '../shared/dishes';

export const Dishes =(state=DISHES,actions )=>{
switch (actions.type) {
    default:
        return state;
}
}