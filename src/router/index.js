import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import myMain from '@/components/myMain.vue'
import myTable from '@/components/myTable.vue'
import myForm from '@/components/myForm.vue'
import user from '@/components/user.vue'
import login from '@/components/login.vue'
import manage from '@/components/manage.vue'

import page1 from '@/components/page1.vue'
import page2 from '@/components/page2.vue'
import page3 from '@/components/page3.vue'
import page4 from '@/components/page4.vue'
import page5 from '@/components/page5.vue'

Vue.use(Router)

Vue.component('MyComponentA', {
  template: '<h1>我的全局组件A,注册名称为：MyComponentA<div>大家好</div></h1>'
})

Vue.component('my-component-b', {
  template: '<h3>我的全局组件B，注册名称为：my-component-b</h3>'
})

Vue.component('MyComponentE', {
  props: ['title'],
  template: '<h3>{{title}}</h3>'
})

Vue.component('MyComponentF', {
  props: ['MyTitle'],
  template: '<h3>{{MyTitle}}</h3>'
})

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login,
      hidden: true
    },
    {
      path: '/manage',
      name: 'manage',
      component: manage,
      hidden: true
    },
    {
      path: '/',
      component: home,
      name: '导航一',
      iconCls: 'el-icon-message',
      children: [
        { path: '/myMain', component: myMain, name: '主页' },
        { path: '/myTable', component: myTable, name: 'Table' },
        { path: '/myForm', component: myForm, name: 'Form' },
        { path: '/user', component: user, name: '列表' }
      ]
    },
    {
      path: '/',
      component: home,
      name: '组件学习',
      iconCls: 'fa fa-id-card-o',
      children: [
        { path: '/page1', component: page1, name: '组件注册' },
        { path: '/page2', component: page2, name: '组件的传值' },
        { path: '/page3', component: page3, name: '组件的事件' },
        { path: '/page4', component: page4, name: '组件-插槽' },
        { path: '/page5', component: page5, name: '组件' }
      ]
    }
  ]
})
