const setTimeAndQuestion = document.querySelector(".set-time-ques");
const hour = document.querySelector("#hours");
const min = document.querySelector("#minutes");
const sec = document.querySelector("#seconds");
const closeSetTimeAndQuestion = document.querySelector(
  ".hide-set-time-question"
);
let test_hour = 0;
let min_hour = 0;
let sec_hour = 0;

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

// hour &&
//   hour.addEventListener("change", (e) => {
//     test_hour = e.target.value;
//     if (test_hour.length > 3) {
//       hour.innerHTML = test_hour.slice(0, -1);
//     }
//     alert("hey");
//   });
function changeVal() {
  console.log("hey");
  hour.value = "0";
}
