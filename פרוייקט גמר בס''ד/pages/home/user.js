const dom = {
    form: document.formRecogniseUser,
    user: {
        minz: document.getElementsByName("radio1"),
        // minN: document.getElementById("nekeva"),
        firstName: document.getElementById("firstName"),
        lastName: document.getElementById("lastName"),
        Idnumber: document.getElementById("id"),
        phone: document.getElementById("phone"),
        email: document.getElementById("email"),
        adress: document.getElementById("adress"),
        age: document.getElementById("age"),
        fieldVolunteering: document.getElementById("fieldVolunteering"),
        volenteersHour: document.getElementById("volenteersHour"),
        point: document.getElementById("points")
    }
}
dom.form.onsubmit = (event) => {
    event.preventDefault();
    const Idnumber1 = document.getElementById("id-enter").value;
    const userstr = localStorage.getItem(Idnumber1);
    if(userstr === null){
        alert("אינך קיים במערכת נא הרשם")
        window.location.href = "../../pages/login/login.html";
    }
    const usert = JSON.parse(userstr);
    const welcomeToUser = document.getElementById("welcomeToUser");
    if (usert.minz1[1].checked) {
        welcomeToUser.innerHTML = " " + usert.firstName1 + " " + "היקרה , ברוכה הבאה להגרלה הסינית - לתת זה לקבל!"
    }
    else {
        welcomeToUser.innerHTML = " " + usert.firstName1 + " " + "היקר" + " ברוך הבא להגרלה הסינית - לתת זה לקבל!"
    }


    let a;
    switch (usert.fieldVolunteering1) {
        case "families": a = "סיוע למשפחות רווחה"; break;
        case "Hospitol": a = "התנדבות בבתי חולים"; break;
        case "oldmen": a = "סיוע לקשישים"; break;
        case "spacial-children": a = "התנדבות במועדוניות לילדים מיוחדים"; break;
        case "learn-with-child": a = "למידה עם ילדים מתקשים"; break;
    }
    const Userfullform = document.getElementById("Userfullform");
    const b = document.getElementById("1");
    const c = document.getElementById("2");
    const d = document.getElementById("3");
    const e = document.getElementById("4");
    const f = document.getElementById("5");
    const g = document.getElementById("6");
    const h = document.getElementById("7");
    const i = document.getElementById("8");


    Userfullform.innerHTML = "בכדי שלא יתרחשו תקלות יש לשים לב לדיוק בפרטים: ";
    b.innerHTML = document.getElementsByClassName("iconName").innerHTML = `<i class ="fas fa-user" ></i>` + "   " + "שם : " + usert.firstName1 + " " + usert.lastName1;
    c.innerHTML = document.getElementsByClassName("iconId").innerHTML = ` <i class ="fas fa-address-card "></i>` + "   " + "מספר זהות : " + usert.Idnumber1;
    d.innerHTML = document.getElementsByClassName("iconMail").innerHTML = ` <i class ="fas fa-at" ></i>` + "   " + "כתובת אימייל : " + usert.email1;
    e.innerHTML = document.getElementsByClassName("iconPhone").innerHTML = `<i class ="fas fa-phone" ></i>` + "   " + "נייד : " + usert.phone1;
    f.innerHTML = document.getElementsByClassName("iconAge").innerHTML = `<i class ="fas fa-home" ></i>` + "   " + "כתובת : " + usert.addres1;
    g.innerHTML = document.getElementsByClassName("iconAdress").innerHTML = `<i class ="fas fa-users" ></i>` + "   " + "גיל : " + usert.age1;
    h.innerHTML = document.getElementsByClassName("iconType").innerHTML = ` <i class ="fas fa-shapes" ></i>` + "   " + "תחום התנדבות : " + a;
    i.innerHTML = document.getElementsByClassName("iconHour").innerHTML = `<i class ="fas fa-sliders-h" ></i>` + "   " + "שעות התנדבות : " + usert.volenteersHour1;
    var p;
    switch (usert.fieldVolunteering1) {
        case "families": p = 120; break;
        case "Hospitol": p = 150; break;
        case "oldmen": p = 200; break;
        case "spacial-children": p = 100; break;
        case "learn-with-child": p = 100; break;
    }

    const Hours = usert.volenteersHour1;
    const points = parseFloat(Hours) * p;
    localStorage.setItem("pointsOf"+usert.Idnumber1, JSON.stringify(points));   
    dom.user.point.innerHTML="מספר הנקודות שברשותך:"+" "+points;

    localStorage.setItem('IdPresentUser', JSON.stringify(usert));

}


