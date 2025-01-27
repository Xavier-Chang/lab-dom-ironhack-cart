// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  const subtotal = price * quantity;
  const subtotalElm = product.querySelector('.subtotal span');
  subtotalElm.innerHTML = subtotal;
  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const productElm = document.getElementsByClassName('product');
  const productArr = [...productElm];
  
  productArr.map((e) => {
    updateSubtotal(e);
  });

  // ITERATION 3
  //... your code goes here
  let sum = 0;
  productArr.forEach((e) => {
    sum += updateSubtotal(e);
  });
  const total = document.querySelector('#total-value span');
  total.innerHTML = sum;
  
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  const removeBtn = document.querySelectorAll('.btn');
  removeBtn.forEach( (e) => {
    e.addEventListener("click", (elm)=> {
   
      
    })
  }
  )
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
