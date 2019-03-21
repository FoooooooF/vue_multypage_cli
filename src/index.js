import Bar from './bar.js' //加载js文件
import Data from "./data/data.json"; //加载js文件
import "./css/common.less"; //less less-loader css-loader style-loader file-loader(css中的图片,字体文件)
Bar();
console.log("webpack-server")
console.log(Data)