// document.querySelector("#app").innerHTML = `
//   <button type="button" class="hello1">Check the input</button>
//   <button type="button" class="hello2">Hello2</button>
//   <button type="button" class="hello3">Hello3</button>

//   <div>
//     <input class="name" type="text" placeholder="Type your name: " />
//   </div>

//   <div class="parent-of-button">
//     <button class="helloworld-button" type="button">
//       <span>Hello</span>
//       <span>World</span>
//     </button>
//   </div>
// `;

// document.querySelector("button").addEventListener("click", function (event) {
//   const input = document.querySelector(".name");
//   console.log(input.value);
// });

// document.querySelector(".name").addEventListener("input", (event) => {
//   console.log(event.target.value);
// });

// document
//   .querySelector(".helloworld-button")
//   .addEventListener("click", (event) => {
//     event.stopPropagation();
//     console.log("event from button", event);
//   });

// document
//   .querySelector(".parent-of-button")
//   .addEventListener("click", (evnet) => {
//     console.log("event from div", event);
//   });

// document.querySelector(".name").addEventListener("keyup", (event) => {
//   console.log("input keyup", event);
// });

// document.body.addEventListener("keyup", (event) => {
//   console.log(event.key);
// })

// document.querySelector("#app").innerHTML = `
//   <input />
//   <button>Click</button>
// `;

// document.querySelector("button").addEventListener("click", () => {
//   const currentValue = document.querySelector("input").value;

//   document.querySelector("input").value = currentValue + "*";
// });

// let count = 0;
// setInterval(() => {
//   count += 1;
//   document.querySelector("#app").innerHTML = `
//     <input />
//     <button>Click</button>
//     <p>count : ${count}</p>
//   `;
// }, 5000);


document.querySelector("#app").innerHTML = `
  <button class="btn-add-card" type="button">Add Card</button>

  <div class="cards"></div>
`

let cardCount = 0;
document.querySelector(".btn-add-card").addEventListener("click", () => {
  cardCount += 1;
  const card = document.createElement("div");
  card.setAttribute("data-number", cardCount)
  card.className = "card";
  card.innerHTML = `
    <p>Card #${cardCount}</p>
    // <button class="btn-hello" type="button" data-number="${cardCount}">hello</button>
    <button class="btn-hello" type="button">hello</button>
  `

  const myCardCount = cardCount;
  // card.querySelector(".btn-hello").addEventListener("click", () => {
  //   console.log(`hello! ${myCardCount}`);
  // });

  document.querySelector(".cards").appendChild(card);
});

document.querySelector(".cards").addEventListener("click", (event) => {
  console.log("click from .cards", event)
  
  if (event.target.matches('.btn-hello')) {
    console.log("button is clicked!");
    console.log("button is clicked!", event.target.getAttribute("data-number"));
  }

})