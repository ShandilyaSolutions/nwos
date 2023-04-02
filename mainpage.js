// Why are you bothering in using parameters, as it will make it unmanageable for you in the long run, you should make it a way that is clean enough to run properly
function openPage() {
    // In order to remove, page name parameter as it is initially not needed as well as removing the element name as well, using a query selector to get the buttons, is more efficient.
    const newsButton = document.querySelector(
        "header nav div button:nth-child(1)"
    );
    const articlesButton = document.querySelector(
        "header nav div button:nth-child(2)"
    );
}

function openPage(pageName, elmnt, color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
