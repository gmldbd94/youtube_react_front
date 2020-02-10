import { createAction, handleActions } from 'redux-actions';

import { Map, fromJS } from 'immutable';
import { pender } from 'redux-pender';



// action types
const SHOW_INFO_MODAL = 'modal/SHOW_INFO_MODAL';
const CANCEL_INFO_MODAL = 'modal/CANCEL_INFO_MODAL'

// action creators
export const ShowInfoModal = createAction(SHOW_INFO_MODAL);
export const CancelInfoModal = createAction(CANCEL_INFO_MODAL);

// initial state
const initialState = Map({
  info: Map(),
  visible: false
});

// reducer
export default handleActions({
  ...pender({
    type: SHOW_INFO_MODAL,
    onSuccess: (state, action) => {
      const { data: info } = action.payload;
      return state.set('info', fromJS(info))
                  .set('visible', true);
    }
  }),
  ...pender({
    type: CANCEL_INFO_MODAL,
    onSuccess: (state, action) => {
      return state.set('info', null)
                  .set('visible', false);
    }
  })
}, initialState)
