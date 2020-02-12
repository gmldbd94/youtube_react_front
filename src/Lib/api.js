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
//대쉬보드
export const getRankList = ({sort, category, keyword, page=1}) => {
    return api.get(`/${sort}/${category}/${keyword}/${page}`);
}

//모달기능
export const showInfo = ({youtuber_id}) => {
  return api.get(`/youtuber/${youtuber_id}`);
}

export const login = ({id, pw}) => {
  api.options({
    body:{
      'id' : `${id}`,
      'pw' : `${pw}`
    }
  })
  return api.post(`/auth/signin`);
}