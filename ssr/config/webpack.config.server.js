const nodeExternals = require('webpack-node-externals');
// 환경변수 주입
const webpack = require('webpack');
const getClientEnvironment = require('./env');

const paths = require('./paths');

//CSS module의 고유 className을 만들 때 필요한 옵션
const getCSSModuleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent');

const cssRegex = /\.css$/
const cssModuleRegex = /\.module\.css$/
const sassRegex = /\.sass$/
const sassModuleRegex = /\.module\.sass$/

const publicUrl = paths.publicUrlOrPath.slice(0, -1);
const env = getClientEnvironment(publicUrl);

module.exports = {
  mode: 'production', //프로덕션 모드로 설정하여 최적화 옵션들을 활성화 
  entry: paths.ssrIndexJs, // 엔트리 경로
  target: 'node', // node 환경에서 구현된다는 것 명시
  output: {
    path: paths.ssrBuild, //빌드 경로
    filename: 'server.js', //파일 이름
    chunkFilename: 'js/[name].chunk.js', // 청크 파일 이름
    // publicPath: paths.servedPath, // 정적 파일이 제공될 경로
  },
  module: {
    rules: [
      {
        oneOf: [
          //자바스크립트를 위한 처리
          // 기존 webpack.config.js를 
          {
            test: /.(js|mjs|jsx|ts|tsx)$/,
            include: paths.appSrc,
            loader: require.resolve('babel-loader'),
            options: {
              customize: require.resolve(
                'babel-preset-react-app/webpack-overrides'
              ),
              presets: ['babel-preset-react-app'],
              plugins: [
                [
                  require.resolve('babel-plugin-named-asset-import'),
                  {
                    loaderMap: {
                      svg: {
                        ReactComponent: '@svgr/webpack?-svgo![path],+titleProp,+ref![path]'
                      }
                    }
                  }
                ]
              ],
              cacheDirectory: true,
              cacheCompression: false,
              compact: false
            }
          },
          // CSS를 위한 처리
          {
            test: cssRegex,
            exclude: cssModuleRegex,
            loader: require.resolve('css-loader'),
            options: {
              exportOnlyLocals: true,
            },
          },
          // CSS를 module 위한 처리
          {
            test: cssModuleRegex,
            loader: require.resolve('css-loader'),
            options: {
              modules: true,
              exportOnlyLocals: true,
              getLocalIdent: getCSSModuleLocalIdent
            }
          },
          // Sass를 위한 처리
          {
            test: sassRegex,
            exclude: sassModuleRegex,
            use: [
              {
                loader: require.resolve('css-loader'),
                options: {
                  exportOnlyLocals: true
                }
              },
              require.resolve('sass-loader')
            ]
          },
          // Sass + CSS Module 을 위한 처리
          {
            test: sassRegex,
            exclude: sassModuleRegex,
            use: [
              {
                loader: require.resolve('css-loader'),
                options: {
                  modules: true,
                  exportOnlyLocals: true,
                  getLocalIdent: getCSSModuleLocalIdent
                }
              },
              require.resolve('sass-loader')
            ]
          },
          // url-loader를 위한 설정
          {
            test: [/\.bmp$/, /\.gif$/, /\.ipe?g$/, /\.png$/],
            loader: require.resolve('url-loader'),
            options: {
              emitFile: false,
              limit: 1000,
              name: 'static/media/[name].[hash:8].[ext]'
            }
          },
          // 위에서 설정된 확장자를 제외한 파일들은 file-loader를 사용합니다.
          {
            loader: require.resolve('file-loader'),
            exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/],
            options: {
              emitFile: false,
              name: 'static/media/[name].[hash:8].[ext]'
            }
          }
        ]
      }
    ]
  },
  // node_modules에서 내부의 라이브러리를 불러올 수 있는 설정
  resolve: {
    modules: ['node_modules']
  },
  externals: [nodeExternals()],
  plugins: [
    new webpack.DefinePlugin(env.stringified) //환경 변수 주입
  ]
};