/**
 * Opening the pages which are either the news or the articles
 * @param {Element} element DOM Element on which the event handler is attached to
 * @returns {void}
 */
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
