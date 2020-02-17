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
  Youtuber_id: null,
  max_view: 0,
  max_like: 0,
  max_dislike: 0,
  max_comment: 0,
});

// reducer
export default handleActions({
  ...pender({
    type: YOUTUBE_INFO,
    onSuccess: (state, action) => {
      const {data} = action.payload;
      console.log(data);
      return state.set('info', fromJS(data.result))
                  .set('max_view', data.max_view)
                  .set('max_like', data.max_like)
                  .set('max_dislike', data.max_dislike)
                  .set('max_comment', data.max_comment);
    }
    
  }),
}, initialState)
