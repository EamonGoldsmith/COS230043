function newRandom() {
	return Math.floor(Math.random() * 100);
}

new Vue({
	el: '#app',
	data: {
		guess: 0,
		msg: "",
		secret: 0
	},
	methods: {
		genRandomNum: function () {
			return Math.floor(Math.random() * 100) + 1;
		},
		checkGuess: function () {
			if (this.guess < this.secret) {
				this.msg = "Guess higher";
			} else if (this.guess > this.secret) {
				this.msg = "Guess lower";
			} else {
				this.msg = "You got it!";
			}
		},
		revealSecret: function () {
			this.msg = "The number was: " + this.secret;
		},
		restartGame: function () {
			this.msg = "Start guessing";
			this.secret = this.genRandomNum();
		}
	},
	created: function () {
		this.restartGame();
	}
});