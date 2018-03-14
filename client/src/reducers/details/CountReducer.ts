import { Action } from '@ngrx/store';
import { ActionType } from '../../actions';

export function CountReducer(state: number = 0, action: Action) {
    switch (action.type) {
        case ActionType.COUNT_INCREMENT:
            return state + 1;

        case ActionType.COUNT_DECREMENT:
            return state - 1;

        case ActionType.COUNT_RESET:
            return 0;

        default:
            return state;
    }
}