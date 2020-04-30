var timeRemainingForm = document.getElementById("time-remaining-form");
var numberOfHoursInInput = document.getElementById("number-of-hours-in-input");
var numberOfMinutesInInput = document.getElementById("number-of-minutes-in-input");
var numberOfSecondsInInput = document.getElementById("number-of-minutes-in-input");
var numberOfHoursElapsed = document.getElementById("number-of-hours-elapsed");
var numberOfMinutesElapsed = document.getElementById("number-of-minutes-elapsed");
var numberOfSecondsElapsed = document.getElementById("number-of-seconds-elapsed");
var speedMultiplier = document.getElementById("speed-multiplier");
var formula;
var outputText = document.getElementById("calculated-time-remaining-output");

function getValueInTimeFromDecimal(number, multiplier) {
  var extractedDecimal = Math.abs(number) - Math.floor(number);
  return (extractedDecimal * multiplier);
}

function calculateTimeRemaining() {
  if ( (parseFloat(numberOfHoursInInput.value) === 0 || parseFloat(numberOfHoursInInput.value)) && (parseFloat(numberOfMinutesInInput.value) === 0 || parseFloat(numberOfMinutesInInput.value)) && (parseFloat(numberOfSecondsInInput.value) === 0 || parseFloat(numberOfSecondsInInput.value)) && (parseFloat(numberOfHoursElapsed.value) === 0 || parseFloat(numberOfHoursElapsed.value)) && (parseFloat(numberOfMinutesElapsed.value) === 0 || parseFloat(numberOfMinutesElapsed.value)) && (parseFloat(numberOfSecondsElapsed.value) === 0 || parseFloat(numberOfSecondsElapsed.value)) && (parseFloat(speedMultiplier.value) === 0 || parseFloat(speedMultiplier.value)) ) {
    var inputTimeInMinutes = ( (Math.abs(parseFloat(numberOfHoursInInput.value)) * 60) + Math.abs(parseFloat(numberOfMinutesInInput.value)) + (Math.abs(parseFloat(numberOfSecondsInInput.value)) / 60) );
    var elapsedTimeInMinutes = ( (Math.abs(parseFloat(numberOfHoursElapsed.value)) * 60) + Math.abs(parseFloat(numberOfMinutesElapsed.value)) + (Math.abs(parseFloat(numberOfSecondsElapsed.value)) / 60) );
    formula = ( Math.abs((inputTimeInMinutes - elapsedTimeInMinutes)) / Math.abs(parseFloat(speedMultiplier.value)) ) / 60;
    var minutes = getValueInTimeFromDecimal(formula, 60);
    var seconds = getValueInTimeFromDecimal(minutes, 60);
    if (formula >= 24) {
      var days = (formula / 24);
      var hours = getValueInTimeFromDecimal(days, 24);
      minutes = getValueInTimeFromDecimal(hours, 60);
      seconds = getValueInTimeFromDecimal(minutes, 60);
      outputText.innerHTML = Math.round(days) + " day(s), " + Math.round(hours) + " hours(s), " + Math.round(minutes) + " minutes(s), and " + Math.round(seconds) + " seconds remain.<br><br>Or, " + Math.round(days).toString().padStart(2, "0") + ":" + Math.round(hours).toString().padStart(2, "0") + ":" + Math.round(minutes).toString().padStart(2, "0") + ":" + Math.round(seconds).toString().padStart(2, "0") + " remain.";
      return false;
    }
    outputText.innerHTML = Math.round(formula) + " hour(s), " + Math.round(minutes) + " minute(s), and " + Math.round(seconds) + " second(s) remain.<br><br>Or, " + Math.round(formula).toString().padStart(2, "0") + ":" + Math.round(minutes).toString().padStart(2, "0") + ":" + Math.round(seconds).toString().padStart(2, "0") + " remain.";
  } else {
    outputText.textContent = "Please fill in all form components with whole, positive numbers. If any of your values are not existent, fill them in with a zero.";
  }
}

timeRemainingForm.addEventListener("submit", function(e) {
  e.preventDefault();
  calculateTimeRemaining();
});