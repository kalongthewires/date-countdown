class DateCountdown {
	constructor (options) {
		this.element = document.querySelector(options.element);
		this.endDate = options.endDate;
	}

	init () {
		let days = this.calculateRemainingDays();

		this.displayRemainingDays(days);
	}

	calculateRemainingDays () {
		let today = new Date(),
			millisPerDay = 24 * 60 * 60 * 1000;

		return Math.round(Math.abs((today - this.endDate) / millisPerDay));
	}

	displayRemainingDays (days) {
		days = document.createTextNode(days);
		this.element.appendChild(days);
	}
}
