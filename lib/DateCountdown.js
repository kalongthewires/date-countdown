"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DateCountdown = function () {
	function DateCountdown(options) {
		_classCallCheck(this, DateCountdown);

		this.element = document.querySelector(options.element);
		this.endDate = options.endDate;
	}

	_createClass(DateCountdown, [{
		key: "init",
		value: function init() {
			var days = this.calculateRemainingDays();

			this.displayRemainingDays(days);
		}
	}, {
		key: "calculateRemainingDays",
		value: function calculateRemainingDays() {
			var today = new Date(),
			    millisPerDay = 24 * 60 * 60 * 1000;

			return Math.trunc(Math.abs((today - this.endDate) / millisPerDay));
		}
	}, {
		key: "displayRemainingDays",
		value: function displayRemainingDays(days) {
			days = document.createTextNode(days);
			this.element.appendChild(days);
		}
	}]);

	return DateCountdown;
}();