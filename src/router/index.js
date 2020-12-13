import { createRouter, createWebHistory } from 'vue-router'

const routes = [
	{
		path: '/',
		name: 'index',
		component: () => import('@/views/Home.vue'),
	},
	{
		path: '/about',
		name: 'about',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
	},
	{
		path: '/examples/',
		name: 'examples',
		component: () => import(/* webpackChunkName: "examples" */ '@/examples/Index.vue'),
		children: [
			{
				path: 'administrative/user-management',
				name: 'user-management',
				component: () => import(/* webpackChunkName: "examples-administrative" */ '@/examples/administrative/users/UserManagement.vue'),
			},
			{
				path: 'profiles/user',
				name: 'profiles-user',
				component: () => import(/* webpackChunkName: "examples-profiles" */ '@/examples/profiles/UserProfile.vue'),
			},
		],
	},
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
	linkActiveClass: 'is-active',
})

export default router
