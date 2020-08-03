import View from "./View.js";

const tag = "[FormView]";

const FormView = Object.create(View);

FormView.setup = function (el) {
  this.init(el);
  this.inputEl = el.querySelector("[type=text]");
  this.resetEl = el.querySelector("[type=reset]");
  this.showResetBtn(false);
  this.bindEvents();
  return this;
};

FormView.showResetBtn = function (show = true) {
  this.resetEl.style.display = show ? "block" : "none";
};

FormView.bindEvents = function () {
  this.inputEl.addEventListener("keyup", (event) => this.onKeyup(event));
};

FormView.onKeyup = function (e) {
  const enter = 13;
  this.showResetBtn(this.inputEl.value.length);
  if (e.keyCode !== enter) return;
  this.emit("@submit", { input: this.inputEl.value });
};

export default FormView;
