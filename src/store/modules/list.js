import { createAction, handleActions } from 'redux-actions';

import { Map, List, fromJS } from 'immutable';
import { pender } from 'redux-pender';

import * as api from '../../Lib/api';

// action types
const GET_RANK_LIST = 'list/GET_RANK_LIST';
const INITIALIZE = 'list/INITIALIZE';
const CHANGE_RANK = 'list/CHANGE_KEYWORD';
const SHOW_INFO = 'list/SHWO_INFO';
const GET_ADMIN_LIST = 'list/GET_ADMIN_LIST';

// action creators
export const getRankList = createAction(GET_RANK_LIST, api.getRankList, meta=>meta);
export const changeRank = createAction(CHANGE_RANK, meta=>meta);
export const showInfo = createAction(SHOW_INFO, meta => meta);
export const getAdminList = createAction(GET_ADMIN_LIST, api.adminList, meta => meta);


//:sort/:category/:keyword/:page'
// initial state
const initialState = Map({
  lists: List(),
  maxPage: 1,
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
    console.log(action.payload);
    if(name === 'page'){
      return state.set(name, parseInt(value,10))
    }else{
      return state.set(name,value);
    }
  },
  //리스트 관련 리덕스
  ...pender({
    type: GET_RANK_LIST,
    onSuccess: (state, action) => {
      const {data : lists} = action.payload;
      const info = fromJS(lists.result);
      console.log(action.meta);
      const {sort, category, keyword, page} = action.meta;
      return state.set('lists', info) 
                  .set('sort', sort)
                  .set('category', category)
                  .set('keyword', keyword)
                  .set('page', parseInt(page,10))                
                  .set('maxPage', lists.maxPage);
    },
  }),

  ...pender({
    type: GET_ADMIN_LIST,
    onSuccess: (state, action) => {
      const {data : lists} = action.payload;
      const info = fromJS(lists.result);
      const {page} = action.meta;
      return state.set('lists', info)
                  .set('page', parseInt(page,10))
                  .set('maxPage', lists.maxPage);
    }
  })
}, initialState)
