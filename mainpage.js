function openPage(element) {
    const news = document.querySelector("main #news");
    const articles = document.querySelector("main #articles");
    // Use the correct logic to display what you actually need to
    if (element.innerText == "News") {
        if (news.style.display == "none") {
            news.style.display = "block";
        } else {
            news.style.display = "none";
        }
        articles.style.display = "none";
    } else if (element.innerText == "Articles") {
        if (articles.style.display == "none") {
            articles.style.display = "block";
        } else {
            articles.style.display = "none";
        }
        news.style.display = "none";
    }
}


// Modal code
const modal = document.querySelector(".modal");
const trigger = document.querySelector(".trigger");
const closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);