const quit_test = document.querySelector(".fa-arrow-left");

async function seeHistory(subject) {
  const history_box = document.querySelector("#" + subject);
  getHistoryFromDB(subject, history_box);
}

quit_test.addEventListener("click", () => {
  window.location = window.location.href.replace("history", "index");
});
