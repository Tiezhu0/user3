<template>
    <div class="">
        <div class="tou-1 border-bottom text-break">
            <a href="#"  class="mr-3">管理员设置————</a>
            <span class="zi-1">角色列表</span>
        </div>
        <div class="an_niu mt-3">
            <button class="btn btn-outline-dark btn-2 w-auto h-auto" v-on:click="zeng_jia">
                添加角色
            </button>
        </div>
        <div class="tab-1">
            <table class="table table-hover  table-bordered mt-5  mr-5">
                <thead>
                <tr class="table-active">
                    <th>序号</th>
                    <th>角色名称</th>
                    <th>操作员数量</th>
                    <th>状态</th>
                    <th>管理</th>
                </tr>
                </thead>
                <tbody>
                <tr class="lie-1" v-for="yuan_su in shu_zu">
                    <td>{{yuan_su.xu_hao}}</td>
                    <td>{{yuan_su.ming_cheng}}</td>
                    <td>{{yuan_su.shu_liang}}</td>
                    <td>{{yuan_su.zhuang_tai}}</td>
                    <td>
                        <button class="btn-1 btn btn-outline-primary" v-on:click="xiu_gai(yuan_su.xu_hao)">
                            <span class="fa fa-pencil"></span>
                            编辑
                        </button>
                        <button class="btn-1 btn btn-outline-danger ml-3" v-on:click="shan_chu(yuan_su.xu_hao)">
                            <span class="fa fa-trash"></span>
                            删除
                        </button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import  axios from 'axios';

    export default {
        name: "jue_se_biao",
        data:function () {
            return {
                shu_zu:[]
            }
        },
        methods: {
            zeng_jia: function () {
                this.$router.push('/zhu_ye/tian_jia_guan_li');
            },
            xiu_gai:function(xu_hao){
                this.$router.push(`/zhu_ye/xiu_gai_jue_se?xu_hao=${xu_hao}`);
            },
            shan_chu:function(xu_hao){
                axios.get(`http://localhost:2333/shan_chu_jue_se/${xu_hao}`)
                    .then(response=>{
                        if(response.statusText === 'OK'){
                            this.$router.go('/zhu_ye/jue_se_biao');
                        }
                    })
                    .catch(error=>{
                        console.log(`出现错误！！！错误是：${error}`)
                    })
            }
        },
        mounted:function() {
            axios.get('http://localhost:2333/jue_se_biao')
            .then(response=>{
                for (let i = 0; i < response.data.length; i++){
                    let shu_ju = {
                        xu_hao:'',
                        ming_cheng:'',
                        shu_liang:'',
                        zhuang_tai:''
                    };
                    shu_ju.xu_hao = response.data[i].xu_hao;
                    shu_ju.ming_cheng = response.data[i].ming_cheng;
                    shu_ju.shu_liang = response.data[i].shu_liang;
                    shu_ju.zhuang_tai = response.data[i].zhuang_tai;
                    this.shu_zu.push(shu_ju);
                }
            })
            .catch(error=>{
                console.log(`出现错误！！！错误是：${error}`)
            })
        }
    }
</script>

<style scoped>
    .lie-1{
        line-height:50px;
    }
    .tab-1{
        margin-right:300px;
        margin-left: auto;
    }
    .btn-1{
        height: auto;
        width: auto;
    }
    .tou-1{
        width: auto;
        color: #5a6268;
        height: 50px;
        line-height: 50px;
    }
    .zi-1{
        color: black;
    }
</style>