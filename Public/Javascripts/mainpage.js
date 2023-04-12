// Why are you bothering in using so many parameters, as it will make it unmanageable for you in the long run, you should make it a way that is clean enough to run properly
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
