import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Routes = [
	{
		path:'/',redirect: '/home'
	},
	{
		path: '/home',
		name: 'home',
		component:()=> import('@/components/views/Home.vue')
	},
	{
		path: '/contact',
		name: 'contact',
		component:()=> import('@/components/views/Contact.vue')
	}
]

const createRouter = () => new Router({
	routes:Routes
})

const router = createRouter()

export default router;

