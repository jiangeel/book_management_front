import Vue from 'vue'
import Router from 'vue-router'
/* Layout */

Vue.use(Router)

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    // component: Layout,
    redirect: '/views',
    children: [{
      path: 'dashboard',
      component: () => import('@/views/index'),
      name: 'dashboard',
      meta: { title: '首页', icon: 'dashboard' },
    }],
  },


]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
// export const asyncRoutes = [
//   {
//     path: '/etl_test',
//     component: Layout,
//     redirect: '/etl_test/JobList',
//     name: 'ETL_TEST',
//     alwaysShow: true,
//     meta: {
//       title: 'ETL标准作业测试-新',
//       icon: 'el-icon-s-data',
//       roles: ['taskinfo.visit']
//     },
//     children: [
//       {
//         path: 'JobList',
//         component: () => import('@/views/etl_test/JobList'),
//         meta: { title: '测试作业' },
//       },
//       {
//         path: 'ProjectList',
//         component: () => import('@/views/etl_test/ProjectList'),
//         meta: { title: '项目配置' }
//       },
//       {
//         path: 'DatabaseList',
//         component: () => import('@/views/etl_test/DatabaseList'),
//         meta: { title: '数据库配置' }
//       },
//       {
//         path: 'PdmList',
//         component: () => import('@/views/etl_test/PdmList'),
//         meta: { title: 'PDM配置' }
//       },
//       {
//         path: 'VerifyItemList',
//         component: () => import('@/views/etl_test/VerifyItemList'),
//         meta: { title: '验证项配置' }
//       }
//     ]
//   },
//   {
//     path: '/etl',
//     component: Layout,
//     redirect: '/etl/etl_index',
//     name: 'ETL',
//     meta: {
//       title: 'ETL标准作业测试',
//       icon: 'el-icon-s-data',
//       roles: ['taskinfo.visit']
//     },
//     children: [
//       {
//         path: 'etl_index',
//         component: () => import('@/views/etl/etl_index'),
//         meta: { title: 'ETL标准作业测试' },
//       },
//       {
//         path: 'etl_result',
//         hidden: true,
//         component: () => import('@/views/etl/etl_result'),
//         meta: { title: 'ETL测试结果' }
//       },
//       {
//         path: 'etl_log',
//         hidden: true,
//         component: () => import('@/views/etl/etl_log'),
//         meta: { title: 'ETL测试日志' }
//       }
//     ]
//   },
//
//   {
//     path: '/sql',
//     component: Layout,
//     redirect: '/sql/sql_case',
//     name: 'SQL',
//     alwaysShow: true,
//     meta: {
//       title: '数据一致性比对',
//       icon: 'el-icon-c-scale-to-original',
//       roles: ['sql_test.visit']
//     },
//     children: [
//       {
//         path: 'sql_case',
//         component: () => import('@/views/sql/sql_case'),
//         meta: {
//           title: '比对用例',
//           // roles: ['admin.visit_sql_case']
//         },
//       },
//       {
//         path: 'sql_result',
//         hidden: true,
//         component: () => import('@/views/sql/sql_result'),
//         meta: { title: '比对用例执行结果' }
//       },
//       {
//         path: 'sql_log',
//         hidden: true,
//         component: () => import('@/views/sql/sql_log'),
//         meta: { title: '比对用例执行日志' }
//       },
//
//       {
//         path: 'sql_case_chart',
//         hidden: true,
//         component: () => import('@/views/sql/sql_case_chart'),
//         meta: { title: '比对用例图表' }
//       },
//       {
//         path: 'sql_task',
//         component: () => import('@/views/sql/sql_task'),
//         meta: {
//           title: '比对任务',
//         }
//       },
//       {
//         path: 'sql_task_edit',
//         hidden: true,
//         component: () => import('@/views/sql/sql_task_edit'),
//         meta: { title: '比对任务编辑' }
//       },
//     ]
//   },
//   {
//     path: '/table_compare',
//     component: Layout,
//     redirect: '/table_compare/table_compare_case',
//     name: 'table_compare',
//     meta: {
//       title: '数据库对象比对',
//       icon: 'el-icon-magic-stick',
//       roles: ['table_compare.visit']
//     },
//     children: [
//       {
//         path: 'table_compare_case',
//         component: () => import('@/views/table_compare/table_compare_case'),
//         meta: { title: '数据库对象比对' },
//       },
//       {
//         path: 'table_compare_result',
//         hidden: true,
//         component: () => import('@/views/table_compare/table_compare_result'),
//         meta: { title: '数据库对象比对执行结果' }
//       },
//       {
//         path: 'table_compare_log',
//         hidden: true,
//         component: () => import('@/views/table_compare/table_compare_log'),
//         meta: { title: '数据库对象比对日志' }
//       }
//     ]
//   },
//   {
//     path: '/data_factory',
//     component: Layout,
//     redirect: '/data_factory/data_factory_index',
//     name: 'data_factory',
//     meta: {
//       title: '数据工厂',
//       icon: 'el-icon-attract',
//       roles: ['data_factory.visit']
//     },
//     children: [
//       {
//         path: 'data_factory_index',
//         component: () => import('@/views/data_factory/data_factory_case'),
//         meta: {
//           title: '用例维护'
//         },
//       },
//       {
//         path: 'factory_type',
//         component: () => import('@/views/data_factory/factory_type'),
//         meta: {
//           title: '工厂类型管理'
//         },
//       },
//       {
//         path: 'data_factory_rule',
//         component: () => import('@/views/data_factory/data_factory_rule'),
//         meta: {
//           title: '预设规则管理'
//         },
//       },
//
//     ]
//   },
//
//   {
//     path: '/ui',
//     component: Layout,
//     redirect: '/ui/ui_index',
//     name: 'UI',
//     meta: {
//       title: 'UI自动化',
//       icon: 'el-icon-sunset',
//       roles: ['ui2020.visit']
//     },
//     children: [
//       {
//         path: 'ui_index',
//         component: () => import('@/views/ui/ui_index'),
//         meta: {
//           title: '主页'
//         },
//       },
//       {
//         path: 'ui_report',
//         component: () => import('@/views/ui/ui_report'),
//         meta: {
//           title: '报告查看',
//         }
//       },
//       {
//         path: 'ui_testcase',
//         hidden: true,
//         component: () => import('@/views/ui/ui_testcase'),
//         meta: {
//           title: '用例管理',
//         }
//       }
//     ]
//   },
//
//   {
//     path: '/api_test',
//     component: Layout,
//     redirect: '/api_test/api_project',
//     name: 'API',
//     alwaysShow: true,
//     meta: {
//       title: 'API测试',
//       icon: 'el-icon-connection',
//       roles: ['API2020.visit']
//     },
//     children: [
//       {
//         path: 'api_environment',
//         component: () => import('@/views/api_test/api_environment'),
//         meta: { title: '环境管理' }
//       },
//       {
//         path: 'api_project',
//         component: () => import('@/views/api_test/api_project'),
//         meta: { title: '项目管理' },
//       },
//       {
//         path: 'api_case_tree',
//         hidden: true,
//         component: () => import('@/views/api_test/api_case_tree'),
//         meta: { title: '模块管理' }
//       },
//       {
//         path: 'api_case',
//         hidden: true,
//         component: () => import('@/views/api_test/api_case'),
//         meta: { title: '用例管理' }
//       },
//     ]
//   },
//
//   {
//     path: '/data_track',
//     component: Layout,
//     redirect: '/data_track/data_track',
//     name: 'data_track',
//     // alwaysShow: true,
//     meta: {
//       title: '数据追踪',
//       icon: 'el-icon-timer',
//       roles: ['data_track.visit']
//     },
//     children: [
//       {
//         path: 'data_track',
//         component: () => import('@/views/data_track/data_track'),
//         meta: { title: '数据追踪' },
//       },
//       {
//         path: 'data_track_edit',
//         hidden: true,
//         component: () => import('@/views/data_track/data_track_edit'),
//         meta: { title: '用例新增' },
//       },
//       {
//         path: 'data_track_chart',
//         hidden: true,
//         component: () => import('@/views/data_track/data_track_chart'),
//         meta: { title: '图表生成' },
//       },
//       {
//         path: 'data_track_content_edit',
//         hidden: true,
//         component: () => import('@/views/data_track/data_track_content_edit'),
//         meta: { title: '目录编辑' },
//       },
//       {
//         path: 'data_track_log',
//         hidden: true,
//         component: () => import('@/views/data_track/data_track_log'),
//         meta: { title: '任务日志' },
//       },
//     ]
//   },
//
//   {
//     path: '/qywx_bot',
//     component: Layout,
//     redirect: '/qywx_bot/group',
//     name: 'qywx_bot',
//     alwaysShow: true,
//     meta: {
//       title: '企业微信机器人',
//       icon: 'el-icon-s-comment',
//       roles: ['qywx_bot.visit']
//     },
//     children: [
//       {
//         path: 'rule',
//         component: () => import('@/views/qywx_bot/rule'),
//         meta: { title: '消息提醒规则管理' },
//       },
//       {
//         path: 'group',
//         component: () => import('@/views/qywx_bot/group'),
//         meta: { title: '群管理' },
//       },
//       {
//         path: 'member',
//         component: () => import('@/views/qywx_bot/member'),
//         meta: { title: '成员管理' },
//       },
//     ]
//   },
//
//   {
//     path: '/cron_task',
//     component: Layout,
//     redirect: '/cron_task/cron_task_index',
//     name: 'cron_task',
//     meta: {
//       title: '计划任务',
//       icon: 'el-icon-date',
//       roles: ['cron_task.visit']
//     },
//     children: [
//       {
//         path: 'cron_task_index',
//         component: () => import('@/views/cron_task/cron_task_index'),
//         meta: { title: '计划任务' },
//       },
//     ]
//   },
//
//   {
//     path: '/szjk',
//     component: Layout,
//     redirect: '/szjk/yd',
//     name: '项目专用',
//     alwaysShow: true,
//     meta: {
//       title: '项目专用',
//       icon: 'el-icon-notebook-1',
//       roles: ['szjk.visit']
//     },
//     children: [
//       {
//         path: 'szjk_result',
//         component: () => import('@/views/szjk/result'),
//         meta: { title: '事中监控测试结果' },
//       },
//     ]
//   },
//
//   {
//     path: '/setting',
//     component: Layout,
//     redirect: '/setting/database',
//     name: 'setting',
//     alwaysShow: true,
//     meta: {
//       title: '配置管理',
//       icon: 'el-icon-setting',
//     },
//     children: [
//       {
//         path: 'database',
//         component: () => import('@/views/setting/database'),
//         meta: {
//           title: '数据库管理',
//           roles: ['database.visit']
//         },
//       },
//       {
//         path: 'pdm',
//         hidden: true,
//         component: () => import('@/views/setting/pdm'),
//         meta: { title: 'PDM管理' },
//       },
//       {
//         path: 'project',
//         component: () => import('@/views/setting/project'),
//         meta: {
//           title: '项目管理',
//           roles: ['project.visit']
//         },
//       },
//       {
//         path: 'admin_tools',
//         component: () => import('@/views/setting/tools'),
//         meta: {
//           title: '运维工具',
//           roles: ['user.visit']
//         },
//       },
//     ]
//   },
//
//   {
//     path: '/roles',
//     component: Layout,
//     redirect: '/roles/user',
//     alwaysShow: true,
//     meta: {
//       title: '权限管理',
//       icon: 'el-icon-user-solid',
//       roles: ['user.visit']
//     },
//     children: [
//       {
//         path: 'user',
//         component: () => import('@/views/roles/user'),
//         meta: {title: '用户管理'},
//       },
//       {
//         path: 'user_group',
//         component: () => import('@/views/roles/user_group'),
//         meta: {title: '用户组管理',},
//       },
//     ]
//   },
//
//   {
//     path: '/small_tools',
//     component: Layout,
//     redirect: '/small_tools/code_diff',
//     name: 'small_tools',
//     meta: {
//       title: '小工具合集',
//       icon: 'el-icon-view',
//       // roles: ['cron_task.visit']
//     },
//     children: [
//       {
//         path: 'code_diff',
//         component: () => import('@/views/small_tools/code_diff'),
//         meta: { title: '代码比对工具' },
//       },
//     ]
//   },
//
//
//   // 404 page must be placed at the end !!!
//   {path: '*', redirect: '/404', hidden: true}
// ]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter () {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
