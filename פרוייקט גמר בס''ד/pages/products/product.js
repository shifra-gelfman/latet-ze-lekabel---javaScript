const dom ={
  formFilter: document.formFilter,
  filter: document.getElementById("filter")
}
//////////////////////////////////מוצרים בין 100 ל1000
let products = [{ id: "default", name: "default", price: "default", url: "default", description: "default" }]
$.ajax({
  url: "../../pages/products/Prizes.from 100 to 1000.json",
  success: (result) => {
    console.log(result);
    products = result;
    drawproducts();
  }
});
const drawproducts = () => {
  products.forEach(product => {
    drawproduct(product);

  });
}

//////////////////////////////////מוצרים בין 1000 ל3000

let products1 = [{ id: "default", name: "default", price: "default", url: "default", description: "default" }]
$.ajax({
  url: "../../pages/products/Prizes.from 1000 to 3000.json",
  success: (result) => {
    console.log(result);
    products1 = result;
    drawproducts1();
  }
});
const drawproducts1 = () => {
  products1.forEach(product => {
    drawproduct(product);

  });
}

//////////////////////////////////מוצרים בין 3000 ל7000

let products2 = [{ id: "default", name: "default", price: "default", url: "default", description: "default" }]
$.ajax({
  url: "../../pages/products/Prizes.from 3000 to 7000.json",
  success: (result) => {
    console.log(result);
    products2 = result;
    drawproducts2();
  }
});
const drawproducts2 = () => {
  products2.forEach(product => {
    drawproduct(product);

  });
}
//////////////////////////////////מוצרים בין 7000 ל10000

let products3 = [{ id: "default", name: "default", price: "default", url: "default", description: "default" }]
$.ajax({
  url: "../../pages/products/Prizes.from 7000 to 10000.json",
  success: (result) => {
    console.log(result);
    products3 = result;
    drawproducts3();
  }
});
const drawproducts3 = () => {
  products3.forEach(product => {
    drawproduct(product);

  });
}
dom.formFilter.onsubmit = (event) => {
  const form = {
    filterValue: filter.value
  }
  event.preventDefault();
  if (form.filterValue === "100") {
    prod.innerHTML="";
    //////////////////////////////////מוצרים בין 100 ל1000
    let products = [{ id: "default", name: "default", price: "default", url: "default", description: "default" }]
    $.ajax({
      url: "../../pages/products/Prizes.from 100 to 1000.json",
      success: (result) => {
        console.log(result);
        products = result;
        drawproducts();
      }
    });
    const drawproducts = () => {
      products.forEach(product => {
        drawproduct(product);

      });
    }

    //////////////////////////////////מוצרים בין 1000 ל3000

    let products1 = [{ id: "default", name: "default", price: "default", url: "default", description: "default" }]
    $.ajax({
      url: "../../pages/products/Prizes.from 1000 to 3000.json",
      success: (result) => {
        console.log(result);
        products1 = result;
        drawproducts1();
      }
    });
    const drawproducts1 = () => {
      products1.forEach(product => {
        drawproduct(product);

      });
    }

    //////////////////////////////////מוצרים בין 3000 ל7000

    let products2 = [{ id: "default", name: "default", price: "default", url: "default", description: "default" }]
    $.ajax({
      url: "../../pages/products/Prizes.from 3000 to 7000.json",
      success: (result) => {
        console.log(result);
        products2 = result;
        drawproducts2();
      }
    });
    const drawproducts2 = () => {
      products2.forEach(product => {
        drawproduct(product);

      });
    }
    //////////////////////////////////מוצרים בין 7000 ל10000

    let products3 = [{ id: "default", name: "default", price: "default", url: "default", description: "default" }]
    $.ajax({
      url: "../../pages/products/Prizes.from 7000 to 10000.json",
      success: (result) => {
        console.log(result);
        products3 = result;
        drawproducts3();
      }
    });
    const drawproducts3 = () => {
      products3.forEach(product => {
        drawproduct(product);

      });
    }
  }
  if (form.filterValue === "1000") {
    prod.innerHTML="";
    //////////////////////////////////מוצרים בין 1000 ל3000

    let products1 = [{ id: "default", name: "default", price: "default", url: "default", description: "default" }]
    $.ajax({
      url: "../../pages/products/Prizes.from 1000 to 3000.json",
      success: (result) => {
        console.log(result);
        products1 = result;
        drawproducts1();
      }
    });
    const drawproducts1 = () => {
      products1.forEach(product => {
        drawproduct(product);

      });
    }

    //////////////////////////////////מוצרים בין 3000 ל7000

    let products2 = [{ id: "default", name: "default", price: "default", url: "default", description: "default" }]
    $.ajax({
      url: "../../pages/products/Prizes.from 3000 to 7000.json",
      success: (result) => {
        console.log(result);
        products2 = result;
        drawproducts2();
      }
    });
    const drawproducts2 = () => {
      products2.forEach(product => {
        drawproduct(product);

      });
    }
    //////////////////////////////////מוצרים בין 7000 ל10000

    let products3 = [{ id: "default", name: "default", price: "default", url: "default", description: "default" }]
    $.ajax({
      url: "../../pages/products/products.html",
      success: (result) => {
        console.log(result);
        products3 = result;
        drawproducts3();
      }
    });
    const drawproducts3 = () => {
      products3.forEach(product => {
        drawproduct(product);

      });
    }
  }
  if (form.filterValue === "3000") {
    prod.innerHTML="";
    //////////////////////////////////מוצרים בין 3000 ל7000

    let products2 = [{ id: "default", name: "default", price: "default", url: "default", description: "default" }]
    $.ajax({
      url: "../../pages/products/Prizes.from 3000 to 7000.json",
      success: (result) => {
        console.log(result);
        products2 = result;
        drawproducts2();
      }
    });
    const drawproducts2 = () => {
      products2.forEach(product => {
        drawproduct(product);

      });
    }
    //////////////////////////////////מוצרים בין 7000 ל10000

    let products3 = [{ id: "default", name: "default", price: "default", url: "default", description: "default" }]
    $.ajax({
      url: "../../pages/products/Prizes.from 7000 to 10000.json",
      success: (result) => {
        console.log(result);
        products3 = result;
        drawproducts3();
      }
    });
    const drawproducts3 = () => {
      products3.forEach(product => {
        drawproduct(product);

      });
    }
  }
  if (form.filterValue === "7000") {
    prod.innerHTML="";
    //////////////////////////////////מוצרים בין 7000 ל10000

    let products3 = [{ id: "default", name: "default", price: "default", url: "default", description: "default" }]
    $.ajax({
      url: "../../pages/products/Prizes.from 7000 to 10000.json",
      success: (result) => {
        console.log(result);
        products3 = result;
        drawproducts3();
      }
    });
    const drawproducts3 = () => {
      products3.forEach(product => {
        drawproduct(product);

      });
    }
  }
}



