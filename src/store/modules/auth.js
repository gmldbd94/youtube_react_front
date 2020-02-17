import { createAction, handleActions } from 'redux-actions';
import * as api from '../../Lib/api';
import { Map } from 'immutable';
import { pender } from 'redux-pender';

const LOGIN = 'auth/LOGIN';
const REGISTER = 'auth/REGISTER';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';
const CHANGE_INPUT = 'auth/CHANGE_INPUT';


export const register = createAction(REGISTER, api.signup, meta => meta);
export const login = createAction(LOGIN, api.login, meta => meta);
export const changeInput = createAction(CHANGE_INPUT, meta => meta);

const initialState = Map({
  register: {
    id:'',
    name: '',
    pw: '',
    pwConfirm: '',
  },
  login: {
    id: '',
    pw: '',
  },
  auth: null,
  authError: null,
});

const auth = handleActions(
  {
    //초기 폼
    [INITIALIZE_FORM]: (state, action) => initialState,
    [CHANGE_INPUT]: (state, {payload: {form, name, value}}) => {
      console.log(form,name,value)
      return state.setIn([form, name], value);
    },
    //회원가입
    ...pender(
      {
      type: REGISTER,
      onSuccess: (state, action) => {  // 로그인 성공 시
        return 
      },
      onError: (state, action) => {  // 에러 발생 시
        return state.set('authError',true);
      },
      onFailure: (state, action) => {
        console.log(state);
        return console.log(action.payload);
      }
    }),
    //로그인
    ...pender(
      {
      type: LOGIN,
      onSuccess: (state, action) => {  // 로그인 성공 시
        console.log(state);
        return 
      },
      onError: (state, action) => {  // 에러 발생 시
        console.log(state);
        return state.set('authError',true);
      },
      onFailure: (state, action) => {
        console.log(state);
        return console.log(action.payload);
      }
    }),
  },initialState
);

export default auth


