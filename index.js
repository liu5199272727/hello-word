import Vue from 'vue'
import Router from 'vue-router'
import PatrolLine from '@/components/ZhongLian/PatrolLine.vue'
import PatrolPoint from '@/components/ZhongLian/Patrolpoint.vue'
import PatrolPlan from '@/components/ZhongLian/Patrolplan.vue'
import TaskPlan from '@/components/ZhongLian/TaskPlan.vue'
import Search from '@/components/ZhongLian/Search.vue'
import DepartmentSetting from '@/components/ZhongLian/departmentsetting.vue'
import RoleSetting from '@/components/ZhongLian/rolesetting.vue'
import UserSetting from '@/components/ZhongLian/usersetting.vue'
import PatrolRecord from '@/components/ZhongLian/patrolrecord.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '巡检线路',
      component: PatrolLine
    },
    {
      name: '巡检点',
      path: 'patrolpoint',
      component: PatrolPoint
    },
    {
      name: '巡检计划',
      path: 'patrolplan',
      component: PatrolPlan
    },
    {
      name: '任务安排',
      path: 'taskplan',
      component: TaskPlan
    },
    {
      name: '查询统计',
      path: 'Search',
      component: Search
    },
    {
      name: '部门设置',
      path: 'DepartmentSetting',
      component: DepartmentSetting
    },
    {
      name: '角色设置',
      path: 'RoleSetting',
      component: RoleSetting
    },
    {
      name: '用户设置',
      path: 'UserSetting',
      component: UserSetting
    },
    {
      name: '巡检记录',
      path: 'PatrolRecord',
      component: PatrolRecord
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