//יוצר את רשימת המוצרים
const prod = document.getElementById("prod");


//פונקצייה עבור כל מוצר
const drawproduct = (product) => {
  //כפתור להרחבה
  const addbutton = document.createElement('button');
  addbutton.innerHTML = 'לפרטים';


  //LI עבור כל מוצר
  const li = document.createElement('li');
  li.innerHTML = `<img src="../../assets/${product.url}" width="294px" height="290px"/>` + "   " + product.name + " " + `<div id="p">${product.price} נקודות</div>` + " ";
  prod.appendChild(li);
  li.appendChild(addbutton);

  //פונקצייה שמרחיבה בעת לחיצה על addbutton
  addbutton.onclick = () => {
    const square = document.getElementById("square");
    const closes = document.createElement('div');
    const cart = document.createElement('button');
    cart.innerHTML = `  הוסף לסל${"  "}<i class="fas fa-shopping-basket" id="iconCart"></i>`
    closes.innerHTML = `<i class="fas fa-times-circle" id="icon"></i>`;
    square.innerHTML = closes.innerHTML + ` <div><img src="../../assets/${product.url}" width="450px" height="450px"/div><div id="des-price">${"   "}  ${product.name}  ${"   "}<p>${product.description}</p><div id="p"> ${"   "}${product.price} נקודות</div><span  id="iconCart" >${cart.innerHTML}</span></div></div>`;
    square.style.display = "block";
    const ProdPoints = product.price;
    const iconCart = document.getElementById("iconCart");
    // פונקצייה לחיצה על הוסף לסל
    iconCart.onclick = () => {
      const PresentUser = localStorage.getItem('IdPresentUser');
      if (PresentUser === "") {
        alert("אתה לא מחובר נא להתחבר!");
        window.location.href = "../../pages/home/user.html"
      }
      else {
        const strPresentUser = JSON.parse(PresentUser);
        const points = localStorage.getItem("pointsOf" + strPresentUser.Idnumber1);
        if (points - ProdPoints < 0) {
          alert(" אופס אין לך מספיק נקודות נשארו לך רק " + points + " תנסה פרס אחר נקודות. ");
          window.location.href = "../../pages/products/products.html";
        }
        else {
          let c = localStorage.getItem("count" + strPresentUser.Idnumber1);
          const nowPoints = points - ProdPoints;
          localStorage.setItem("pointsOf" + strPresentUser.Idnumber1, JSON.stringify(nowPoints));
          localStorage.setItem(strPresentUser.Idnumber1 + c, JSON.stringify(product));
          c++;
          localStorage.setItem("count" + strPresentUser.Idnumber1, c)
          alert("   המוצר נוסף בהצלחה כעת ברשותך:  " + " " + nowPoints + " " + "נקודות.")
          window.location.href = "../../pages/products/products.html";
        }
      }

    }
  }

  //סגירת ההרחבה
  document.addEventListener('click', function (event) {
    if (event.target.matches('#icon'))
      closess();
  })
  const closess = () => {
    const square = document.getElementById("square");
    square.style.display = "none";
  }
}

// סינון מוצרי