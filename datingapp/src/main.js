import "./style.css";
import { people } from "./people.js";
import { DOMSelectors } from "./DOM.js";

let index = 0;

Displaypeople(people);

function Displaypeople(people) {
  let person = people[index];
  DOMSelectors.container2.insertAdjacentHTML(
    "beforeend",
    ` 
      <div class="card">
        <h2>${person.name}</h2>
        <h4>${person.age}, ${person.race}</h4>
        <h4>${person.gender} | exes: ${person.exes}</h4>
        <img class="imagesize" src="${person.image}" alt="e" />
         <button class="Ilikebutton">Dylan goons</button>
          <button class="Inolikebutton">Dylan dosent goon</button>
      </div>
    `
  );
  index++;
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
  });
}

function INoLikey(name) {
  Inolikebutton.addEventListener("click", (event) => {
    event.preventDefault();
    cardArray = cardArray.filter((item) => item.name !== name);
  });
}
