import axios from 'axios';

const api = axios.create({
  credentials: true,
  timeout: 10000,
  baseURL: 'https://new-yr.dt.r.appspot.com', 
  headers: {
    'Content-Type': 'application/json',
  },
  URIEncoding:"UTF-8"
});
// 'token':  `Bearer ${localStorage.getItem('token')}`
//대쉬보드
export const getRankList = ({sort, category, keyword, page=1}) => {
    return api.get(`/${sort}/${category}/${keyword}/${page}`);
}

//모달기능
export const showInfo = ({youtuber_id}) => {
  return api.get(`/youtuber/${youtuber_id}`);
}

//로그인
export const login = async ({id, pw}) => { 
  try{
    let response = await api.post(`/auth/signin`, {id, pw});
    if(response.status === 200 && response.data.message === "signin success"){
      let jwt_token = response.data.token;
      localStorage.setItem("token", jwt_token);
    }
    return response;
  }catch(e){
      console.log(e);
      return(e);
  }
}
export const checkLogin = async() => {
  const token = localStorage.getItem('token');
  let message;
  if(localStorage.getItem('token') !== null){
    try{
      message = await api.post('/auth/check', {} ,{headers: {'token': `${token}`}})
    }catch{
      message = "토큰에러";
    }finally{
      return message;
    }
  }
  else{
    message =  "로그인 필요"
    return message;
  }
}

//로그아웃
export const logout = () => {
  localStorage.removeItem('token');
}

//회원가입
export const signup = ({id, pw, name}) => {
  return api.post(`/auth/signup`, {id, pw, name});
}

//admin유저 조회
export const adminList = ({page=1}) => {
  return api.get(`/admin/${page}`, {headers: {'token':  `${localStorage.getItem('token')}`}}); 
}

//유튜버 삭제
export const youtuberRemove = ({id}) => {
  return api.delete(`admin/${id}`,{headers: {'token':  `${localStorage.getItem('token')}`}});
}

//유튜버 수정
export const youtuberEdit = ({id, name, category}) => {
  return api.put(`admin/${id}`, {name, category},{headers: {'token':  `${localStorage.getItem('token')}`}});
}

//유튜버 추가
export const youtuberAdd = ({id, name, category}) => {
  return api.post(`admin`, {id, name, category}, {headers: {'token':  `${localStorage.getItem('token')}`}});
}
