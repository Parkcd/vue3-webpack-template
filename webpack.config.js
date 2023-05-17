// import
const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

// export
module.exports = {
  resolve: {
    extensions: ['.js','.vue'], // js하고 vue 확장자 명시 안해주어도 에러 나지않음.
    alias: { // 경로 별칭
      '~': path.resolve(__dirname,'src'), // webpack.config.js 파일이 있는 주변에서 src라는 폴더명을 찾아줌
      'assets': path.resolve(__dirname, 'src/assets')
    }
  },

  entry: './src/main.js', // 파일을 읽어들이기 시작하는 진입점 설정.
  output: {  // 읽어들인 파일을 분석해서 결과물(번들)을 반환하는 설정  
    // path: path.resolve(__dirname, 'dist'), __dirname의 역할은 해당하는 파일의 실제 경로를 나타내는 nodejs의 전역 변수
    // filename: 'main.js',
    clean: true // 위에서 설정한 filename 제외하고 나머지 파일 정리해줌
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader' //원래는 ['vue-loader'] 이런식으로 배열데이터로 작성해야 하는데 로더가 1개인경우 없이 써도 사용가능.
      },
      {
        test: /\.s?css$/,
        use: [
          'vue-style-loader',
          // 'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        use: [
          'babel-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|webp)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  
  // 번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
  plugins: [
    new HtmlPlugin({
      template: './index.html'
    }),
    new CopyPlugin({
      patterns: [
        { from: 'static' }
      ]
    }),
    new VueLoaderPlugin()
  ],

  devServer: {
    host: 'localhost'
  }
}