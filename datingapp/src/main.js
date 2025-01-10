import "./style.css";
import { people } from "./people.js";
import { DOMSelectors } from "./DOM.js";

let shuffledPeople = [...people].sort(() => 0.5 - Math.random());

let index = 0;
let matches = [];
Displaypeople(shuffledPeople);

function Displaypeople(peopleArray) {
  console.log(index);
  let person = peopleArray[index];
  console.log(person);

  DOMSelectors.container.className =
    "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center";

  if (person == undefined) {
    matches.forEach((person) =>
      DOMSelectors.container.insertAdjacentHTML(
        "beforeend",
        ` 
      <div class="card bg-base-100 w-[500px] h-[700px] shadow-xl flex flex-col">
        <figure class="w-full h-80 flex items-center justify-center">
          <img
            src="${person.image}"
            alt="person"
            class="object-contain w-full h-full"
          />
        </figure>
        <div class="card-body flex-1 flex flex-col justify-between">
          <h2 class="card-title text-2xl">${person.name}</h2>
          <p>Race: ${person.race}</p>
          <p>Gender: ${person.gender}</p>
          <p>Age: ${person.age}</p>
          <p>Exes: ${person.exes}</p>
          <p class="italic">"${person.catchphrase}"</p>
        </div>
      </div>
        `
      )
    );
  } else {
    DOMSelectors.container.className =
      "flex justify-center items-center min-h-screen";
    DOMSelectors.container.innerHTML = `
      <div class="card bg-base-100 w-[500px] h-[700px] shadow-xl flex flex-col">
        <figure class="w-full h-80 flex items-center justify-center">
          <img
            src="${person.image}"
            alt="person"
            class="object-contain w-full h-full"
          />
        </figure>
        <div class="card-body flex-1 flex flex-col justify-between">
          <h2 class="card-title text-2xl">${person.name}</h2>
          <p>Race: ${person.race}</p>
          <p>Gender: ${person.gender}</p>
          <p>Age: ${person.age}</p>
          <p>Exes: ${person.exes}</p>
          <p class="italic">"${person.catchphrase}"</p>
          <div class="card-actions justify-end">
            <button class="NoLikebutton btn btn-primary">No like</button>
            <button class="Likebutton btn btn-primary">Like</button>
          </div>
        </div>
      </div>
    `;
    ILikey(person, peopleArray);
    INoLikey(peopleArray);
  }
}

function ILikey(person, peopleArray) {
  const Likebutton = document.querySelector(".Likebutton");
  Likebutton.addEventListener("click", (event) => {
    event.preventDefault();
    matches.push(person);
    DOMSelectors.container.innerHTML = "";

    index++;
    Displaypeople(peopleArray);
  });
}

function INoLikey(peopleArray) {
  const NoLikebutton = document.querySelector(".NoLikebutton");
  NoLikebutton.addEventListener("click", (event) => {
    event.preventDefault();
    DOMSelectors.container.innerHTML = "";
    index++;
    Displaypeople(peopleArray);
  });
}

const themeButton = document.querySelector(".btn-secondary");

themeButton.addEventListener("click", () => {
  const currentTheme = document.body.getAttribute("data-theme");

  const newTheme = currentTheme === "light" ? "dark" : "light";

  document.body.setAttribute("data-theme", newTheme);
});
