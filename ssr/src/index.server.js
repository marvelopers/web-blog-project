import React from "react";
import ReactDOMServer from "react-dom/server";// 서버에서 리액트 코드를 랜더링 할 떄 사용하는 함수 
import express from 'express';
import { StaticRouter } from 'react-router-dom'; // 서버 사이드 렌더링 용으로 사용되는 라우터
import App from './App';
import path from 'path'; //정적 파일 제공하기_ express에 내장되어 있는 static 미들웨어를 사용해 서버를 통해 build에 있는 js,css 정적파일에 접근할 수 있도록 해줌.
import fs from 'fs';

const manifest = JSON.parse(
  fs.readFileSync(path.resolve('./build/asset-manifest.json'), 'utf-8')
);

const chunk = Object.keys(manifest.files)
  .filter(key => /chunk\.js$/.exec(key)) //chunk.js로 끝나는 키를 찾는다.
  .map(key => `<script src="${manifest.files[key]}"></script>`) //script 태그로 변환 한다.
  .join(''); //합친다.

function createPage(root) {
  return `
  <!doctype html>
    <html lang="ko">
    <head>
    <meta charset="utf-8" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no,maximum-scale=1" />
    <meta name="theme-color" content="#000000" />
    <title>React App</title>
    <link href="${manifest.files['main.css']}" rel="stylesheet">
    </head>
    <body>
      <noscript>You need to enable JavaScript to run this app.</noscript>
      <div id="root"> ${root}</div>
      <script src="${manifest.files['runtime~main.js']}"></script>
      ${chunk}
      <script src="${manifest.files['main.js']}"></script>
      </body>
    </html>
  `;
}

const app = express();

// 서버사이드렌더링을 처리할 핸들러 함수 
const serverRender = (req, res, next) => {
  // 404가 떠야하는 상황에서 서버 사이드 렌더링을 해줌
  const context = {};
  const jsx = (
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );
  const root = ReactDOMServer.renderToString(jsx);
  res.send(createPage(root));
};

const serve = express.static(path.resolve('./build'), {
  index: false // '/' 경로에서 index.html을 보여주지 않도록 설정
})

// 순서 중요 
app.use(serve);
app.use(serverRender);

// 5000 포트로 서버를 가동합니다.
app.listen(5000, () => {
  console.log('Running on http://localhost:5000')
})

// const html = ReactDOMServer.renderToString(
//   <div> Server Side Rendering </div>
// )

// console.log(html)
