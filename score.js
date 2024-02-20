const subject_title = document.querySelector(".subject-title");
const pass_id = document.querySelector("#pass");
const fail_id = document.querySelector("#fail");
const attempted_id = document.querySelector("#attempted");
const question_box = document.querySelector(".all-questions");
const quit_test = document.querySelector(".fa-arrow-left");
const taken_date = document.querySelector(".taken-date");

let correctNumber = 0;
let failedNumber = 0;

function display_history(lastItem) {
  question_box.innerHTML = "";
  subject_title.innerHTML = lastItem.subject;
  lastItem.question.map((question, index) => {
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
      if (option === question.correct_answer) {
        span.setAttribute("class", "answered");
      }
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
  lastItem.data.forEach((element) => {
    const item = document.querySelector(`#n-${element.index}`);
    lastItem.question.map((el) => {
      if (el.index === element.index) {
        if (el.correct_answer !== element.answer) {
          item.childNodes[element.btn_number + 2].setAttribute(
            "class",
            "wrong"
          );
        } else {
          correctNumber += 1;
          item.childNodes[element.btn_number + 2].classList.add("b-w");
        }
      }
    });
  });
  pass_id.innerText =
    "Passed: " + correctNumber + "/" + lastItem.question.length;
  failedNumber = lastItem.question.length - correctNumber;
  fail_id.innerText =
    "Failed: " + failedNumber + "/" + lastItem.question.length;
  taken_date.innerText = lastItem.date;
  attempted_id.innerHTML =
    "Attempted: " + lastItem.data.length + "/" + lastItem.question.length;
}

request.onsuccess = function (event) {
  db = event.target.result;
  if (localStorage.getItem("finished-now")) {
    // Wait for the IndexedDB request to succeed

    getLastInsertedItem("history")
      .then((lastItem) => {
        if (lastItem) {
          display_history(lastItem);
        } else {
          window.location = window.location.href.replace("score", "index");
        }
      })
      .catch((error) => {
        console.error("Error retrieving last item:", error);
      });
  } else if (localStorage.getItem("viewing")) {
    getSIngleHistoryFromDB(localStorage.getItem("viewing"))
      .then((lastItem) => {
        if (lastItem) {
          display_history(lastItem);
        } else {
          window.location = window.location.href.replace("score", "history");
        }
      })
      .catch((error) => {
        console.error("Error retrieving last item:", error);
      });
  } else {
    window.location = window.location.href.replace("score", "history");
  }
  localStorage.removeItem("finished-now");
  localStorage.removeItem("viewing");
};

quit_test &&
  quit_test.addEventListener("click", () => {
    window.location = window.location.href.replace("score", "history");
  });
