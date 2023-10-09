window.onload = fill_galerie;

function fill_galerie() {
    let images = [
        ["pension_01.jpg", ""],
        ["pension_02.jpg", ""],
        ["pension_03.jpg", ""],
        ["pension_04.jpg", ""],
        ["pension_05.jpg", ""],
        ["pension_06.jpg", ""],
        ["chat_01.jpg", "R'Hoïne"],
        ["chat_02.jpg", "Thor"],
        ["chat_03.jpg", "Tacha"],
        // ["chat_04.jpg", ""],
        ["chat_05.jpg", "Tacha"],
        ["chat_06.jpg", "Rohan"],
        ["chat_07.jpg", "R'Hoïne"],
        ["chat_13.jpg", "Mimi"],
        // ["chat_14.jpg", "Description"],
        ["chat_16.jpg", "Filou"],
        ["chat_17.jpg", "Joséphine"],
        ["chat_18.jpg", "Joséphine"],
        ["chat_19.jpg", "Joséphine"],
        ["chat_20.jpg", "Flora"],
        ["chat_21.jpg", "Rohan"],
        ["chat_22.jpg", "Pickles"],
        ["chat_23.jpg", "Pickles"]
    ];

    let galerie = document.getElementById("galerie");

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

        galerie.appendChild(container);
    }
}
