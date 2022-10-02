import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'home',
		component: HomeView,
		children: [{
			path: "/goods",
			name: "goods",
			meta: {
				isShow: true,
				title: "商品列表"
			},
			component: () => import(/* webpackChunkName: "goods" */ '../views/meta/GoodView.vue')
		}, {
			path: "/role",
			name: "/role",
			meta: {
				isShow: true,
				title: "用户角色"
			},
			component: () => import(/* webpackChunkName: "/role" */ '../views/meta/RoleView.vue')
		}]
	},
	{
		path: '/login',
		name: 'login',
		component: () => import(/* webpackChunkName: "login" */ '../views/LoginView.vue')
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
