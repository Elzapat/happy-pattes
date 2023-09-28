window.onload = fill_galerie;

function fill_galerie() {
    let images = [
        ["chat_01.jpg", "Description"],
        ["chat_02.jpg", "Description"],
        ["chat_03.jpg", "Description"],
        ["chat_04.jpg", "Description"],
        ["chat_05.jpg", "Description"],
        ["chat_06.jpg", "Description"],
        ["chat_07.jpg", "Description"],
        ["chat_08.jpg", "Description"],
        ["chat_09.jpg", "Description"],
        ["chat_10.jpg", "Description"],
        ["chat_11.jpg", "Description"],
        ["chat_12.jpg", "Description"],
        ["chat_13.jpg", "Description"],
        ["chat_14.jpg", "Description"],
        ["chat_15.jpg", "Description"],
        ["chat_16.jpg", "Description"],
        ["chat_17.jpg", "Description"],
        ["chat_18.jpg", "Description"],
        ["chat_19.jpg", "Description"],
        ["chat_20.jpg", "Description"],
        ["chat_21.jpg", "Description"],
        ["chat_22.jpg", "Description"],
        ["chat_23.jpg", "Description"]
    ];

    let gallerie = document.getElementById("gallerie");

    for (let [url, description] of images) {
        let container = document.createElement("div");
        container.classList = "flex flex-col items-center space-y-3";

        let image = document.createElement("img");
        image.src = "images/" + url;
        image.classList = "";

        let descriptionElem = document.createElement("p");
        descriptionElem.textContent = description;
        descriptionElem.classList = "";

        container.appendChild(image);
        container.appendChild(descriptionElem);

        gallerie.appendChild(container);
    }
}