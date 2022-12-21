{/* <div class="col-lg-4 ml-3 col-md-6 avatar">
                                        <img src="images/avatar_hat.jpg" alt="">
                                        <p>Let's talk about websites</p>
                                    </div> */}

let dom = document.getElementById('dom')

fetch('https://dummyjson.com/products/')
.then(res => res.json())
.then(json => getProducts(json))


function getProducts(data) {
    console.log(data.products)
    data.products.forEach(products => {
        console.log(products)
        dom.innerHTML +=` 
         <div class="col-lg-4 ml-3 col-md-6 card mb-1 mt-2 p-2  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);">
             <img src="${products.thumbnail}" alt=""> <br> <br>
             <p>$ ${products.title}</p>
             <p>$ ${products.description}</p>
             <p>$ ${products.price}</p>
             <p>$ ${products.discountPercentage}</p>
          </div>
        `
    })
    
}
 