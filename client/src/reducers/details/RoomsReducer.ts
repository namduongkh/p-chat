import { ActionType } from '../../actions';

export function RoomsReducer(state = {}, action) {
    switch (action.type) {
        case ActionType.JOIN_ROOM:
            state[action.room] = true;
            return state;
        case ActionType.LEAVE_ROOM:
            delete state[action.room];
            return state;
        case ActionType.LEAVE_ALL_ROOM:
            state = undefined;
            return state;
        default:
            return state;
    }
}