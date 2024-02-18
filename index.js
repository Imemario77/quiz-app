const loader = document.querySelector("#scale");
const loader_div = document.querySelector(".loader");
const setTimeAndQuestion = document.querySelector(".set-time-ques");
const hour = document.querySelector("#hours");
const min = document.querySelector("#minutes");
const sec = document.querySelector("#seconds");
const question_input = document.querySelector("#question-input");
const start_test_now = document.querySelector(".start-test-now");
const q_time = document.querySelector("#q-time");
const closeSetTimeAndQuestion = document.querySelector(
  ".hide-set-time-question"
);
const subject_title = document.querySelector(".subject-title");
const quit_test = document.querySelector(".fa-arrow-left");
const question_start_number = document.querySelector("#question-start-number");
const question_total_number = document.querySelector("#question-total-number");

let hour_time = 0;
let min_time = 0;
let sec_time = 0;
let current_subject = "";

loader.addEventListener("animationend", () => {
  loader_div.style.display = "none";
});

function startTest(subject) {
  setTimeAndQuestion.classList.remove("hide");
  current_subject = subject;
}

closeSetTimeAndQuestion &&
  closeSetTimeAndQuestion.addEventListener("click", () => {
    setTimeAndQuestion.classList.add("hide");
    current_subject = "";
  });

hour &&
  hour.addEventListener("change", (e) => {
    hour_time = parseInt(e.target.value);
    if (hour_time > 5) {
      hour.value = "05";
      hour_time = 5;
    }
  });

min &&
  min.addEventListener("change", (e) => {
    min_time = parseInt(e.target.value);
    if (min_time > 59) {
      min.value = "59";
      min_time = 5;
    }
  });

sec &&
  sec.addEventListener("change", (e) => {
    sec_time = parseInt(e.target.value);
    if (sec_time > 59) {
      sec.value = "59";
      sec_time = 5;
    }
  });

question_input &&
  question_input.addEventListener("change", (e) => {
    if (parseInt(e.target.value) > 100) {
      question_input.value = "100";
      alert("Number of questions should be less than or equal to 100");
    }
  });

console.log(window.location.href);

start_test_now &&
  start_test_now.addEventListener("click", () => {
    localStorage.setItem("hour", hour.value);
    localStorage.setItem("min", min.value);
    localStorage.setItem("sec", sec.value);
    localStorage.setItem("question-count", question_input.value);
    localStorage.setItem("subject", current_subject);
    window.location = window.location.href + "question.html";
  });

if (localStorage.getItem("subject")) {
  subject_title.innerHTML = localStorage.getItem("subject") + " Test";
}

if (
  localStorage.getItem("hour") ||
  localStorage.getItem("min") ||
  localStorage.getItem("sec")
) {
  // Set the target time
  let targetTime = new Date();
  if (
    localStorage.getItem("targetTime") &&
    localStorage.getItem("targetTime") != ""
  ) {
    targetTime = new Date(localStorage.getItem("targetTime"));
  } else {
    targetTime.setHours(
      targetTime.getHours() + parseInt(localStorage.getItem("hour"))
    );
    targetTime.setMinutes(
      targetTime.getMinutes() + parseInt(localStorage.getItem("min"))
    );
    targetTime.setSeconds(
      targetTime.getSeconds() + parseInt(localStorage.getItem("sec"))
    );
    localStorage.setItem("targetTime", targetTime);
  }

  // Update the countdown every second
  let countdown = setInterval(function () {
    // Get the current time

    let currentTime = new Date().getTime();
    console.log(targetTime);
    // Calculate the time remaining
    let timeRemaining = targetTime - currentTime;
    // Calculate hours, minutes, and seconds
    let hours = Math.floor(
      (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor(
      (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
    ).toString();
    let seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000).toString();

    console.log(minutes.length);
    if (minutes.length === 1) {
      minutes = `0${minutes}`;
    }
    if (seconds.length === 1) {
      seconds = `0${seconds}`;
    }
    q_time.innerHTML = `<i class='fa fa-clock-o' style='padding-right: 5px;'> 0${hours}:${minutes}:${seconds}</i>`;
    // Check if the countdown is over
    if (timeRemaining < 0) {
      q_time.innerHTML = `<i class='fa fa-clock-o' style='padding-right: 5px;'> 00:00:00</i>`;
      clearInterval(countdown);
      localStorage.clear();
    }
  }, 1000);
}

quit_test &&
  quit_test.addEventListener("click", () => {
    const ans = confirm("are you ready to quit this test");
    if (ans) {
      localStorage.clear();
      window.history.back()
    }
  });

if (question_total_number)
  question_total_number.innerHTML = localStorage.getItem("question-count");
