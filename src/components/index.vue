<template>
    <div>
        <h2>hello</h2>    
        <p>{{page}}</p>
    </div>
</template>
<script>
export default {
    name:"index",
    data(){
        return {
            page:"index"
        }
    }
}
</script>
<style lang="less" scoped>
    p{
        color: red;
    }
</style>


