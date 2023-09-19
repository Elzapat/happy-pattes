fetch("/src/navbar.html")
    .then(res => res.text())
    .then(navbar_html => {
        let navbar = document.querySelector("nav");
        navbar.innerHTML = navbar_html;
    });

fetch("/src/footer.html")
    .then(res => res.text())
    .then(footer_html => {
        let footer = document.querySelector("footer");
        footer.innerHTML = footer_html;
    });