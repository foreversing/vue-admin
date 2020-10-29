function getIPAdress(){
  var interfaces = require('os').networkInterfaces();
  for(var devName in interfaces){
    var iface = interfaces[devName];
    for(var i=0;i<iface.length;i++){
      var alias = iface[i];
      if(alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal){
        return alias.address;
      }
    }
  }
}
module.exports = {
  // baseUrl: process.env.NODE_ENV === 'production' ? '/online/' : '/',
    publicPath:'./',//vue-cli3.3+新版本使用
    // eslint-loader 是否在保存的时候检查
    lintOnSave: true,
    //放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
    assetsDir: 'static',
    //生产环境是否生成 sourceMap 文件，一般情况不建议打开
  productionSourceMap: false,
  css:{
        // 是否使用css分离插件
        extract: true,
        // 开启 CSS source maps，一般不建议开启
        sourceMap: false,
    },
  devServer: {
    port: 1818, // 端口号
    host: getIPAdress(),
    https: false, // https:{type:Boolean}
    open: false, //配置自动启动浏览器
    compress: true,//配置热更新
    // proxy: {
    //   '/api': {
    //     target: 'http://image.hn8718.com:8777', //API服务器的地址
    //     ws: true, //代理websockets
    //     changeOrigin: true, // 虚拟的站点需要更管origin
    //     pathRewrite: {  //重写路径 比如'/api/aaa/ccc'重写为'/aaa/ccc'
    //       '^/api': ''
    //     }
    //   }
    // },//跨域
  },
 
}  