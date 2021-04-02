<template>
    <div>
        <div class="container-fluid">
            <div class="container ml-3">
                <div class="row mt-3">
                    <div class="left-k1">新闻类型...</div>
                    <input class="input-1" type="text" v-model="ming_cheng" placeholder="请输入新闻类型名称">
                    <div class="zi-1">请输入新闻类型名称</div>
                </div>
                <div class="row mt-3">
                    <div class="left-k1">状态</div>
                    <div class="button-1 ml-2 mt-2">
                        <label for="lok" class="">
                            <input type="radio" v-model="zhuang_tai" value="可见" id="lok" class="ml-2">
                            可见
                        </label>
                        <label for="nok">
                            <input type="radio" v-model="zhuang_tai" value="隐藏" id="nok">
                            隐藏
                        </label>
                    </div>
                </div>
            </div>
            <div class="col-12 mt-3">
                <button class="btn-1 btn btn-outline-primary" v-on:click="tian_jia">
                    <span class="fa fa-save"></span>
                    保存
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "tian_lei_xing",
        data: function () {
            return {
                ming_cheng:'',
                zhuang_tai:''
            }
        },
        methods: {
            tian_jia: function () {
                let _this = this;
                axios.get(`http://localhost:2333/tian_jia_lei_xing/${this.ming_cheng}/${this.zhuang_tai}`)
                    .then(response=>{
                        alert('添加成功！！！')
                        _this.$router.push('/zhu_ye/xin_wen_lei_xing')
                    })
                    .catch(error=>{
                        console.log(`出现错误！！！错误是：${error}`)
                    })
            }
        }
    }
</script>

<style scoped>
    .left-k1{
        background-color: #fbfbfb;
        width: 100px;
        border: solid 1px #d2d2d2;
        text-align: center;
        height: 40px;
        line-height: 40px;
        color: black;
    }
    .button-1{
        width: 200px;
        color: black;
    }
    .zi-1{
        margin-left: 10px;
        line-height: 40px;
        color: black;
    }
    .btn-1{
        width: 100%;
    }
</style>