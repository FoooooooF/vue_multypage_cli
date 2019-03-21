<template>
    <div>
        <h2>hello</h2>    
        <p>{{page}}
            <i>about page</i>
        </p>
        <img src="../img/cd0bb358c45b584743d8ce4991777c42.svg" alt="">
    </div>
</template>
<script>
export default {
    name:"about",
    data(){
        return {
            page:"index"
        }
    },
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


