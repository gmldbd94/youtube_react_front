import { createAction, handleActions } from 'redux-actions';

import { Map, List, fromJS } from 'immutable';
import { pender } from 'redux-pender';

import * as api from '../../Lib/api';

// action types
const GET_RANK_LIST = 'list/GET_RANK_LIST';
const INITIALIZE = 'list/INITIALIZE';
const CHANGE_RANK = 'list/CHANGE_KEYWORD';
const SHOW_INFO = 'list/SHWO_INFO';

// action creators
export const getRankList = createAction(GET_RANK_LIST, api.getRankList, meta=>meta);
export const changeRank = createAction(CHANGE_RANK, meta=>meta);

export const showInfo = createAction(SHOW_INFO, meta => meta);


//:sort/:category/:keyword/:page'
// initial state
const initialState = Map({
  lists: List(),
  maxPage: null,
  page: 1,
  sort: 0,
  category: 0,
  keyword: 0
});

// reducer
export default handleActions({
  [INITIALIZE]: (state, action) => initialState,
  [CHANGE_RANK]: (state, action) => {
    const { name, value } = action.payload;
    return state.set(name,value);
  },
  //리스트 관련 리덕스
  ...pender({
    type: GET_RANK_LIST,
    onSuccess: (state, action) => {
      const {data : lists} = action.payload;
      const info = fromJS(lists);
      const {sort, category, keyword, page} = action.meta;
      if(sort && category && keyword && page){
        return state.set('lists', info) 
                  .set('sort', sort)
                  .set('category', category)
                  .set('keyword', keyword)
                  .set('page', parseInt(page,10))                
                  .set('maxPage', lists.lastItem.maxPage);
      }else{
        return state.set('lists', info)
                    .set('maxPage', lists.lastItem.maxPage);
      }
    },
    onFailure: (state, action) => {
      console.log("실패");
    },
    pendering: (state, action) => {
      console.log("pending~");
    }
  })
}, initialState)
