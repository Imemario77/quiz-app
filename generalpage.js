const quit_test = document.querySelector(".fa-arrow-left");

quit_test &&
  quit_test.addEventListener("click", () => {
    const ans = confirm("are you ready to quit this test");
    if (ans) {
      const name = localStorage.getItem("username");
      localStorage.clear();
      localStorage.setItem("username", name);
      window.location = window.location.href.replace("question", "index");
    }
  });
