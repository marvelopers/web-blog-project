This is a starter template for [Learn Next.js](https://nextjs.org/learn).

## styled-components 적용
yarn add styled-components && yarn add -D babel-plugin-styled-components

```
yarn add styled-components && yarn add -D babel-plugin-styled-components
touch .babelrc
// .babelrc
{
  "presets": ["next/babel"],
  "plugins": [["styled-components", { "ssr": true }]]
}
```

```
touch pages/_document.tsx
// pages/_document.tsx
import Document from 'next/document'
import { ServerStyleSheet } from 'styled-components'
export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage
    try {
      ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
      })
      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
           {initialProps.styles}
           {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
}
```

[nextjs 설정 방법 ](https://medium.com/@qsx314/3-next-js-styled-components-36ef818438d9)
[next-js-handbook ](https://www.freecodecamp.org/news/the-next-js-handbook/#next-js-vs-gatsby-vs-create-react-app)
[nextjs 설정 방법 ](https://medium.com/@qsx314/3-next-js-styled-components-36ef818438d9)


CRA는 SSR를 도와주지 못한다. SEO와 SPEED는 next와 gastby로 가능하다.

언제 넥스트가 개츠비보다 좋으낙?
둘다 SSR이 가능한 방법이다,

서버 없는 정적 사이트 렌더링은 개츠비를, 넥스튼느 제공한다 다이나믹 웹사이트를 가능하도록 서버에게 요청한다. 플랫폼에 디플로이 하기를 원한다면 노드 js를 통해서 

넥스트 역시 정적 사이트가 맞다. 개츠비는 그래프 큐엘을 기반으로 하고 있다.

넥스트의 장점
1. 빠른 사이트 2. SEO  3. SNS Meta tag 

