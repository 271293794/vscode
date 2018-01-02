import Vue from 'vue'
import Router from 'vue-router'
import rank from 'c/rank/rank'
import search from 'c/search/search'
import singer from 'c/singer/singer'
import recommend from 'c/recommend/recommend'


Vue.use(Router)

export default new Router({
  routes: [
    // 默认页面
    {
      path: '/',
      redirect: '/recommend'
    },
    // 推荐页面
    {
      path: '/recommend',
      component: recommend
    },
    // 歌手页面
    {
      path: '/singer',
      component: singer
    },
    // 搜索页面
    {
      path: '/search',
      component: search
    },
    // 排名页面
    {
      path: '/rank',
      component: rank
    },
  ]
})
