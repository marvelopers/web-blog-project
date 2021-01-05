## SSR
 server side rendering 

 서버에서 클라이언트 대신 렌더링을 해 주면 검색엔진이 페이지의 내용을 제대로 수집해갈 수 있습니다.

 초기 렌더링 성능을 개선할 수 있습니다.
 
 단점 : 서버 리소스가 사용된다는 단점, 사용자가 많은 서비스라면 캐싱과 로드밸런싱을 통해 성능을 최적화 해줄 수 있다.


 서버사이드 렌더링을 구현하기 위해서는 웹팩 설정을 커스터마이징 해야 함.
 react-router-dom@5.2.0

 yarn add webpack-node-externals

 npm install --save-dev @babel/plugin-syntax-jsx