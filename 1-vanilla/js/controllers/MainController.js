import FormView from "../views/FormView.js";
const tag = "[MainController]";

export default {
  init() {
    console.log(tag, "init()");
    FormView.setup(document.querySelector("form"));
    FormView.on("@submit", (e) => this.onsubmit());
  },

  onsubmit(input) {
    console.log(tag, "onSumbmit()", input);
  },
};
