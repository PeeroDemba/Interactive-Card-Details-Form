"use strict";

const names = document.getElementById("name");
const cardno = document.getElementById("number");
const expmm = document.getElementById("expmm");
const expyy = document.getElementById("expyy");
const cvc = document.getElementById("cvc");
const submit = document.getElementById("submit");
const blankname = document.getElementById("blankname");
const wrongname = document.getElementById("wrongname");
const blanknumber = document.getElementById("blanknumber");
const wrongnumber = document.getElementById("wrongnumber");
const blankexp = document.getElementById("blankexp");
const wrongexp = document.getElementById("wrongexp");
const blankcvc = document.getElementById("blankcvc");
const wrongcvc = document.getElementById("wrongcvc");
const confirm = document.getElementById("confirm");
const complete = document.getElementById("complete");
const pname = /^[A-Za-z]{1,20}\s[A-Za-z]{1,30}$/;
const pcardno = /^[0-9]{4}\s[0-9]{4}\s[0-9]{4}\s[0-9]{4}$/;
const pexpmm = /^[0-9]{2}$/;
const pexpyy = /^[0-9]{2}$/;
const pcvc = /^[0-9]{3}$/;
const shname = document.getElementById("shname");
const shnumber = document.getElementById("shnumber");
const shexpmm = document.getElementById("shexpmm");
const shexpyy = document.getElementById("shexpyy");
const shcvc = document.getElementById("shcvc");
const reset = document.getElementById("reset");

function validnames() {
  if (names.value == "") {
    blankname.className = "show";
    names.style.borderColor = "hsl(0, 100%, 66%)";
  } else if (!pname.test(names.value)) {
    wrongname.className = "show";
    names.style.borderColor = "hsl(0, 100%, 66%)";
  }
}

function validnumber() {
  if (cardno.value == "") {
    blanknumber.className = "show";
    cardno.style.borderColor = "hsl(0, 100%, 66%)";
  } else if (!pcardno.test(cardno.value)) {
    wrongnumber.className = "show";
    cardno.style.borderColor = "hsl(0, 100%, 66%)";
  }
}

function validexp() {
  if (expmm.value == "" && expyy.value == "") {
    blankexp.className = "show";
    expmm.style.borderColor = "hsl(0, 100%, 66%)";
    expyy.style.borderColor = "hsl(0, 100%, 66%)";
  } else if (expmm.value == "") {
    blankexp.className = "show";
    expmm.style.borderColor = "hsl(0, 100%, 66%)";
  } else if (expyy.value == "") {
    blankexp.className = "show";
    expyy.style.borderColor = "hsl(0, 100%, 66%)";
  } else if (!pexpmm.test(expmm.value) && !pexpyy.test(expyy.value)) {
    wrongexp.className = "show";
    expmm.style.borderColor = "hsl(0, 100%, 66%)";
    expyy.style.borderColor = "hsl(0, 100%, 66%)";
  } else if (!pexpmm.test(expmm.value)) {
    wrongexp.className = "show";
    expmm.style.borderColor = "hsl(0, 100%, 66%)";
  } else if (!pexpyy.test(expyy.value)) {
    wrongexp.className = "show";
    expyy.style.borderColor = "hsl(0, 100%, 66%)";
  }
}

function validcvc() {
  if (cvc.value == "") {
    blankcvc.className = "show";
    cvc.style.borderColor = "hsl(0, 100%, 66%)";
  } else if (!pcvc.test(cvc.value)) {
    wrongcvc.className = "show";
    cvc.style.borderColor = "hsl(0, 100%, 66%)";
  }
}

submit.addEventListener("click", validnames);
submit.addEventListener("click", validnumber);
submit.addEventListener("click", validexp);
submit.addEventListener("click", validcvc);

function clear() {
  blankname.className = "hide";
  wrongname.className = "hide";
  blanknumber.className = "hide";
  wrongnumber.className = "hide";
  blankexp.className = "hide";
  wrongexp.className = "hide";
  blankcvc.className = "hide";
  wrongcvc.className = "hide";
  names.style.borderColor = "#aaa";
  cardno.style.borderColor = "#aaa";
  expmm.style.borderColor = "#aaa";
  expyy.style.borderColor = "#aaa";
  cvc.style.borderColor = "#aaa";
}

names.addEventListener("focus", clear);
cardno.addEventListener("focus", clear);
expmm.addEventListener("focus", clear);
expyy.addEventListener("focus", clear);
cvc.addEventListener("focus", clear);

function completion(e) {
  e.preventDefault();
  if (
    pname.test(names.value) &&
    pcardno.test(cardno.value) &&
    pexpmm.test(expmm.value) &&
    pexpyy.test(expyy.value) &&
    pcvc.test(cvc.value)
  ) {
    confirm.classList.add("hide");
    complete.classList.remove("hide");
    complete.classList.add("showcomp");
  }
}

submit.addEventListener("click", completion);

names.addEventListener("input", () => {
  shname.innerHTML = names.value;
});
cardno.addEventListener("input", () => {
  shnumber.innerHTML = cardno.value;
});
expmm.addEventListener("input", () => {
  shexpmm.innerHTML = expmm.value;
});
expyy.addEventListener("input", () => {
  shexpyy.innerHTML = expyy.value;
});
cvc.addEventListener("input", () => {
  shcvc.innerHTML = cvc.value;
});

reset.addEventListener("click", function () {
  location.reload();
});
