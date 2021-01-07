module.exports = {
  webpack: config => { //웹팩 설정을 변경하기 위한 함수
    config.module.rules.push({ //file-loader 추가
      test: /.(png|jpg)$/,
      use:[
        {
          loader: 'file-loader', //이미지를 모듈로 다뤄야한다.
          options: {
            name: '[path][name].[ext]?[hash]', //쿼리 파라미터 부분에 해쉬를 추가하면 파일의 내용이 변경될 때마다 파일의 경로도 수정된다.
            emitFile: false, 
            publicPath: '/',
          },
        },
      ],
    });
    return config;
  }
}