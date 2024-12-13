import "./style.css";
import { people } from "./people.js";
import { DOMSelectors } from "./DOM.js";

function Displaypeople(people) {
  DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
    `
      <div class="card">
        <h2>${person.name}</h2>
        <h4>${person.age}, ${person.race}</h4>
        <h4>${person.gender} | exes: ${person.exes}</h4>
        <img class="imagesize" src="${person.image}" alt="e" />
      </div>
    `
  );
}

function ILikey() {
  Ilikebutton.addEventListener("click", (event) => {
    event.preventDefault();
    DOMSelectors.container.insertAdjacentHTML(
      "beforeend",
      `
        <div class="card">
          <h2>${person.name}</h2>
          <h4>${person.age}, ${person.race}</h4>
          <h4>${person.gender} | exes: ${person.exes}</h4>
          <img class="imagesize" src="${person.image}" alt="e" />
        </div>
      `
    );
})
}

function INoLikey() {
  Ilikebutton.addEventListener("click", (event) => {
    event.preventDefault();
    //Make something to remove the card from the array pool
}