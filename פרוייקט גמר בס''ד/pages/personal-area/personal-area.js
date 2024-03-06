
const myCart = document.getElementById("myCart");
const strPresentUser = localStorage.getItem('IdPresentUser');
const PresentUser = JSON.parse(strPresentUser);
const point = localStorage.getItem("pointsOf" + PresentUser.Idnumber1);
const page = window.location.href;
const prodList = document.getElementById("prodList");
// const deletebutton = document.createElement('button');
if (strPresentUser === "") {
    window.location.href = "../../pages/home/user.html"
}
if (page.includes("http://127.0.0.1:5501/pages/personal-area/personal-area.html")) {
    c = null;
    num = 0;
    count = localStorage.getItem("count" + PresentUser.Idnumber1);
    myCart.innerHTML = `  <i class ="fas fa-user" ></i>  ` + PresentUser.firstName1 + " " + PresentUser.lastName1 + ` <div><i class ="fas fa-shekel-sign" ></i>   ${point}  נקודות  </div>`;

    for (let i = num; i < count; i++) {
        const strProd = localStorage.getItem(PresentUser.Idnumber1 + num++);
        const prod = JSON.parse(strProd);
        divProd = document.createElement('div');
        // deletebutton.innerHTML = `<i class="fas fa-trash-alt" id="garbage"></i>`;
        // divProd.appendChild(deletebutton);
        divProd.innerHTML = `<div>${c++}.<img src="../../assets/${prod.url}" width="100px" height="100px">|<span>${prod.name}</span>|<span>${prod.price}  נקודות </span>| <i class="fas fa-trash-alt" id="garbage"></i></div>`
        prodList.appendChild(divProd);
        // document.addEventListener('click', function (event) {
        //     if (event.target.matches('#garbage')){
        //         deletebutton();
        //     }
        //     }
        // )};
        // const deletebutton = () => {
        //     prodList.removeChild(divProd);
        }
    }







