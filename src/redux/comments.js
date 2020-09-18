import {COMMENTS} from '../shared/comments';
import { addComment } from './ActionCreators';
import * as ActionTypes from './ActionTypes';

export const Comments=(state=COMMENTS,actions)=>{
    switch(actions.type){
        case ActionTypes.ADD_COMMENT:
            var comment=actions.payload;
            comment.id=state.length;
            comment.date= new Date();
            console.log("comment:",comment);
            return state.concat(comment);

        default:
            return state;
    }

}