// 没有cli脚手架手动配置
const HtmlWebpackPlugin = require("html-Webpack-plugin");
module.exports = {
  //wbpack4.x之后新增的,"模式"
  mode: "development", //不会压缩,如果是production是会压缩的
  //入口
  entry: "./src/index",

  //出口 最终生成dist目录,开发阶段不需要配置
  module: {
    rules: [
      {
        test: /.jsx?$/, //匹配.js结尾或者jsx结尾的文件
        exclude: /(node_modules|bower_components)/, //不要第三方包,bower是国外用的modules
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react"] //把jsx转成浏览器能识别的es5代码
          }
        }
      },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
      {
        test: /\.less$/,
        use: [{
          loader: 'style-loader' // creates style nodes from JS strings
        }, {
          loader: 'css-loader' // translates CSS into CommonJS
        }, {
          loader: 'less-loader' // compiles Less to CSS
        }]
      }
    ]
  },
  resolve:{
    extensions:['.js','.jsx','.json'] //表示这几种文件的后缀名可以省略，按照从前到后的方式来进行补全
},
  // 浏览器渲染的模板到端口上,并且注入main.js的脚本
  plugins: [new HtmlWebpackPlugin({ template: "./public/index.html" })]
};
