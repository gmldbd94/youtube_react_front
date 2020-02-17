import { createAction, handleActions } from 'redux-actions';

import { Map, List, fromJS } from 'immutable';
import { pender } from 'redux-pender';

import * as api from '../../Lib/api';

// action types
const CHECK_ID = 'admin/CHECK_ID';
const ADD_YOUTUBER = 'admin/ADD_YOUTUBER';
const EDIT_YOUTUBER = 'admin/EDIT_YOUTUBER';
const REMOVE_YOUTUBER = 'admin/REMOVE_YOUTUBER';


// action creators
export const chackID = createAction(CHECK_ID, meta=>meta); //api추가 할 것!
export const AddYoutuber = createAction(ADD_YOUTUBER, api.youtuberAdd, meta=>meta);
export const EditYoutuber = createAction(EDIT_YOUTUBER, api.youtuberEdit, meta=>meta);
export const RemoveYoutuber = createAction(REMOVE_YOUTUBER, api.youtuberRemove, meta=> meta);

// initial state
const initialState = Map({
  info: {},
  checked: false,
  id: null,
  name: null,
  category: null,
  Error: null
});

// reducer
export default handleActions({
  [INITIALIZE]: (state, action) => initialState,
  [ADD_YOUTUBER]: (state, action) => {
    
  },
  [EDIT_YOUTUBER]: (state, action) => {

  },
  [REMOVE_YOUTUBER]: (state, action) => {

  },
  ...pender({
    type: CHECK_ID,
    onSuccess: (state, action) => {
      const { data: info} = action.payload.result;
      if(info.length > 0){
        return state.set('info', info)
                    .set('checked', false)
      }
      else{
        return state.set('checked', false)
      }
    }
  }),
}, initialState)
