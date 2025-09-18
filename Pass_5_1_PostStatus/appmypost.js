Vue.component('app-mypost', {
	data: function () {
		return {
			statPosts: [],
			strStatus: ''
		};
	},

	/* the text input and post button could also
	    be outside the custom component, but you
	    would need to find another way to pass in
	    the status string. And call add??
	*/
	template: `
		<div style="padding: 10px">
			<p>Status:
				<input type="text" v-model="strStatus">
				<button @click="add(strStatus); console.log(statPosts)">Post</button>
			</p>

			<div v-for="(post, index) in statPosts" :key="index" style="padding-bottom: 10px">
				<span>{{ post }}</span>
				<button @click="remove(index)">Del</button>
			</div>
		</div>
  	`,
	methods: {
		add: function (status) {
			if (status.trim() !== '') {
				this.statPosts.unshift(status); // add to top
				this.strStatus = ''; // clear input
			}
		},
		remove: function (index) {
			this.statPosts.splice(index, 1);
		}
	}
});

new Vue({
	el: "#app",
	data: {
	}
});