import { createAction, handleActions } from 'redux-actions';

import { Map, fromJS } from 'immutable';
import { pender } from 'redux-pender';

import * as api from '../../Lib/api'


// action types
const YOUTUBE_INFO = 'info/YOUTUBE_INFO';


// action creators
export const getYoutuberInfo = createAction(YOUTUBE_INFO, api.showInfo, meta=>meta);

// initial state
const initialState = Map({
  info: Map(),
  Youtuber_id: null
});

// reducer
export default handleActions({
  ...pender({
    type: YOUTUBE_INFO,
    onSuccess: (state, action) => {
      const {data} = action.payload;
      console.log(action.payload);
      return state.set('info', fromJS(data))
                  .set('Youtuber_id', action.payload);
    }
    
  }),
}, initialState)
