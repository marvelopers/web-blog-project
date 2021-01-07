import {callApi} from '../src/api';

sample.getInitialProps = async({query}) =>{ //쿼리 파라미터 정보 사용 
  const text = query.text || 'none';
  const data = await callApi();
  return {text, data};
};

export default function sample({text, data}){
  return(
    <div>
      <p>this is samplePage</p>
      <p>{`text: ${text}`}</p>
      <p>{`data: ${data}`}</p>
    </div>
  )
}