const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

//selectors
const countdown = document.querySelector('.countdown');
const counts = document.querySelectorAll('.countdown-format h4');

//get dates in milliseconds
const newYear = new Date(2022, 0, 01);

//function
function newYearsDay() {
    const newYearInMilliSeconds = new Date(2022, 0, 01).getTime()
    const todayInMilliSeconds = new Date().getTime();
    const currentTimeRemaining = newYearInMilliSeconds - todayInMilliSeconds;

    //get time values in milliseconds
    const oneDay = 3600 * 24 * 1000; //3600seconds(1hour)*24hours
    const oneHour = 3600 * 1000;
    const oneMin = 60 * 1000; //all values are multiplied by 1000 to get values in Milliseconds

    //get time values Remaining in days, hours, minutes and seconds
    let daysValue = currentTimeRemaining / oneDay;
    daysValue = Math.floor(daysValue);

    let hourValue = (currentTimeRemaining % oneDay) / oneHour;
    hourValue = Math.floor(hourValue);

    let minValue = (currentTimeRemaining % oneHour) / oneMin;
    minValue = Math.floor(minValue);

    let secValue = (currentTimeRemaining % oneMin) / 1000;
    secValue = Math.floor(secValue);

    // console.log(daysValue, hourValue, minValue, secValue);

    const timeValues = [daysValue, hourValue, minValue, secValue];
    //time format "01.01.02"
    function timeFormat(element) {
        if (element < 10) {
            return element = `0${element}`
        } else {
            return element;
        }
    }
    //iterate over the count values
    counts.forEach((element, index) => {
        element.innerHTML = timeFormat(timeValues[index]);
    });
}

//Timer
let countdownTimer = setInterval(newYearsDay, 1000);
newYearsDay();