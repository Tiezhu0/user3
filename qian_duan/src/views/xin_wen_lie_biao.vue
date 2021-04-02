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
                    <option value="0" selected disabled>请选择新闻类型</option>
                    <option value="国内">国内</option>
                </select>
            </form>
            <div><input class="date-1 ml-4 form-control" type="date" value="2020-09-29"></div>
            <div><input class="date-1  form-control" type="date" value="2020-09-29"></div>
            <div>
                <button class="btn btn-outline-dark btn-1 ml-3"><i class="fa fa-search"></i></button>
            </div>
        </div>
        <div class="btn-2">
            <button class="btn btn-outline-dark btn-2 w-auto h-auto" v-on:click="zeng_jia">
                添加新闻
            </button>
        </div>
        <div class="tab-1">
            <table class="table table-hover table-bordered mt-5 mr-5">
                <thead>
                <tr class="table-active">
                    <th>ID</th>
                    <th>文章标题</th>
                    <th>文章类型</th>
                    <th>文章封面</th>
                    <th>点击数</th>
                    <th>排序值</th>
                    <th>置顶</th>
                    <th>状态</th>
                    <th>发布时间</th>
                    <th>管理</th>
                </tr>
                </thead>
                <tbody>
                <tr class="lie-1" v-for="yuan_su in shu_zu">
                    <td>{{yuan_su.ID}}</td>
                    <td>{{yuan_su.biao_ti}}</td>
                    <td>{{yuan_su.lei_xing}}</td>
                    <td class="header-1"><img src="../img/default.png" class=""></td>
                    <td>{{yuan_su.dian_ji_shu}}</td>
                    <td>{{yuan_su.pai_xu_zhi}}</td>
                    <td>{{yuan_su.zhi_ding}}</td>
                    <td>{{yuan_su.zhuang_tai}}</td>
                    <td>{{yuan_su.fa_bu_shi_jian}}</td>
                    <td>
                        <button class="btn-1 btn btn-outline-primary" v-on:click="xiu_gai(yuan_su.ID)">
                            <span class="fa fa-pencil"></span>
                            编辑
                        </button>
                        <button class="btn-1 btn btn-outline-danger ml-3" v-on:click="shan_chu(yuan_su.ID)">
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
        name: "xin_wen_lie_biao",
        data:function () {
            return{
                shu_zu:[]
            }
        },
        methods:{
            zeng_jia:function () {
                this.$router.push('/zhu_ye/tian_lie_biao');
            },
            xiu_gai:function(ID){
                this.$router.push(`/zhu_ye/xiu_gai_lie_biao?ID=${ID}`);
            },
            shan_chu:function(ID){
                axios.get(`http://localhost:2333/shan_chu_lie_biao/${ID}`)
                    .then(response=>{
                        if(response.statusText === 'OK'){
                            this.$router.go('/zhu_ye/xin_wen_lie_biao');
                        }
                    })
                    .catch(error=>{
                        console.log(`出现错误！！！错误是：${error}`)
                    })
            }
        },
        mounted:function () {
            axios.get('http://localhost:2333/xin_lie_biao')
                .then(response=>{
                    // console.log(response);
                    for(let i = 0; i < response.data.length; i++){
                        let shu_ju = {
                            ID:'',
                            biao_ti:'',
                            lei_xing:'',
                            dian_ji_shu:'',
                            pai_xu_zhi:'',
                            zhi_ding:'',
                            zhuang_tai:'',
                            fa_bu_shi_jian:''
                        };
                        shu_ju.ID = response.data[i].ID;
                        shu_ju.biao_ti = response.data[i].biao_ti;
                        shu_ju.lei_xing = response.data[i].lei_xing;
                        shu_ju.dian_ji_shu = response.data[i].dian_ji_shu;
                        shu_ju.pai_xu_zhi = response.data[i].pai_xu_zhi;
                        shu_ju.zhi_ding = response.data[i].zhi_ding;
                        shu_ju.zhuang_tai = response.data[i].zhuang_tai;
                        shu_ju.fa_bu_shi_jian = response.data[i].fa_bu_shi_jian;
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
        line-height:45px;
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
    .header-1 img{
        width: 45px;
        height: 45px;
        margin-left: auto;
        margin-right: auto;
    }
</style>