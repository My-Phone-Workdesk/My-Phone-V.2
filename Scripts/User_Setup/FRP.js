function Welcome() {
    location.href = "./Conditions.html";
}

function Check() {

    let all = document.querySelectorAll('input');
    if ( all[3].checked == true ) {
        all[0].checked = true;
        all[1].checked = true;
        all[2].checked = true;
    }; if ( ( all[0].checked == true ) && ( all[1].checked == true ) && ( all[2].checked == true ) ) {
        document.querySelector('a').style.visibility = "visible";
    } else {
        document.querySelector('a').style.visibility = "hidden";
    }; return true;

}