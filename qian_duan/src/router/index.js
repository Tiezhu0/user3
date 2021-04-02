import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'
import zhu_ye from '../views/zhu_ye.vue'
import jue_se_biao from "../views/jue_se_biao";
import guan_li_biao from "../views/guan_li_biao";
import tian_jia_guan_li from "../views/tian_jia_guan_li";
import tian_guan_li from "../views/tian_guan_li";
import xiu_gai_guan_li from "../views/xiu_gai_guan_li";
import xiu_gai_jue_se from "../views/xiu_gai_jue_se";
import xin_wen_lei_xing from "../views/xin_wen_lei_xing";
import tian_lei_xing from "../views/tian_lei_xing";
import xiu_gai_lei_xing from "../views/xiu_gai_lei_xing";
import xin_wen_lie_biao from "../views/xin_wen_lie_biao";
import tian_lie_biao from "../views/tian_lie_biao";
import xiu_gai_lie_biao from "../views/xiu_gai_lie_biao";


const routes = [
  {
    path: '/',
    name: 'zhu_ye',
    component: zhu_ye
  },
  {
    path: '/zhu_ye',
    name: 'zhu_ye',
    component: zhu_ye,
    children:[
      {
        path:'jue_se_biao',
        component:jue_se_biao
      },
      {
        path: 'guan_li_biao',
        component: guan_li_biao
      },
      {
        path: 'tian_jia_guan_li',
        component:tian_jia_guan_li
      },
      {
        path: 'tian_guan_li',
        component:tian_guan_li
      },
      {
        path: 'xiu_gai_guan_li',
        component: xiu_gai_guan_li
      },
      {
        path:'xiu_gai_jue_se',
        component: xiu_gai_jue_se
      },
      {
        path: 'xin_wen_lei_xing',
        component: xin_wen_lei_xing
      },
      {
        path:'tian_lei_xing',
        component: tian_lei_xing
      },
      {
        path:'xiu_gai_lei_xing',
        component: xiu_gai_lei_xing
      },
      {
        path: 'xin_wen_lie_biao',
        component: xin_wen_lie_biao
      },
      {
        path: 'tian_lie_biao',
        component: tian_lie_biao
      },
      {
        path: 'xiu_gai_lie_biao',
        component: xiu_gai_lie_biao
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
