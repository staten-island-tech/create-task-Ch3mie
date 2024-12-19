import "./style.css";
import { people } from "./people.js";
import { DOMSelectors } from "./DOM.js";

let index = 0;
Displaypeople(people);

function Displaypeople(people) {
  console.log(index);
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
    <button class="NoLikebutton btn btn-primary">No like</button>
      <button class="Likebutton btn btn-primary">Like</button>
    </div>
  </div>
</div>
    `
  );
  ILikey(person);
  INoLikey();
}

function ILikey(person) {
  const Likebutton = document.querySelector(".Likebutton");
  Likebutton.addEventListener("click", (event) => {
    event.preventDefault();
    DOMSelectors.container.innerHTML = "";
    DOMSelectors.container2.insertAdjacentHTML(
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
   
    </div>
  </div>
</div>
      `
    );
    index++;
    Displaypeople(people);
  });
}

function INoLikey(name) {
  const NoLikebutton = document.querySelector(".NoLikebutton");
  NoLikebutton.addEventListener("click", (event) => {
    event.preventDefault();
    DOMSelectors.container.innerHTML = "";
    index++;
    Displaypeople(people);
  });
}
