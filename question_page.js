const question_start_number = document.querySelector("#question-start-number");
const question_total_number = document.querySelector("#question-total-number");
const q_time = document.querySelector("#q-time");
const subject_title = document.querySelector(".subject-title");
const question_box = document.querySelector(".all-questions");
const range_slider = document.querySelector(".range-slider");
const submit_test = document.querySelector(".submit-test");
const quit_test = document.querySelector(".fa-arrow-left");

let questions_list;
let answer_list;
let subject_questions;
let number_of_ques = 500;
let time_up = false;

if (localStorage.getItem("subject")) {
  subject_title.innerHTML = localStorage.getItem("subject") + " Test";
  switch (localStorage.getItem("subject")) {
    case "Mathematics":
      subject_questions = math;
      number_of_ques = math.length;
      break;
      case "chemistry":
        subject_questions = chem;
        number_of_ques = chem.length;
      break;
    case "Biology":
      subject_questions = biology;
      number_of_ques = biology.length;
      break;
    case "Physics":
      subject_questions = physics;
      number_of_ques = physics.length
      break;
    case "History":
      subject_questions = history;
      number_of_ques = history.length;
      break;
    case "English":
      subject_questions = english;
      number_of_ques = english.length;
      break;
    case "Literature":
      subject_questions = literature;
      number_of_ques = literature.length;
      break;

    default:
      window.location = window.location.href.replace("question", "index");
      break;
  }
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
      time_up = true;
      submit_test.click();
    }
  }, 1000);
  questions_list = localStorage.getItem("question-list")
    ? JSON.parse(localStorage.getItem("question-list"))
    : [];
  answer_list = localStorage.getItem("ans")
    ? JSON.parse(localStorage.getItem("ans"))
    : [];
} else {
  window.location = window.location.href.replace("question", "index");
}

if (question_total_number)
  question_total_number.innerHTML = localStorage.getItem("question-count");

// const res = history.map((ma, i) => {
//   return { ...ma, index: i + 1 };
// });

// console.log(res);

if (questions_list.length <= 0) {
  for (let index = 0; index < 1000; index++) {
    let i = Math.floor(Math.random() * number_of_ques);
    let ques = subject_questions[i];
    if (!questions_list.includes(ques)) {
      questions_list.push(ques);
    }
    if (
      questions_list.length >= parseInt(localStorage.getItem("question-count"))
    )
      break;
  }
}

localStorage.setItem("question-list", JSON.stringify(questions_list));

question_box.innerHTML = "";

questions_list.map((question, index) => {
  const single_question = document.createElement("div");
  single_question.setAttribute("class", "single-question");
  single_question.setAttribute("id", `n-${question.index}`);
  const h4 = document.createElement("h4");
  h4.innerText = `Question - ${parseInt(index) + 1}`;
  single_question.append(h4);
  const p = document.createElement("p");
  p.innerText = question.question;
  single_question.append(p);
  question.options.forEach((option, btn_number) => {
    const span = document.createElement("span");
    span.setAttribute(
      "onclick",
      `chooseOption(${parseInt(index)},${
        question.index
      },"${option}",${btn_number})`
    );
    span.innerText = option;
    single_question.append(span);
  });
  question_box.append(single_question);
});

if (answer_list.length > 0) {
  answer_list.forEach((element) => {
    console.log(element);
    const item = document.querySelector(`#n-${element.index}`);
    item.childNodes[element.btn_number + 2].setAttribute("class", "answered");
  });
}

function chooseOption(question_number, index, answer, btn_number) {
  if (answer_list.some((item) => item.index === index)) {
    item = answer_list.find((item) => item.index === index);
    question_box.childNodes[question_number].childNodes[
      item.btn_number + 2
    ].classList.remove("answered");
    answer_list = answer_list.filter((ele) => ele.index !== item.index);
  }
  answer_list.push({ index, answer, btn_number });
  console.log(answer_list);
  question_box.childNodes[question_number].childNodes[
    btn_number + 2
  ].setAttribute("class", "answered");

  question_start_number.innerText = answer_list.length;
  range_slider.style.width = `${Math.floor(
    (answer_list.length / parseInt(localStorage.getItem("question-count"))) *
      100
  )}%`;
  localStorage.setItem("ans", JSON.stringify(answer_list));
}

submit_test.addEventListener("click", () => {
  if (
    answer_list.length < parseInt(localStorage.getItem("question-count")) / 2 &&
    time_up === false
  ) {
    modal_box("Must finish 50% of the test before you can submit");
    return "";
  }
  saveToIndexedDB(
    {
      subject: localStorage.getItem("subject"),
      data: answer_list,
      question: questions_list,
      date: new Date().toDateString(),
    },
    "history"
  );
  const name = localStorage.getItem("username");
  localStorage.clear();
  localStorage.setItem("username", name);
  localStorage.setItem("finished-now", true);
  window.location = window.location.href.replace("question", "score");
});

quit_test &&
  quit_test.addEventListener("click",  () => {
    confrim_modal_box("are you ready to quit this test");
  });
