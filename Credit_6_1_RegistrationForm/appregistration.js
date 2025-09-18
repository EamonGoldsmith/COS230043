// had to change the initialisation to work with Vue3 some of the other task I just used Vue2
const app = Vue.createApp({
	data: function () {
		return {
			fname: null,
			lname: null,
			uname: null,
			email: null,
			password: null,
			cpassword: null,
			address: null,
			postcode: null,
			suburb: null,
			mobile: null,

			errors: [],
			tsacs: false
		}
	},
	methods: {
		checkForm: function (e) {
			this.errors = [];
			var result = true;

			if (!this.fname) {
				this.errors.push("First name required");
				result = false;
			} else if (/\d/.test(this.fname)) {
				this.erros.push("First name must contain only letters");
				result = false;
			}

			if (!this.lname) {
				this.errors.push("Last name required");
				result = false;
			} else if (/\d/.test(this.lname)) {
				this.erros.push("Last name must contain only letters");
				result = false;
			}

			if (!this.uname) {
				this.errors.push("Username required");
				result = false;
			} else if (this.uname.length < 3) {
				this.erros.push("Username must be at least 3 characters");
				result = false;
			}

			if (!this.email) {
				this.errors.push("Must have an email address");
				result = false;
			} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email)) {
				this.erros.push("Email must be a valid email address");
				result = false;
			}

			if (!this.password) {
				this.errors.push("You must have a password");
				result = false;
			} else if (!this.cpassword) {
				this.errors.push("Must fill out confirm password");
			} else if (this.password != this.cpassword) {
				this.errors.push("Passwords do not match");
				result = false;
			} else {
				let special = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(this.password);
				if (this.password.length < 8 || special < 1) {
					this.errors.push("Password must be at least 8 characters long and contain at least 1 special character");
					result = false;
				}
			}

			if (this.address) {
				if (this.address.length > 40) {
					this.errors.push("Street address must be less than 40 characters");
					result = false;
				}
			}

			if (this.postcode) {
				if (!/^\d{4}$/.test(this.postcode)) {
					this.errors.push("Post code must be 4 numbers");
					result = false;
				}
			}

			if (this.suburb) {
				if (this.suburb.length > 20) {
					this.errors.push("Suburb must be less than 20 characters");
					result = false;
				}
			}

			if (this.mobile) {
				if (!/^04\d{8}$/.test(this.mobile)) {
					this.errors.push("Mobile number must be 10 digits starting with 04");
					result = false;
				}
			}

			if (!result) {
				e.preventDefault(); //prevent the form from submitting
			}

			return result;
		}
	}
});

app.mount('#app')