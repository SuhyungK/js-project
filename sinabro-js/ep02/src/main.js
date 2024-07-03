import test from "./test.json?raw";

async function getProducts() {
  if (process.env.NODE_ENV === "development") {
    return JSON.parse(test);
  } else {
    console.log("fetch!");
    const response = await fetch(
      "https://learnwitheunjae.dev/api/sinabro-js/ecommerce"
    );

    return await response.json();
  }
}

// +/- 버튼의 상위 태그(.product) 찾기
function findElement(startingElement, selector) {
  let currentElement = startingElement;
  while (currentElement) {
    if (currentElement.matches(selector)) {
      return currentElement;
    }

    currentElement = currentElement.parentElement;
  }
  return null;
}

function sumAllCounts(countMap) {
  // let sum = 0;
  // Object.values(countMap).forEach((number) => {
  //   sum += number;
  // });
  // return sum;

  return Object.values(countMap).reduce((total, current) => {
    total += current;
    return total;
  });
}

function getProductHTML(product, count = 0) {
  return `
      <div class="product" data-product-id="${product.id}">
        <img src="${product.images[0]}" alt="Image of ${product.name}" />
        <p>${product.name}</p>
        <div class="flex items-center justify-between">
          <span>Price : ${product.regularPrice}</span>
          <div>
            <button type="button" ${
              count === 0 ? "disabled" : ""
            } class="disabled:bg-green-100 btn-decrease bg-green-200 hover:bg-green-300 py-1 px-3 rounded-full text-green-800">-</button>
            <span class="cart-count text-green-900">${count}</span>
            <button type="button" class="disabled:bg-green-100 btn-increase bg-green-200 hover:bg-green-300 py-1 px-3 rounded-full text-green-800">+</button>
          </div>
        </div>
      </div>
      `;
}

async function main() {
  const products = await getProducts();
  // 상품에 대한 정보
  const productMap = {};
  products.forEach((product) => {
    productMap[product.id] = product;
  });
  // 수량에 대한 정보
  const countMap = {};

  const updateProductCount = (productId) => {
    const productElement = document.querySelector(
      `.product[data-product-id="${productId}"]`
    );
    const cartCountElement = productElement.querySelector(".cart-count");
    cartCountElement.innerHTML = countMap[productId];
  };

  const updateCart = () => {
    const productIds = Object.keys(countMap);
    document.querySelector(".cart-items").innerHTML = productIds
      .map((productId) => {
        if (countMap[productId] !== 0) {
          const productInCart = productMap[productId];
          return getProductHTML(productInCart, countMap[productId]);
        } else {
          return null;
        }
      })
      .join("");

    const totalCount = sumAllCounts(countMap);
    const totalCountText = document.querySelector(".total-count");
    if (totalCount === 0) {
      totalCountText.innerHTML = "";
    } else {
      totalCountText.innerHTML = `(${totalCount})`;
    }
  };

  const increaseCount = (productId, element) => {
    if (!countMap[productId]) {
      countMap[productId] = 0;
    }

    countMap[productId] += 1;
    console.log("element", element, countMap[productId] === 1);
    if (countMap[productId] === 1) {
      element.querySelector(".btn-decrease").removeAttribute("disabled");
    }
  };

  const decreaseCount = (productId, element) => {
    if (!countMap[productId]) {
      countMap[productId] = 0;
    }

    countMap[productId] -= 1;
    if (countMap[productId] === 0) {
      element.querySelector(".btn-decrease").setAttribute("disabled", true);
    }
  };

  document.querySelector("#products").innerHTML = products
    .map((product) => getProductHTML(product))
    .join("");

  document.querySelector("#products").addEventListener("click", (event) => {
    const targetElement = event.target;
    const productElement = findElement(targetElement, ".product");
    const productId = productElement.getAttribute("data-product-id");

    // 수량 증가/감소 버튼
    if (
      targetElement.matches(".btn-decrease") ||
      targetElement.matches(".btn-increase")
    ) {
      if (targetElement.matches(".btn-decrease")) {
        decreaseCount(productId, productElement);
        updateProductCount(productId);
        updateCart();
      } else if (targetElement.matches(".btn-increase")) {
        increaseCount(productId, productElement);
        updateProductCount(productId);
        updateCart();
      }
    }
  });

  document.querySelector(".cart-items").addEventListener("click", (event) => {
    const targetElement = event.target;
    const productElement = findElement(targetElement, ".product");
    const productId = productElement.getAttribute("data-product-id");

    console.log(productElement);
    // 수량 증가/감소 버튼
    if (
      targetElement.matches(".btn-decrease") ||
      targetElement.matches(".btn-increase")
    ) {
      if (targetElement.matches(".btn-decrease")) {
        decreaseCount(productId, productElement);
        updateProductCount(productId);
        updateCart();
      } else if (targetElement.matches(".btn-increase")) {
        increaseCount(productId, productElement);
        updateProductCount(productId);
        updateCart();
      }
    }
  });

  // Cart 버튼 클릭시
  document.querySelector(".btn-cart").addEventListener("click", () => {
    // document.querySelector(".cart-layer").style.display = "block";
    document.body.classList.add("displaying-cart");
  });

  // Close 버튼 클릭시
  document.querySelector(".btn-close-cart").addEventListener("click", () => {
    document.body.classList.remove("displaying-cart");
  });

  // Cart 창 외의 부부 클릭 시 Close
  document.querySelector(".cart-dimmed-bg").addEventListener("click", () => {
    document.body.classList.remove("displaying-cart");
  });
}

main();
