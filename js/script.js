let count = 0;
let price = 0;
let buttons = document.getElementsByClassName("buy-btn");
for (let button of buttons) {
  button.addEventListener("click", function (event) {
    count++;
    let productItem = document.getElementById("total-product");
    productItem.innerText = count;
    let productName = event.target.parentNode.parentNode.children[0].innerText;
    let productPrice =
      event.target.parentNode.parentNode.children[2].children[0].innerText;

    let cardBody = document.getElementById("tbody");
    let cart = document.createElement("tr");
    cart.innerHTML = `
                    <tr>
                    <th>${count}</th>
                    <td>${productName}</td>
                    <td>$${productPrice}</td>
                  </tr>`;

    let totalTr = document.getElementById("last-tr");
    cardBody.insertBefore(cart, totalTr);

    productPrice = parseInt(productPrice);
    price = price + productPrice;
    let totalPrice = document.getElementById("total-price");
    totalPrice.innerText = price;
  });
}

//wish list
let svgheart = document.getElementsByTagName("svg");
for (let svg of svgheart) {
  svg.addEventListener("click", function () {
    svg.style.fill = "pink";
  });
}
let svgheart2 = document.getElementsByTagName("svg");
for (let svg of svgheart2) {
  svg.addEventListener("dblclick", function () {
    svg.style.fill = "none";
  });
}
