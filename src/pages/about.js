import Vue from "vue";
import App from './about.vue'
import "../css/common.less"; //less less-loader css-loader style-loader file-loader(css中的图片,字体文件)
new Vue({
    el: '#app',
    template: '<App/>',
    components: {
        App
    }
})