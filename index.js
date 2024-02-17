const setTimeAndQuestion = document.querySelector(".set-time-ques");
const hour = document.querySelector("#hours");
const min = document.querySelector("#minutes");
const sec = document.querySelector("#seconds");
const closeSetTimeAndQuestion = document.querySelector(
  ".hide-set-time-question"
);
let hour_time = 0;
let min_time = 0;
let sec_time = 0;

let current_subject = "";

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
