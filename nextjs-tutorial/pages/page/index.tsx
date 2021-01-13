import React from 'react';
import { callApi } from '../../src/api';

interface AppProps{
  name : string,
  age: number,
}

App.getInitialProps = async({query}) =>{ //쿼리 파라미터 정보 사용 
  const text = query.text || 'none';
  const data = await callApi();
  return {text, data};
  // return query
};

function App ({name, age}:AppProps) {
  // function App ({data}) {
  
  console.log('data',name);
  return (
    <>
    <div>
      <p>{name}</p>
    </div>
    </>
  )
}

export default App;
