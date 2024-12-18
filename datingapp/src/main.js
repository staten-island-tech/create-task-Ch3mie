import "./style.css";
import { people } from "./people.js";
import { DOMSelectors } from "./DOM.js";

let index = 0;

Displaypeople(people);

function Displaypeople(people) {
  let person = people[index];
  DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
    ` 
    <div class="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src="${person.image}"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${person.name}</h2>
    <p>${person.race}</p>
    <p>${person.gender}</p>
    <p>${person.age}</p>
    <p>${person.exes}</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    `
  );
  index++;
}

function ILikey() {
  Ilikebutton.addEventListener("click", (event) => {
    event.preventDefault();
    DOMSelectors.container2.insertAdjacentHTML(
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
