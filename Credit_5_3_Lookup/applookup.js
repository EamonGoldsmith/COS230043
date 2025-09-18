
// Defining the list of units in an array
var units = [
	{ "code": "ICT10001", "desc": "Problem Solving with ICT", "cp": 12.5, "type": "Core" },
	{ "code": "COS10005", "desc": "Web Development", "cp": 12.5, "type": "Core" },
	{ "code": "INF10003", "desc": "Introduction to Business Information Systems", "cp": 12.5, "type": "Core" },
	{ "code": "INF10002", "desc": "Database Analysis and Design", "cp": 12.5, "type": "Core" },
	{ "code": "COS10009", "desc": "Introduction to Programming", "cp": 12.5, "type": "Core" },
	{ "code": "INF30029", "desc": "Information Technology Project Management", "cp": 12.5, "type": "Core" },
	{ "code": "ICT30005", "desc": "Professional Issues in Information Technology", "cp": 12.5, "type": "Core" },
	{ "code": "ICT30001", "desc": "Information Technology Project", "cp": 12.5, "type": "Core" },
	{ "code": "COS20001", "desc": "User-Centred Design", "cp": 12.5, "type": "Software Development" },
	{ "code": "TNE10005", "desc": "Network Administration", "cp": 12.5, "type": "Software Development" },
	{ "code": "COS20016", "desc": "Operating System Configuration", "cp": 12.5, "type": "Software Development" },
	{ "code": "SWE20001", "desc": "Development Project 1 - Tools and Practices", "cp": 12.5, "type": "Software Development" },
	{ "code": "COS20007", "desc": "Object Oriented Programming", "cp": 12.5, "type": "Software Development" },
	{ "code": "COS30015", "desc": "IT Security", "cp": 12.5, "type": "Software Development" },
	{ "code": "COS30043", "desc": "Interface Design and Development", "cp": 12.5, "type": "Software Development" },
	{ "code": "COS30017", "desc": "Software Development for Mobile Devices", "cp": 12.5, "type": "Software Development" },
	{ "code": "INF20012", "desc": "Enterprise Systems", "cp": 12.5, "type": "Systems Analysis" },
	{ "code": "ACC10007", "desc": "Financial Information for Decision Making", "cp": 12.5, "type": "Systems Analysis" },
	{ "code": "INF20003", "desc": "Requirements Analysis and Modelling", "cp": 12.5, "type": "Systems Analysis" },
	{ "code": "ACC20014", "desc": "Management Decision Making", "cp": 12.5, "type": "Systems Analysis" },
	{ "code": "INF30005", "desc": "Business Process Management", "cp": 12.5, "type": "Systems Analysis" },
	{ "code": "INF30003", "desc": "Business Information Systems Analysis", "cp": 12.5, "type": "Systems Analysis" },
	{ "code": "INF30020", "desc": "Information Systems Risk and Security", "cp": 12.5, "type": "Systems Analysis" },
	{ "code": "INF30001", "desc": "Systems Acquisition & Implementation Management", "cp": 12.5, "type": "Systems Analysis" }
];

const Unit = {
	data() {
		return { units }
	},
	
	template: `
		<div>
			<h2>Unit Code: {{ $route.params.id }}</h2>
			<ul v-for="unit in filteredUnits">
				<li><strong>Code: </strong>{{ unit.code }}</li>
				<li><strong>Description: </strong>{{ unit.desc }}</li>
				<li><strong>Credit Points: </strong>{{ unit.cp }}</li>
				<li><strong>Type: </strong>{{ unit.type }}</li>
			</ul>
		</div>
	`,
	
	computed: {
		filteredUnits: function () {
			return this.units.filter((unit) => unit.code.toLowerCase().match(this.$route.params.id.toLowerCase()));
    		}
	}
}

const router = VueRouter.createRouter({
	history: VueRouter.createWebHashHistory(),
	routes: [{
		path: '/unit/:id', component: Unit
	}]
})

const app = Vue.createApp({})

app.component('app-lookup2', {
	data: function () {
		return { units }
	},
	template: `
		<!-- Table -->
            	<table class="table table-bordered table-hover table-sm table-striped">
                <thead class="table-light">
                    <tr>
                        <th scope="col">Code</th>
                        <th scope="col">Description</th>
                        <th scope="col">More Info</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- Conditionally render unit info based on filters -->
                    <tr v-for="unit in units">
                        <!-- Render each value using list also -->
                        <td>{{ unit.code }}</td>
			<td>{{ unit.desc }}</td>
			<td><router-link :to="{ path:'/unit/' + unit.code }">show details</router-link>
                    </tr>
                </tbody>
            	</table>

		<router-view></router-view>
  	`
})

app.use(router)
app.mount('#app')