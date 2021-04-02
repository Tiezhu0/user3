<template>
    <div class="container">
        <div class="col-12 mt-4">
            <div class="tou-1 border-bottom text-break">
                <a href="#"  class="mr-3">新闻管理————</a>
                <span class="zi-1">新闻类型</span>
            </div>
        </div>
        <div class="btn-2 mt-3">
            <button class="btn btn-outline-dark btn-2 w-auto h-auto" v-on:click="zeng_jia">
                添加新闻类型
            </button>
        </div>
        <div class="tab-1">
            <table class="table table-hover table-bordered mt-5 mr-5">
                <thead>
                <tr class="table-active">
                    <th>序号</th>
                    <th>类型名称</th>
                    <th>同类型的新闻发布数量</th>
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
        name: "xin_wen_lei_xing",
        data:function () {
            return{
                shu_zu:[]
            }
        },
        methods:{
            zeng_jia:function () {
                this.$router.push('/zhu_ye/tian_lei_xing');
            },
            xiu_gai:function(xu_hao){
                this.$router.push(`/zhu_ye/xiu_gai_lei_xing?xu_hao=${xu_hao}`);
            },
            shan_chu:function(xu_hao){
                axios.get(`http://localhost:2333/shan_chu_lei_xing/${xu_hao}`)
                    .then(response=>{
                        if(response.statusText === 'OK'){
                            this.$router.go('/zhu_ye/xin_wen_lei_xing');
                        }
                    })
                    .catch(error=>{
                        console.log(`出现错误！！！错误是：${error}`)
                    })
            }
        },
        mounted:function() {
            axios.get('http://localhost:2333/xin_lei_xing')
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
    .btn-2{
        margin-top: 20px;
        margin-right: 400px;
    }
    .lie-1{
        line-height:50px;
    }
    .tab-1{
        margin-right:220px;
        margin-left: auto;
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