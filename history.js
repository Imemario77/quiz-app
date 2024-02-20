const quit_test = document.querySelector(".fa-arrow-left");
const histroy_box_ref_2 = document.querySelectorAll(".show-history-tray");

async function seeHistory(subject) {
  const history_box = document.querySelector("#" + subject);
  histroy_box_ref_2.forEach((element) => {
    element.innerHTML = "";
  });
  getHistoryFromDB(subject, history_box);
}

quit_test.addEventListener("click", () => {
  window.location = window.location.href.replace("history", "index");
});

function displaySIngleHistory(id) {
  localStorage.setItem("viewing", id);
  window.location = window.location.href.replace("history", "score");
}
