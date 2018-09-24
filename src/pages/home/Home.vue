<template>
	<div>
	  <div class="home">home</div>
	  <router-link to="/list">列表页</router-link>  <!-- 跳转 -->
	</div>
</template>

<script>
export default {
	name: 'Home'  //组件名
}
</script>


<style>
	.home {
		font-size: 50px;
	}
</style>