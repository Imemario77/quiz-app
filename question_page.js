const quit_test = document.querySelector(".fa-arrow-left");
const question_start_number = document.querySelector("#question-start-number");
const question_total_number = document.querySelector("#question-total-number");
const q_time = document.querySelector("#q-time");
const subject_title = document.querySelector(".subject-title");
const question_box = document.querySelector(".all-questions");
import math from "./math.js";

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
} else {
    window.history.back()
}

quit_test &&
  quit_test.addEventListener("click", () => {
    const ans = confirm("are you ready to quit this test");
    if (ans) {
      localStorage.clear();
      window.history.back();
    //   window.location = window.location.href;
    }
  });

if (question_total_number)
  question_total_number.innerHTML = localStorage.getItem("question-count");

// const res = math.map((ma, i) => {
//   return {...ma , index: i + 1}
// });

// console.log(res);

const questions_list = [];

for (let index = 0; index < 1000; index++) {
  let i = Math.floor(Math.random() * 381);
  let ques = math[i];
  if (!questions_list.includes(ques)) {
    questions_list.push(ques);
  }
  if (questions_list.length >= parseInt(localStorage.getItem("question-count")))
    break;
}

question_box.innerHTML = "";

questions_list.map((question, index) => {
  const single_question = document.createElement("div");
  single_question.setAttribute("class", "single-question");
  const h4 = document.createElement("h4");
  h4.innerText = `Question - ${parseInt(index) + 1}`;
  single_question.append(h4);
  const p = document.createElement("p");
  p.innerText = question.question;
  single_question.append(p);
  question.options.forEach((option) => {
    const span = document.createElement("span");
    span.innerText = option;
    single_question.append(span);
  });
  question_box.append(single_question);
});
