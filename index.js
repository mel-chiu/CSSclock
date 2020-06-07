const secondHand = document.querySelector("#second");
const minuteHand = document.querySelector("#minute");
const hourHand = document.querySelector("#hour");

function setDate() {
    const now = new Date();

    const second = now.getSeconds();
    const secondDegrees = ((second / 60) * 360) + 90;
    if (second === 0) {
        secondHand.style.transition = "all 0.001s";
        secondHand.style.transform = "rotate(90deg)";
    } else {
        secondHand.style.transform = `rotate(${secondDegrees}deg)`;
    }

    const minute = now.getMinutes();
    const minuteDegrees = ((minute / 60) * 360) + 90;
    if (minute === 0) {
        minuteHand.style.transition = "all 0.001s";
        minuteHand.style.transform = "rotate(90deg)";
    } else {
        minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
    }

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + 90;
    if (hour === 0) {
        hourHand.style.transition = "all 0.001s";
        hourHand.style.transform = "rotate(90deg)";
    } else {
        hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    }


}

setInterval(setDate, 1000);