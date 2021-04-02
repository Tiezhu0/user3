<template>
    <div class="container-fluid app">
        <div class="row">
            <div class="font-weight-bold text-white">
                欢迎进入新闻管理系统网站
            </div>
            <div class="ml-5 ">
                <div class="text-white admin">
                    <img src="../img/logins.png" >
                    Admin
                </div>
            </div>
            <div class="ml-auto mr-3 text-white shou_ye">
                网站首页
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "top.vue"
    }
</script>

<style scoped>
    .app{
        width: 100%;
        height: 50px;
        background-color: #64868b;
        line-height: 50px;
    }
    img{
        width: 20px;
    }
    .admin{
        height: 50px;
        border-bottom: solid 3px #81eae9;
    }
    .shou_ye{
        height: 50px;
        border-bottom: solid 3px #81eae9;
    }
</style>