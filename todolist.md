#  vue webapck build todolist
- 需要babel-loader转译ES6 √
  - (js加入babel babel-laoder babel-preset-2015 babel-preset-stag3  babel-preset-env)
    ```
    npm install babel-loader babel-core babel-preset-env
    ```
- 打包文件路径控制
-使用 url-loader 替换file-loader √
  - url-loader 包含了file-loader,直接替换为url-loader 
  - remove "file-loader": "^3.0.1"
- 加载vue文件 vue-loader √
  - 安装loader
  ```
  npm install vue vue-loader vue-style-laoder vue-template-compiler
  ```
  - webpack.base.js 配置 vue从Compiler版本修改为Runtime版本
    ```
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    }
    ```
## 下一步主要工作
- 使用 CommonsChunkPlugin 抽取公共模块进行打包 
- 使用tree shaking 精简打包大小
- 优化构建速度和提示





  