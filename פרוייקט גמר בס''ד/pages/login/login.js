const btn = document.getElementById("finishRegistration")

const form = {
    formNewUser: document.formNewUser,
    user: {
        minz: document.getElementsByName("radio1"),
        // minN: document.getElementById("radio1"),
        firstName: document.getElementById("firstName"),
        lastName: document.getElementById("lastName"),
        Idnumber: document.getElementById("id"),
        phone: document.getElementById("phone"),
        email: document.getElementById("email"),
        adress: document.getElementById("adress"),
        age: document.getElementById("age"),
        fieldVolunteering: document.getElementById("fieldVolunteering"),
        volenteersHour: document.getElementById("volenteersHour"),
        // points: document.getElementById("points")
    }
}

form.formNewUser.onsubmit = (event) => {
    const dom = {
        minz1: form.user.minz,
        // minN1: form.user.minN.value,
        firstName1: form.user.firstName.value,
        lastName1: form.user.lastName.value,
        Idnumber1: form.user.Idnumber.value,
        phone1: form.user.phone.value,
        email1: form.user.email.value,
        addres1: form.user.adress.value,
        age1: form.user.age.value,
        fieldVolunteering1: form.user.fieldVolunteering.value,
        volenteersHour1: form.user.volenteersHour.value,
        // point1: user.points

    }
    event.preventDefault();
    localStorage.setItem(dom.Idnumber1, JSON.stringify(dom));   
    sessionStorage.setItem("Idnumber1", dom.Idnumber1);
    form.formNewUser.reset();
    let sum1 = localStorage.getItem("sumFamilies");
    let sum2 = localStorage.getItem("sumHospitol");
    let sum3 = localStorage.getItem("sumOldmen");
    let sum4 = localStorage.getItem("sumSpacial-children");
    let sum5 = localStorage.getItem("sumLearn-with-child");
    switch (dom.fieldVolunteering1) {
        case "families": localStorage.setItem("sumFamilies",++sum1) ; break;
        case "Hospitol": localStorage.setItem("sumHospitol",++sum2) ; break;
        case "oldmen": localStorage.setItem("sumOldmen",++sum3) ; break;
        case "spacial-children": localStorage.setItem("sumSpacial-children",++sum4) ; break;
        case "learn-with-child": localStorage.setItem("sumLearn-with-child",++sum5) ; break;
    }
   
   
    let c= localStorage.getItem("sumValenteers");
    c++;
    localStorage.setItem("sumValenteers",c);
    window.location.href = "../../pages/home/user.html";
}
   
    



