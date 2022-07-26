// ITERATION 1

function updateSubtotal(product) {
  //console.log('Calculating subtotal, yey!');
  let price = product.querySelector(".price span").innerText;
  let quantity = +product.querySelector(".quantity input").value;
  let subtotal = price * quantity;

  product.querySelector(".subtotal span").innerText = subtotal;
  return subtotal;

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  let products = document.querySelectorAll(".product");
  for (let i = 0; i < products.length; i++){
    updateSubtotal(products[i]);
  }
  // ITERATION 3
  //... your code goes here
  let total = 0;
  for (let i = 0; i < products.length; i++){
    total += updateSubtotal(products[i]);
  }
  document.querySelector("#total-value span").innerText = total;
  return products;
}

// ITERATION 4

function removeProduct(event) {
  // const target = event.currentTarget;
  // console.log('The target in remove is:', target);
  //... your code goes here
  let product = document.querySelector(".product");
  product.parentNode.removeChild(product);
}

// ITERATION 5

function createProduct(event) {
  //... your code goes here
  let productAdded = document.querySelector(".createProduct");
  productAdded.parentNode.appendChild(productAdded);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  let removeButton = document.querySelectorAll(".btn.btn-remove");
  for(let i=0; i < removeButton.length; i++){
    removeButton[i].addEventListener("click", removeProduct)
  }
  let createButton = document.querySelectorAll(".btn-create");
  for(let i=0; i < createButton.length; i++){
    createButton[i].addEventListener("click", createProduct)
  }

});
