import Vue from 'vue'
import Router from 'vue-router'
import login from '@/views/login/index.vue'
import register from '@/views/register/index.vue'
import home from '@/views/home/index.vue'
import projectManagement from '@/views/projectManagement/index.vue'
import repository from '@/views/repository/index.vue'
import error404 from '@/views/404/index.vue'
import test from '@/views/test/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      redirect: '/login',
      hidden: true
    },
    {
      path: '/login',
      component: login,
      name: 'login',
      hidden: true,
      meta: { title: '登录'}
    },
    {
      path: '/register',
      component: register,
      name: 'register',
      hidden: true,
      meta: { title: '注册'}
    },
    {
      path: '*',
      component: error404,
      name: '404',
      hidden: true,
      meta: { title: '404'}
    },
    {
      path: "/home",
      redirect: '/home/projectManagement',
      hidden: true
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      children:[
        {
          path:'projectManagement',
          name:'projectManagement',
          component:projectManagement,
          meta: { title: '项目管理', icon: 'fa fa-database' }
        },
        {
          path:'repository',
          name:'repository',
          component:repository,
          meta: { title: '知识库', icon: 'fa fa-book' }
        },
        {
          path:'test',
          name:'测试二级菜单',
          component:test,
          meta: { title: '测试二级菜单', icon: 'fa fa-align-justify' },
          children:[
            {
              path:'test',
              name:'test1',
              component:test,
              meta: { title: 'test1', icon: 'fa fa-align-justify' }
            },
            {
              path:'test2',
              name:'test2',
              component:() => import('@/views/test/index'),
              meta: { title: 'test2', icon: 'fa fa-align-justify' }
            },
            {
              path:'https://www.baidu.com/',
              name:'test2',
              component:test,
              meta: { title: '外链', icon: 'fa fa-align-justify' }
            }
          ]
        }
      ]
    }
  ]
})
