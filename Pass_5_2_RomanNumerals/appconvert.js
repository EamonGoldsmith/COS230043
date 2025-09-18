Vue.component('app-convert',
{
	template: `
	<div>
		<p><b>Enter number from 1 to 99:</b>
			<input type="number" v-model="numVar">
		</p>
		<p v-show="numVar !== 0">{{ numVar | num2roman }}
	</div>
  	`,
	data: function () {
		return {
			numVar: ''
		}
	},
	filters: {
		num2roman: function (i) {
			i = parseInt(i);

			// bounds check
			if (i > 99 || i < 1 || isNaN(i)) {
				return "";
			}

			let symbols = [
				{ value: 90, symbol: 'XC' },
				{ value: 50, symbol: 'L' },
				{ value: 40, symbol: 'XL' },
				{ value: 10, symbol: 'X' },
				{ value: 9, symbol: 'IX' },
				{ value: 5, symbol: 'V' },
				{ value: 4, symbol: 'IV' },
				{ value: 1, symbol: 'I' }
			]

			let res = "";

			while (i > 0) {
				symbols.forEach(a => {
					if (i >= a.value) {
						i = i - a.value;
						res += a.symbol;
					}
				});
			}

			return res;
		}
	}
});

new Vue({
	el: '#app'
});