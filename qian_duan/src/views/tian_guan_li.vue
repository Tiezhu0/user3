<template>
    <div class="container-fluid ml-4">
        <div class="container">
            <div class="row mt-3">
                <div class="left-k1">登录账号</div>
                <input class="input-1" type="text" placeholder="请输入管理员登录账号" v-model="zhang_hao">
                <div class="zi-1">请输入管理员账号</div>
            </div>
            <div class="row mt-3">
                <div class="left-k1">登录密码</div>
                <input class="input-1" type="text" placeholder="请输入管理员登录密码" v-model="mi_ma">
                <div class="zi-1">请输入登录密码</div>
            </div>
            <div class="row mt-3">
                <div class="left-k1">确认密码</div>
                <input class="input-1" type="text" placeholder="再次确认密码" v-model="mi_ma">
                <div class="zi-1">确认密码</div>
            </div>
            <div class="row mt-3">
                <div class="left-k1">选择角色</div>
                <form name="form-1" action="" method="get">
                    <select id="province" name="province" class="lie-1 form-control" v-model="jue_se">
                        <option disabled>请选择角色</option>
                        <option value="系统管理员" selected>系统管理员</option>
                        <option value="超级管理员" selected>超级管理员</option>
                    </select>
                </form>
                <div class="zi-1">请选择管理员选择角色</div>
            </div>
            <div class="row mt-3">
                <div class="left-k1">姓名</div>
                <input class="input-1" type="text" placeholder="请输入管理员姓名" v-model="ming_cheng">
                <div class="zi-1">请输入管理员姓名</div>
            </div>
            <div class="row mt-3">
                <div class="left-k1">手机号</div>
                <input class="input-1" type="text" placeholder="请输入手机号" v-model="dian_hua">
                <div class="zi-1">请输入管理员手机号</div>
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
            <button class="btn-1 btn btn-outline-primary  w-75" v-on:click="tian_jia">
                <span class="fa fa-save"></span>
                保存
            </button>
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    export default {
        name: "tian_guan_li",

        data:function () {
            return{
                zhang_hao:'',
                mi_ma:'',
                jue_se:'',
                ming_cheng:'',
                dian_hua:'',
                zhuang_tai:''
            }
        },
        methods:{
            tian_jia:function () {
                let  _this = this;
                axios.get(`http://localhost:2333/tian_jia_guan_li/${this.zhang_hao}/${this.mi_ma}/${this.jue_se}/${this.ming_cheng}/${this.dian_hua}/${this.zhuang_tai}`)
                    .then(response=>{

                        alert('添加成功！！！')
                        _this.$router.push('/zhu_ye/guan_li_biao')
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
    }
</style>