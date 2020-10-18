<template>
	<div class="examples">
		<ul>
			<li>
				Administrative
				<ul>
					<li>
						<router-link :to="{ name: 'user-management' }">User management</router-link>
					</li>
				</ul>
			</li>
			<li>
				<router-link :to="{ name: 'profiles-user' }">User profile</router-link>
			</li>
		</ul>
		<router-view />
	</div>
</template>
