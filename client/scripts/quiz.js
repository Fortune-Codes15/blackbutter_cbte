const timerDisplay = document.getElementById("timer");

timer(timerDisplay, 2, 30);

function timer(display, hour = 0, minutes = 0, seconds = 0) {
	hour = Number(hour);
	sec = Number(seconds);
	min = Number(minutes);

	interval = setInterval(() => {
		if (min <= 0 && sec <= 0 && hour <= 0) {
			clearInterval(interval);
		} else {
			if (hour >= 0 && min === 0) {
				hour--;
				min = 59;
        sec = 60;
			} else if (min >= 0 && sec === 0) {
				min--;
				sec = 60;
			}
			sec--;
			display.innerHTML = `${hour}: ${String(min).padStart(2, 0)} : ${String(
				sec,
			).padStart(2, 0)}`;
		}
	}, 1000);
	display.innerHTML = `${hour}: ${String(min).padStart(2, 0)} : ${String(
		sec,
	).padStart(2, 0)}`;
}
