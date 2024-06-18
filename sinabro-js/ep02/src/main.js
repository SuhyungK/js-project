import test from "./test.json?raw";

async function getProducts() {
  if (process.env.NODE_ENV === "development") {
    return JSON.parse(test);
  } else {
    const response = await fetch(
      "https://learnwitheunjae.dev/api/sinabro-js/ecommerce"
    );

    return await response.json();
  }
}

async function main() {
  const products = await getProducts();
  console.log("products ", products);

  document.querySelector("#products").innerHTML = products
    .map(
      (product) => `
      <div class="product">
        <img src="${product.images[0]}" alt="Image of ${product.name}" />
        <p>${product.name}</p>
        <div class="flex items-center justify-between">
          <span>Price : ${product.regularPrice}</span>
          <div>
            <button type="button" class="bg-green-200 hover:bg-green-300 py-1 px-3 rounded-full text-green-800">-</button>
            <span class="hidden text-green-900">3</span>
            <button type="button" class="bg-green-200 hover:bg-green-300 py-1 px-3 rounded-full text-green-800">+</button>
          </div>
        </div>
      </div>
      `
    )
    .join("");
}

main();
