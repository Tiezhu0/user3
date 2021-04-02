<template>
    <div class="container">
        <div class="col-12 mt-4">
            <div class="tou-1 border-bottom text-break">
                <a href="#"  class="mr-3">管理员设置————</a>
                <span class="zi-1">角色列表</span>
            </div>
        </div>
        <div class="mt-4 ml-3 row">
            <form name="form-1" action="" method="get">
                <select id="province" name="province" onChange="set_city();" class="lie-1 form-control">
                    <option value="0" disabled>请选择搜索的角色信息</option>
                    <option value="系统管理员" selected>系统管理员</option>
                    <option value="超级管理员" selected>超级管理员</option>
                </select>
            </form>
            <div>
                <button class="btn btn-outline-dark btn-1 ml-3"><i class="fa fa-search"></i></button>
            </div>
            <div class="btn-2">
                <button class="btn btn-outline-dark btn-2 w-auto h-auto" v-on:click="zeng_jia">
                    添加管理员
                </button>
            </div>
        </div>
        <div class="tab-1">
            <table class="table table-hover table-bordered mt-5 mr-5">
                <thead>
                <tr class="table-active">
                    <th>序号</th>
                    <th>管理员名称</th>
                    <th>管理员电话</th>
                    <th>管理员账号</th>
                    <th>管理员角色</th>
                    <th>状态</th>
                    <th>管理</th>
                </tr>
                </thead>
                <tbody>
                <tr class="lie-1" v-for="yuan_su in shu_zu">
                    <td>{{yuan_su.xu_hao}}</td>
                    <td>{{yuan_su.ming_cheng}}</td>
                    <td>{{yuan_su.dian_hua}}</td>
                    <td>{{yuan_su.zhang_hao}}</td>
                    <td>{{yuan_su.jue_se}}</td>
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
        name: "guan_li_biao",
        data:function () {
            return{
                shu_zu:[]
            }
        },
        methods:{
            zeng_jia:function () {
                this.$router.push('/zhu_ye/tian_guan_li');
            },
            xiu_gai:function(xu_hao){
                this.$router.push(`/zhu_ye/xiu_gai_guan_li?xu_hao=${xu_hao}`);
            },
            shan_chu:function(xu_hao){
                axios.get(`http://localhost:2333/shan_chu_guan_li/${xu_hao}`)
                .then(response=>{
                    if(response.statusText === 'OK'){
                        this.$router.go('/zhu_ye/guan_li_biao');
                    }
                })
                .catch(error=>{
                    console.log(`出现错误！！！错误是：${error}`)
                })
            }
        },

        mounted:function () {
            axios.get('http://localhost:2333/guan_li_biao')
            .then(response=>{
                // console.log(response);
                for(let i = 0; i < response.data.length; i++){
                    let shu_ju = {
                        xu_hao:'',
                        ming_cheng:'',
                        dian_hua:'',
                        zhang_hao:'',
                        shu_liang:'',
                        jue_se:'',
                        zhuang_tai:''
                    };
                    shu_ju.xu_hao = response.data[i].xu_hao;
                    shu_ju.ming_cheng = response.data[i].ming_cheng;
                    shu_ju.dian_hua = response.data[i].dian_hua;
                    shu_ju.zhang_hao = response.data[i].zhang_hao;
                    shu_ju.shu_liang = response.data[i].shu_liang;
                    shu_ju.jue_se = response.data[i].jue_se;
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