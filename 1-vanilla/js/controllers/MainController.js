import FormView from "../views/FormView";
import FromView from "../views/FormView.js";
const tag = "[MainController]";

export default {
  init() {
    console.log(tag, "init()");
    FromView.setup(document.querySelector("form"));
  },
};
