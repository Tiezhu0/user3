<template>
    <div class="container-fluid">
        <table class="table">
            <tr>
                <td>序号</td>
                <td>
                    <input type="text" v-model="xu_hao">
                </td>
            </tr>
            <tr>
                <td>角色名称</td>
                <td>
                    <input type="text" v-model="ming_cheng">
                </td>
            </tr>
            <tr>
                <td>操作员数量</td>
                <td>
                    <input type="text" v-model="shu_liang">
                </td>
            </tr>
            <tr>
                <td>状态</td>
                <td>
                    <input type="text" v-model="zhuang_tai">
                </td>
            </tr>
            <tr>
                <td>
                    <button class="btn btn-primary" v-on:click="tian_jia">
                        提交
                    </button>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "zeng_jia_guan_li_yuan",
        data: function () {
            return {
                xu_hao:'',
                ming_cheng:'',
                shu_liang:'',
                zhuang_tai:''
            }
        },
        methods: {
            tian_jia: function () {
                let _this = this;
                axios.get(`http://localhost:2333/tian_jia_jue_se/${this.xu_hao}/${this.ming_cheng}/${this.shu_liang}/${this.zhuang_tai}`)
                    .then(response=>{
                        alert('添加成功！！！')
                        _this.$router.push('/zhu_ye/jue_se_biao')
                    })
                    .catch(error=>{
                        console.log(`出现错误！！！错误是：${error}`)
                    })
            }
        }
    }
</script>

<style scoped>

</style>