
//////////הצגת השם משתמש בכותרת הדף
const hello=document.getElementById("hello");

function onPageLoad() {
    hello.innerHTM = `<img src="../../assets/לוגו לתת זה לקבל.png" width="90px"></img><a href="../../pages/personal-area/personal-area.html">להתחברות</a>` ;
    const nowUser = localStorage.getItem('IdPresentUser');
    const strNowUser = JSON.parse(nowUser);
    const Points =  localStorage.getItem("pointsOf"+strNowUser.Idnumber1);
    hello.innerHTML+=`<div><i class ="fas fa-user" ></i>${" "}${strNowUser.firstName1}${" "}${strNowUser.lastName1} </div><div><i class ="fas fa-shekel-sign" ></i>${" "} ${Points}</div>`;

    const LogOut = document.createElement('span');
    const LogIn = document.createElement('span');
    hello.appendChild(LogOut);
    hello.appendChild(LogIn);
        LogOut.innerHTML=`<i class="fas fa-level-up-alt"></i>`+"ליציאה ";
        LogIn.innerHTML=`<i class="fas fa-user"></i>` +"לאזור האישי";
    hello.onmouseover=()=>{
        LogOut.style.display="block";
        LogIn.style.display="block";
        hello.style.borderBottom="none";
    }
    hello.onmouseout=()=>{
        LogOut.style.display="none";
        LogIn.style.display="none";
        hello.style.borderBottom="solid 3px  #00ffd3";
    }
        LogOut.onclick=()=>{
        alert("מצטערים שאתה עוזב להתראות!")
        localStorage.setItem('IdPresentUser',"");
        hello.innerHTML=`<img src="../../assets/לוגו לתת זה לקבל.png" width="90px"></img><a href="../../pages/home/user.html">להתחברות</a>` ;
        hello.style.display="flex";
        hello.style.flexDirection="row";

         
    }
    LogIn.onclick=()=>{
        window.location.href="../../pages/personal-area/personal-area.html";
    }
}
//הדגשת השם של העמוד כשנמצאים בו
const pageurl = window.location.href;
const personal = document.getElementById("personal");
const productsT = document.getElementById("products");
const homeT = document.getElementById("homeT");
const loginT = document.getElementById("loginT");
const aboutT = document.getElementById("aboutT");
const quesT = document.getElementById("quesT");

if(pageurl.includes("http://127.0.0.1:5501/pages/personal-area/personal-area.html"))
{
    personal.style.backgroundColor="black";
    personal.style.color="white";
    personal.style.borderRadius="20px";
    personal.style.padding="12px";
    personal.style.font="#00ffd3";
    personal.style.fontFamily="VarelaRound-Regular";
    personal.style.border="black solid 3px";
    
}
else if(pageurl.includes("http://127.0.0.1:5501/pages/products/products.html"))
{
    productsT.style.backgroundColor="black";
    productsT.style.color="white";
    productsT.style.borderRadius="20px";
    productsT.style.padding="12px";
    productsT.style.font="#00ffd3";
    productsT.style.fontFamily="VarelaRound-Regular";
    productsT.style.border="black solid 3px";

}
else if(pageurl.includes("http://127.0.0.1:5501/pages/home/home.html"))
{
    homeT.style.backgroundColor="black";
    homeT.style.color="white";
    homeT.style.borderRadius="20px";
    homeT.style.padding="12px";
    homeT.style.font="#00ffd3";
    homeT.style.fontFamily="VarelaRound-Regular";
    homeT.style.border="black solid 3px";

}
else if(pageurl.includes("http://127.0.0.1:5501/pages/login/login.html"))
{
    loginT.style.backgroundColor="black";
    loginT.style.color="white";
    loginT.style.borderRadius="20px";
    loginT.style.padding="12px";
    loginT.style.font="#00ffd3";
    loginT.style.fontFamily="VarelaRound-Regular";
    loginT.style.border="black solid 3px";

}
else if(pageurl.includes("http://127.0.0.1:5501/pages/about/about.html"))
{
    aboutT.style.backgroundColor="black";
    aboutT.style.color="white";
    aboutT.style.borderRadius="20px";
    aboutT.style.padding="12px";
    aboutT.style.font="#00ffd3";
    aboutT.style.fontFamily="VarelaRound-Regular";
    aboutT.style.border="black solid 3px";

}
else if(pageurl.includes("http://127.0.0.1:5501/pages/questions/questions.html"))
{
    quesT.style.backgroundColor="black";
    quesT.style.color="white";
    quesT.style.borderRadius="20px";
    quesT.style.padding="12px";
    quesT.style.font="#00ffd3";
    quesT.style.fontFamily="VarelaRound-Regular";
    quesT.style.border="black solid 3px";

}