# 유튜브 랭킹 확인 사이트
- 호출서버


## Redux Setting
모든 화면
- 로그인 유무
  - User Name
  - 관리자 권한
메인 화면
- 랭킹정보
  -  지수 랭킹, 채널이미지, 채널이름, 개설일자, 구독자, 조회수, 영상수
- 리스트기준(Sort,rank,term,category)
- 서치 Input
- page

## module
- auth.js ==> 계정(로그인, 회원가입, 비밀번호찾기...)
- base.js ==> 세션정보
- list.js ==> 랭킹(카테고리별, 페이지네이션)
- showinfo.js ==> 해당 유튜버 자세한 정보