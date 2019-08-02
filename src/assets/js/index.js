import "../scss/styles.scss";
import { Polygon } from "./shape";
import { validation } from "./validation";

let width = document.getElementById("width");
let height = document.getElementById("height");
const submit = document.querySelector("#submit");
const answer = document.querySelector("#answer");

submit.addEventListener("click", () => {
  //validation
  if (!validation(height.value) && !validation(width.value)) {
    let polygon = new Polygon(width.value, height.value);
    let area = polygon.area();
    answer.value = area;
  } else {
    alert("Input can only be number");
  }
  clearFields();
});

let clearFields = () => {
  width.value = "";
  height.value = "";
};
