function modal_box(message) {
  const div = document.createElement("div");
  div.setAttribute("class", "modal fixed");
  const div2 = document.createElement("div");
  div2.setAttribute("class", "modal-div");
  const span = document.createElement("span");
  span.innerText = message;
  const i = document.createElement("i");
  i.setAttribute("class", "fa fa-close");
  i.setAttribute("style", "font-size: 20px;");
  i.setAttribute("onclick", "close_modal()");
  div2.append(span);
  div2.append(i);
  div.append(div2);
  document.getElementsByTagName("body")[0].append(div);
}

function confrim_modal_box(message) {
  const div = document.createElement("div");
  div.setAttribute("class", "modal fixed");
  const div2 = document.createElement("div");
  div2.setAttribute("class", "modal-div");
  const span = document.createElement("span");
  const div3 = document.createElement("div");
  div3.setAttribute("class", "modal-div-3");
  span.innerText = message;
  const close = document.createElement("button");
  const save = document.createElement("button");
  close.innerText = "continue";
  save.innerText = "quit";
  close.setAttribute("onclick", "close_modal()");
  save.setAttribute("onclick", "close_modal_return_true()");
  div2.append(span);
  div3.append(close);
  div3.append(save);
  div2.append(div3);
  div.append(div2);
  document.getElementsByTagName("body")[0].append(div);
}

function close_modal() {
  document
    .getElementsByTagName("body")[0]
    .removeChild(document.querySelector(".modal"));
}

function close_modal_return_true() {
  const name = localStorage.getItem("username");
  localStorage.clear();
  localStorage.setItem("username", name);
  window.location = window.location.href.replace("question", "index");
}
