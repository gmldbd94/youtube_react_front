# 유튜브 랭킹 확인 사이트
- YOUTUB API호출서버(https://github.com/Dyeon-Development/YOUTUBE_RANKING_API)

## 사용방법
```yarn install```
```yarn start```

## 프로젝트
- 프로젝트 언어 : REACT && Javascript
- 사용된 템플릿 : https://coreui.io/react/ (bootstrap 기반)
- Deploy Server : FireBase(https://newagent-332ed.firebaseapp.com/)

## 화면 구성
1. 메인화면('/')
  - 카테고리 검색(지수별, 조회수, 구독자, 영상수, 카테고리별)
  - 등록된 YOUTUBER 랭킹확인

2. 유튜브 유저 자세히 보기('/user/:id')
  - 유저 정보
  - 주간 변동 차트
  - 주간 지수별 차트
  - 개별콘텐츠 수치

3. 로그인('/login')
  - 회원가입
  - 로그인

4. 어드민('/users')
  - 등록된 유튜버 확인, 수정, 추가, 삭제

## 폴더 구성
- Assest : 폴더내용
- Components: 화면구성에 필요한 구성요소들
   - Admin : 유튜버 추가, 수정, 삭제
   - Common : Style요소 및 자주 쓰이는 구성요소들
   - Hook : 내부적으로 필요한 데이터처리 및 Javascript 파일
   - Rank : DashBoard에 필요한 구성요소들
   - ShowInfo : 유튜브 유저 자세히 보기 페이지
   - Widgets : 커스텀 위젯
- 

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