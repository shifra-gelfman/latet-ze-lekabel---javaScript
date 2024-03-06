const dom = {
    products: document.getElementById("products")
}

let products = [{
    name: "הרים מושלגים", 
    price: "50000",
    amount:"20",
    src:"200072878_dff2cf4614_o.jpg",
    artist:"מיי טאהן", 
    about : "הרים מושלגים על רקע עמק פורח"
}];


$.ajax({
    url: "./products.json",
    success: ( result ) => {
      
      products = result;
      console.log('products', products);
      drawProducts();

    }
  });
  

const drawProducts = () => {
    products.forEach(p => {
        dom.products.innerHTML += `<div class="basic-style col-lg-2 col-md-4 col-sm-6 col-xs-12">
        <h3>${ p.name }</h3>
        <img src="./pictures/${ p.src }" width="80px" />
        </div>`
    })
}

// drawProducts();

// const x = "aasdfa" + products[0] + "ertw"

//bootstrap code
const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert('Nice, you triggered this alert message!', 'success')
  })
}
