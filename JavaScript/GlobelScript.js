/* This is Globel Script and can be used in any page */

// Sidebar Toggle Button Function
function togglesidebar() {
    if (document.getElementById("sidebar").style.width == "250px") {

        document.getElementById("sidebar").style.width = "70px";
        document.getElementById("logo").style.width = "70px";
        document.getElementById("Navbar").style.paddingLeft = "100px";
        document.getElementById("Page").style.paddingLeft = "80px";

        document.getElementsByClassName("profilebox")[0].classList.add("profileboxm");
        document.getElementsByClassName("sidebarLogo")[0].classList.add("sidebarLogom");
        document.getElementsByClassName("profilebox")[0].classList.add("profileboxm");
        document.getElementsByClassName("profilebox-icon")[0].classList.add("profilebox-iconm");
        document.getElementsByClassName("sidebar-items")[0].classList.add("sidebar-itemsm");
        document.getElementsByClassName("active")[0].classList.add("activem");

        document.getElementById("Page").style.transition = "1s";
        document.getElementById("sidebar").style.transition = "1s";
        document.getElementById("logo").style.transition = "1s";
        document.getElementById("Navbar").style.transition = "1s";

    }
    else {
        document.getElementById("sidebar").style.width = "250px";
        document.getElementById("Navbar").style.paddingLeft = "280px";
        document.getElementById("Page").style.paddingLeft = "250px";
        document.getElementById("logo").style.width = "250px";

        document.getElementById("Page").style.transition = "1s";
        document.getElementById("logo").style.transition = "1s";
        document.getElementById("sidebar").style.transition = "1s";
        document.getElementById("Navbar").style.transition = "1s";

        document.getElementsByClassName("profilebox")[0].classList.remove("profileboxm");
        document.getElementsByClassName("sidebarLogo")[0].classList.remove("sidebarLogom");
        document.getElementsByClassName("profilebox")[0].classList.remove("profileboxm");
        document.getElementsByClassName("profilebox-icon")[0].classList.remove("profilebox-iconm");
        document.getElementsByClassName("sidebar-items")[0].classList.remove("sidebar-itemsm");
        document.getElementsByClassName("active")[0].classList.remove("activem");

    }
}

// AccountBox Popup Function
function accountpopup() {
    if (document.getElementById("accountpopup").style.opacity == "0") {
        document.getElementById("accountpopup").style.opacity = "1";
        document.getElementById("accountpopup").style.transition = "0.5s";
    }
    else {
        document.getElementById("accountpopup").style.opacity = "0";
        document.getElementById("accountpopup").style.transition = "0.5s";
    }
}

function logout(){
    document.getElementById("areyousure").style.display="";
    document.getElementById("bgblue").style.display="";
}
function Yeslogout(){
    location.replace("../index.html");
    document.getElementById("areyousure").style.display="none";
    document.getElementById("bgblue").style.display="none";
}
function Nologout(){
    document.getElementById("areyousure").style.display="none";
    document.getElementById("bgblue").style.display="none";
}