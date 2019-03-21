#  vue webapck build todolist
- 需要babel-loader √
  - (js加入babel babel-laoder babel-preset-2015 babel-preset-stag3  babel-preset-env)
    ```
    npm install babel-loader babel-core babel-preset-env webpack
    ```
- 打包文件路径控制
- url-loader使用 替换file-loader √
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





  