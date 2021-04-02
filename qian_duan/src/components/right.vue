<template>
        <div class="right">
            <router-view></router-view>
        </div>
</template>

<script>
    export default {
        name: "right.vue"
    }
</script>

<style scoped>
    .right {
        height: 100vh;
        width: 75vw;
        position: fixed;
        z-index: -100;
        right: 0;
        background-color: white;
        color: white;
    }
    .lie-1{
        line-height:50px;
    }
    .tab-1{
        margin-right: 100px;
    }
    .btn-1{
        height: auto;
        width: auto;
    }
    .tou-1{
        margin-left: 300px;
        width: auto;
        height: 50px;
        line-height: 50px;
    }
</style>