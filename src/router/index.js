import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
	{
		path: '/',
		name: 'index',
		component: Home,
	},
	{
		path: '/about',
		name: 'about',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
	},
	{
		path: '/examples/',
		name: 'examples',
		component: () => import(/* webpackChunkName: "examples" */ '../views/examples/Index.vue'),
		children: [
			{
				path: 'profiles/user',
				name: 'profiles-user',
				component: () => import(/* webpackChunkName: "examples-profiles" */ '../views/examples/profiles/UserProfile.vue'),
			},
		],
	},
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
})

export default router
