# Date Countdown Widget
Display number of days to an upcoming date. ES2015 version.

## Running Babel
```
npm run build
```

## Adding widget

Add the DateCountdown.js script to your file:
```
<script src="lib/DateCountdown.js"></script>
```

Then initialize a DateCountdown object with a date and a HTML element where the days remaining will be displayed.

```
	var countdown = new DateCountdown({
		endDate: new Date(2016, 6, 25),
		element: '#daysUntilThailand'
	});

	countdown.init();
```
