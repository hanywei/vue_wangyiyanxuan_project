const px2rem = require('postcss-px2rem')
const path = require('path')
function resolve (dir) {
    return path.join(__dirname, dir)
}
const postcss = px2rem({
    remUnit: 75   //remUnit = 设计稿/等分数10， 网易严选首页750宽，正好相当于是设计稿宽度，所以值为750/10 = 75
  })
  module.exports = {
    css: {
      loaderOptions: {
        postcss: {
          plugins: [
            postcss
          ]
        }
      }
    },
    lintOnSave:false,
    devServer:{
      open:true,
      proxy: 'http://localhost:4001'
  },
}