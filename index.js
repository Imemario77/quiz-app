const loader = document.querySelector("#scale");
const loader_div = document.querySelector(".loader");
const setTimeAndQuestion = document.querySelector(".set-time-ques");
const hour = document.querySelector("#hours");
const min = document.querySelector("#minutes");
const sec = document.querySelector("#seconds");
const question_input = document.querySelector("#question-input");
const start_test_now = document.querySelector(".start-test-now");
const closeSetTimeAndQuestion = document.querySelector(
  ".hide-set-time-question"
);
const register_name = document.querySelector(".register-name");

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


start_test_now &&
  start_test_now.addEventListener("click", () => {
    localStorage.setItem("hour", hour.value);
    localStorage.setItem("min", min.value);
    localStorage.setItem("sec", sec.value);
    localStorage.setItem("question-count", question_input.value);
    localStorage.setItem("subject", current_subject);
    closeSetTimeAndQuestion.click();
    window.location = window.location.href + "question.html";
  });

