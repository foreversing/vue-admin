import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/**
 * hidden: true 如果设置为真，项目将不会显示在侧边栏中(默认为假)
 * */

const Routes = [{
		path: '/',
		redirect: '/home'
	},
	{
		path: '/',
		name: 'home',
		component: resolve => require(['@/views/Home.vue'], resolve),
		children: [{
			path: '/contact',
			component: resolve => require(['@/views/Contact.vue'], resolve),
			meta: {
				title: '系统首页',
				auth: true
			}
		}]
	},
	{
		path: '/login',
		component: resolve => require(['@/views/login/index'], resolve),
		hidden: true
	}
]

const createRouter = () => new Router({
	routes: Routes
})

const router = createRouter()

export default router;
