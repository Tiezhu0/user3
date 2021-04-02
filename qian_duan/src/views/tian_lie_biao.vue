<template>
    <div class="container ml-4">
        <div class="row mt-3">
            <div class="left-k1">文章类型</div>
            <form name="1" method="get">
                <select id="province" name="province" class="form-control" v-model="lei_xing">
                    <option value="请选择文章类型" selected disabled>请选择文章类型</option>
                    <option value="系统文章">系统文章</option>
                </select>
            </form>
        </div>
        <div class="row mt-3">
            <div class="left-k1">文章标题</div>
            <input class="input-1" type="text" placeholder="请输入文章标题" v-model="biao_ti">
            <div class="zi-1">请输入文章标题</div>
        </div>
        <div class="row mt-3">
            <div class="left-k1">文章作者</div>
            <input class="input-1" type="text" placeholder="请输入文章作者">
            <div class="zi-1">请输入文章作者</div>
        </div>
        <div class="row mt-3">
            <div class="left-k1">文章来源</div>
            <input class="input-1" type="text" placeholder="请输入文章来源">
            <div class="zi-1">请输入文章来源</div>
        </div>
        <div class="row mt-3 w-25">
            <img src="../img/default.png" class="tu">
            <div class="progress mt-2 w-50" style="height: 20px">
                <div class="progress-bar  progress-bar-striped progress-bar-animated">0%</div>
            </div>
        </div>
        <div class="row mt-3">
            <div class="left-k1">文章摘要</div>
            <textarea class="input-1 w-25 form-control" type="text" placeholder="请输入文章摘要"></textarea>
            <div class="zi-1">请输入文章摘要</div>
        </div>
        <div class="row mt-3">
            <div class="left-k1">文章内容</div>
            <textarea class="input-1 w-25 form-control" type="text" placeholder="请输入文章内容"></textarea>
            <div class="zi-1">请输入文章内容</div>
        </div>
        <div class="row mt-3">
            <div class="left-k1">发布时间</div>
            <input class="input-1 form-control" type="date" placeholder="发布时间" v-model="fa_bu_shi_jian">
            <div class="zi-1">请输入发布时间</div>
        </div>
        <div class="row mt-3">
            <div class="left-k1">置顶</div>
            <div class="button-1 ml-2 mt-2">
                <label for="lok" class="">
                    <input type="radio" v-model="zhi_ding" value="可见" id="lok2" class="ml-2">
                    是
                </label>
                <label for="nok">
                    <input type="radio" v-model="zhi_ding" value="隐藏" id="nok2">
                    否
                </label>
            </div>
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
        <div class="col-12 mt-3">
            <button class="btn-1 btn btn-outline-primary" v-on:click="tian_jia">
                <span class="fa fa-save"></span>
                保存
            </button>
        </div>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "tian_lie_biao",
        data:function () {
            return{
                lei_xing:'',
                biao_ti:'',
                fa_bu_shi_jian:'',
                zhi_ding:'',
                zhuang_tai:''

            }
        },
        methods:{
            tian_jia:function () {
                // console.log(`http://localhost:2333/tian_jia_lie_biao/${this.lei_xing}/${this.biao_ti}/${this.fa_bu_shi_jian}/${this.zhi_ding}/${this.zhuang_tai}`);

                let  _this = this;
                axios.get(`http://localhost:2333/tian_jia_lie_biao/${this.lei_xing}/${this.biao_ti}/${this.fa_bu_shi_jian}/${this.zhi_ding}/${this.zhuang_tai}`)
                    .then(response=>{
                        alert('添加成功！！！')
                        _this.$router.push('/zhu_ye/xin_wen_lie_biao')
                    })
                    .catch(error=>{
                        console.log(`出现错误！！！错误是：${error}`)
                    })
            }
        }
    }

</script>

<style scoped>
    tbody{
        overflow-x: hidden;
        overflow-y: scroll;
    }
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
        width: 75%;
    }
    .tu{
        width: 100px;
        height: 100px;
    }
</style>