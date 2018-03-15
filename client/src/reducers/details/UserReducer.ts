import { ActionType } from '../../actions';

export function UserReducer(state, action) {
    switch (action.type) {
        case ActionType.USER_LOGIN:
            state = action.user;
            return state;
        case ActionType.USER_LOGOUT:
            state = undefined;
            return state;
        default:
            return state;
    }
}