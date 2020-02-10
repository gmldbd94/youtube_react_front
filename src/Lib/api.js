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

export const showInfoModal = ({youtube_id}) => {
  return api.get(`/0/0/진용진/1`);
}