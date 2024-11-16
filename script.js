
 let allProduct = [];
 
fetch('https://fakestoreapi.com/products')
  .then(res => res.json())
  .then(json => {
    allProduct = json;
    console.log(allProduct)
    diplayProduct(allProduct);
  });

 function diplayProduct(products){
  let container = document.getElementById("pContainer")
  container.innerHTML="";
    for (let product of products) {
      
      container.innerHTML += `<div class="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-3">
        <div class="card">
            <img src=${product.image} class="card-img-top p-3 pt-0" alt="...">
            <div class="card-body">
              <h5 class="card-title">${product.title}</h5>
              <span class="tex-success">$${product.price}</span>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <div class="d-flex">
              <a href="#" class="btn btn-warning">View Products</a>
              <a href="#" class="btn btn-primary ms-1">Add to Cart</a>
            </div>
            </div>
          </div> `
    
    }
 }

  function searchProduct(){
    let input = document.getElementById("searchbar").value.toLowerCase();
  let filteredProducts = allProduct.filter((list)=>{
    return list.title.toLowerCase().includes(input)
  })
  diplayProduct(filteredProducts)
  }


