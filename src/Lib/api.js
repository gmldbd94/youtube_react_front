import axios from 'axios';

const api = axios.create({
  credentials: true,
  timeout: 10000,
  baseURL: 'https://new-yr.dt.r.appspot.com', 
  headers: {
    'Content-Type': 'application/json',
    'token':  `Bearer ${localStorage.getItem('token')}`
  },
  URIEncoding:"UTF-8"
});

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
      console.log(localStorage.getItem('token'));
      api.default.headers.common['token'] = jwt_token;
    }
  }catch(e){
      console.log(e);
      return(e);
  }
}

export const logout = () => {
  console.log("로그아웃됨")
  localStorage.removeItem('token');
  console.log(localStorage);
}

//회원가입
export const signup = ({id, pw, name}) => {
  console.log(id,pw,name);
  return api.post(`/auth/signup`, {id, pw, name});
}

//admin유저 조회
export const adminList = ({page=1}) => {
  // api.headers.common.accept = jwt_token;
  const token = localStorage.getItem('token');
  const headers = { "Authorization" : `Bearer ${token}` };
  return api.get(`/admin/${page}`, {headers : headers});
}

//유튜버 삭제
export const youtuberRemove = ({id}) => {
  return api.delete(`admin/${id}`);
}

//유튜버 수정
export const youtuberEdit = ({id, name, category}) => {
  return api.put(`admin/${id}`, {name, category});
}

//유튜버 추가
export const youtuberAdd = ({id, name, category}) => {
  return api.post(`admin`, {id, name, category});
}

//유튜버 ID 체크
export const youtuberCheckID = ({id}) => {
  return api.post(``);
}