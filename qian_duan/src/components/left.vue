<template>
    <div class="left">
        <div id="accordion">
            <div class="card">
                <div class="card-header" id="headingOne">
                    <h5 class="mb-0">
                        <button v-on:click="dian_ji(1)" class="btn btn-link" data-toggle="collapse"
                                data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            管理员设置
                            <span class="float-right fa" v-bind:class="shang"></span>
                        </button>
                    </h5>
                </div>
                <div id="collapseOne" class="collapse show" aria-labelledby="headingOne"
                     data-parent="#accordion">
                    <div class="card-body">
                        <router-link to="/zhu_ye/guan_li_biao" class="xiao_guo">管理员列表</router-link>
                    </div>
                    <div class="card-body">
                        <router-link to="/zhu_ye/jue_se_biao" class="xiao_guo">角色列表</router-link>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header" id="headingTwo">
                    <h5 class="mb-0">
                        <button v-on:click="dian_ji(2)" class="btn btn-link collapsed" data-toggle="collapse"
                                data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            新闻管理
                            <span class="float-right fa" v-bind:class="xia"></span>
                        </button>
                    </h5>
                </div>
                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo"
                     data-parent="#accordion">
                    <div class="card-body">
                        <router-link to="/zhu_ye/xin_wen_lei_xing">新闻类型</router-link>
                    </div>
                    <div class="card-body">
                        <router-link to="/zhu_ye/xin_wen_lie_biao">新闻列表</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "left.vue",
        data: function () {
            return {
                shang: 'fa-caret-up',
                xia: 'fa-caret-down'
            }
        },
        methods: {
            dian_ji: function (i) {
                if(i === 1) {
                    //表示上面的那个小三角箭头
                    if(this.shang === 'fa-caret-up')
                        this.shang = 'fa-caret-down'
                    else
                        this.shang = 'fa-caret-up';
                }
                else {
                    //表示上面的那个小三角箭头
                    if(this.xia === 'fa-caret-up')
                        this.xia = 'fa-caret-down'
                    else
                        this.xia = 'fa-caret-up';
                }
            }
        }
    }
</script>

<style scoped>
    .left {
        height: 100vh;
        width: 192px;
        position: fixed;
        background-color: #8AB3B7;
        color: white;
    }
    .card-header {
        background-color:#8AB3B7;
        border:none;
        padding: 0;
        transition: all 0.5s ease 0s;
    }
    .card-header button {
        color: white;
        text-decoration:none;
        width: 100%;
        height: 100%;
        text-align: left;
    }
    .card-header:hover {
        background-color: black;
    }
    .card-body {
        background-color: #64868B;
        padding: 10px;
    }
    .card-body a {
        color: white;
        text-decoration: none;
        display: block;
    }
    .xiao_guo:hover{
        color: #6610f2;
        display: block;
    }
</style>