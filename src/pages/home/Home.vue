<template>
	<div>
	  <home-header></home-header> <!-- 使用组件 -->
	</div>
</template>

<script>
import HomeHeader from './components/Header' // 引入文件Header.vue
export default {
	name: 'Home',  // 组件名
	components: {
		HomeHeader // es6写法，引入文件里的组件，声明组件
	}
}
</script>


<style>
	.home {
		font-size: 50px;
	}
</style>