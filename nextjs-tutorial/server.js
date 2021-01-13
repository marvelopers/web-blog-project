const express = require('express');
const next = require('next');

const port = 3000;
const dev = process.env.NODE_ENV !== 'production'; //환경 변수에 따라 개발 모드와 프로덕션 모드를 구분
const app = next({dev}); // 실행을 위한 함수 및 객체 생성 
const handle = app.getRequestHandler();

app.prepare().then(()=>{
  const server = express();

  server.get('/page/:id', (req, res) => {
    // res.redirect(`/page/${params.id}`);
    app.render(req, res,'/page',{id: req.params.id})
  });

  server.get('*', (req, res)=>{
    return handle(req, res);
  })

  server.listen(port, err => {
    if(err) throw err;
    console.log(`>Ready on http://localhost:${port}`);
  })
})