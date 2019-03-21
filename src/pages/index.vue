<template>
    <div>
        <h2>hello</h2>    
        <p>{{page}}
            <i>112</i>
        </p>
        <img src="../img/cd0bb358c45b584743d8ce4991777c42.svg" alt="">
        <v-index />
    </div>
</template>
<script>
import index from '../components/index.vue'
export default {
    name:"index",
    data(){
        return {
            page:"index"
        }
    },
    components:{
        'v-index':index
    }
}
</script>
<style lang="less" scoped>
h2{
    color: blue;
    background: url('../img/cd0bb358c45b584743d8ce4991777c42.svg') no-repeat;
}
p{
    color: red;
    i{
        color: aqua
    }
}
</style>


