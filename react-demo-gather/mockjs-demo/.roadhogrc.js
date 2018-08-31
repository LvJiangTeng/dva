export default {
  entry: "src/index.js",
  proxy:{
    // '/':{
    //   target:"http://localhost:8003",
    //   changeOrigin:true
    // }
  },
  env: {
    development: {
      extraBabelPlugins: [
        "dva-hmr",
        "transform-runtime",
        ["import", { "libraryName": "antd", "style": "css" }]
      ]
    },
    production: {
      extraBabelPlugins: [
        "transform-runtime",
        ["import", { "libraryName": "antd", "style": "css" }]
      ]
    }
  }
}
