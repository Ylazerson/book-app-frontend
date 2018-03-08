// B''H //




// --------------------------------------------------------------------------------
import * as types from '../actions/actionTypes';
import initialState from './initialState';
// --------------------------------------------------------------------------------



// --------------------------------------------------------------------------------
function actionTypeEndsInSuccess(type) {
    return type.substring(type.length - 8) == '_SUCCESS';
}

/*
NOTE: We're now handling the same action in multiple reducers.
Any action type that ends in SUCCESS will now be handled here as well as in another reducer.
And there's nothing wrong with this. In fact, it's quite powerful.
Remember, each reducer is simply a slice of state. So a given action may impact multiple reducers.
*/
export default function ajaxStatusReducer(state = initialState.ajaxCallsInProgress, action) {

    if (action.type == types.BEGIN_AJAX_CALL) {
        return state + 1;
    } else if (action.type == types.AJAX_CALL_ERROR || actionTypeEndsInSuccess(action.type)) {
        return state - 1;
    }

    return state;
}
// --------------------------------------------------------------------------------


