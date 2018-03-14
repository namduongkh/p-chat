import { Action } from '@ngrx/store';
import { ActionType } from '../../actions';

function getFromAction(action) {
    return action;
}

export function UserReducer(state, action: Action) {
    switch (action.type) {
        case ActionType.USER_LOGIN:
            state = getFromAction(action).user;
            return state;
        default:
            return state;
    }
}