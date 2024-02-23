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
const save_name = document.querySelector(".save-name");
const user_name = document.querySelector(".username");
const user_name_display = document.querySelector(".display-username");
const search_input = document.querySelector("#search-input");
const subject_click_box = document.querySelectorAll(".exam");
const edit_name = document.querySelector(".fa-edit");

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
    if (e.target.value === "") {
      hour.value = "00";
    }
    if (hour_time > 5) {
      hour.value = "05";
    }
  });

min &&
  min.addEventListener("change", (e) => {
    min_time = parseInt(e.target.value);
    if (e.target.value === "") {
      min.value = "59";
    }
    if (min_time > 59) {
      min.value = "59";
    }
  });

sec &&
  sec.addEventListener("change", (e) => {
    sec_time = parseInt(e.target.value);
    if (e.target.value === "") {
      sec.value = "59";
    }
    if (sec_time > 59) {
      sec.value = "59";
    }
  });

question_input &&
  question_input.addEventListener("change", (e) => {
    if (parseInt(e.target.value) > 100) {
      question_input.value = "100";
      modal_box("Number of questions should be less than or equal to 100");
    }

    if (e.target.value === "") {
      question_input.value = "50";
    }
  });

start_test_now &&
  start_test_now.addEventListener("click", () => {
    if (parseInt(hour.value) + parseInt(min.value) + parseInt(sec.value) <= 5) {
      min.value = "45";
    }
    localStorage.setItem("hour", hour.value);
    localStorage.setItem("min", min.value);
    localStorage.setItem("sec", sec.value);
    localStorage.setItem("question-count", question_input.value);
    localStorage.setItem("subject", current_subject);
    closeSetTimeAndQuestion.click();
    if (window.location.href.endsWith("index.html")) {
      window.location = window.location.href.replace("index", "question");
    } else window.location = window.location.href + "question.html";
  });

save_name &&
  save_name.addEventListener("click", () => {
    if (user_name.value !== "") {
      localStorage.setItem("username", user_name.value);
      register_name.style.display = "none";
      user_name_display.innerHTML = localStorage.getItem("username");
    }
  });

if (!localStorage.getItem("username")) {
  register_name.style.display = "flex";
} else {
  user_name_display
    ? (user_name_display.innerHTML = localStorage.getItem("username"))
    : null;
  register_name ? (register_name.style.display = "none") : null;
}

function searchItem() {
  subject_click_box.forEach((box) => {
    box.classList.remove("b-m-c");
    const id_attr = box.getAttribute("id");
    if (search_input.value !== "") {
      if (id_attr.toLowerCase().startsWith(search_input.value.toLowerCase())) {
        box.scrollIntoView({
          behavior: "smooth",
        });
        box.classList.add("b-m-c");
      }
    }
  });
}
edit_name &&
  edit_name.addEventListener("click", () => {
    register_name.style.display = "flex";
  });
