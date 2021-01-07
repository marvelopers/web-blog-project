import Link from 'next/link';

export default function MyApp({Component, pageProps}){
  //pageProps : 해당 페이지의 getInititalProps 함수가 반환한 값
  return (
    <div>
        <Link href='/sample'>
        <p>sample</p>
      </Link>
      <Component {...pageProps}/>
    </div>
  )
} 

// _app : 모든 페이지에서 필요한 기능은 여기서 구현한다, 

