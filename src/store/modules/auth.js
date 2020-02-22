import { createAction, handleActions } from 'redux-actions';
import * as api from '../../Lib/api';
import { Map } from 'immutable';
import { pender } from 'redux-pender';

const LOGIN = 'auth/LOGIN';
const LOGOUT = 'auth/LOGOUT';
const CHECK_LOGIN = 'auth/CHECH_LOGIN';
const REGISTER = 'auth/REGISTER';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';
const CHANGE_INPUT = 'auth/CHANGE_INPUT';




export const register = createAction(REGISTER, api.signup, meta => meta);
export const login = createAction(LOGIN, api.login);
export const changeInput = createAction(CHANGE_INPUT, meta => meta);
export const logout = createAction(LOGOUT, api.logout);
export const checkLogin = createAction(CHECK_LOGIN, api.checkLogin);


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
  message: '',
  authError: false,
  isAuthenticated: false,
  token: null,

});

const auth = handleActions(
  {
    //초기 폼
    [INITIALIZE_FORM]: (state, action) => initialState,
    [CHANGE_INPUT]: (state, action) => {
      const {form, name, value} = action.payload;
      return state.setIn([form, name], value)
    },
    //로그아웃
    [LOGOUT] : (state, action)  => {
      return state.set('isAuthenticated', false)
                  .set('token', null);
    },
    ...pender(
      {
        type: CHECK_LOGIN,
        onSuccess: (state, action) => {
          if(action.payload === "토큰에러" || action.payload === "로그인 필요"){
            localStorage.removeItem('token');
            return state.set('isAuthenticated', false)
                        .set('token', null);
          }else{
            return state.set('isAuthenticated', true)
                        .set('token', localStorage.getItem('token'));
          }
        },
        onError: (state, action) => {
          console.log("error");
        },
        onFailure: (state, action) => {
          console.log("실패");
        },
        onPending: (state, action) => {
          // console.log("pending");
        },
        onCancel: (state, action) => {
          console.log("취소");
        },
      }
    ),
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
        return console.log(action.payload);
      }
    }),
    //로그인
    ...pender(
      {
      type: LOGIN,
      onSuccess: (state, action) => {  // 로그인 성공 시
        const token = localStorage.getItem('token');
        return state.set('token', token)
                    .set('isAuthenticated', true);
      }
    }),
  },initialState
);

export default auth


