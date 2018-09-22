<template>
	<div>
		<input type="text" v-model="text">
		<div v-show="text === 'callan'">
			Hello {{ text }}
		</div>
		{{ text }}
		<button @click="click">Clik me</button>
		<div >
			<span v-bind:key="item.id" v-for="item in arr">{{ item.name }}<br></span>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'test',
		data() {
			return {
				text:'hello',
				arr: [{id:0, name:'callan'}, {id:1, name: 'michel'}, {id:2, name: 'arthur'}]
			}
		},
		methods: {
			click: function(){
				this.text = 'Coucou'
			}
		} 
	}
</script>