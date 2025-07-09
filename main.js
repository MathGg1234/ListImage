import { dataImages } from "/modules/config.js";


console.log("Taille du tableau :", dataImages.length);


const section = document.querySelector("section");


section.style.margin = "auto";
section.style.width = "80%";

section.style.display = "flex";
section.style.justifyContent = "space-around";
section.style.flexWrap = "wrap";

section.style.gap = "20px";
section.style.padding = "20px";


section.style.backgroundColor = "#87CEEB";


dataImages.forEach((image) => {
    const article = document.createElement("article");

    const h2 = document.createElement("h2");
    h2.textContent = `${image.author}`;
    h2.style.textAlign = "center";

    const img = document.createElement("img");
    img.src = image.download_url;
    img.alt = `Image de ${image.author}`;
    img.style.height = "200px";
    img.style.width = "300px";

    //img.height = 200px;
    //img.width = 300px;

    article.appendChild(h2);
    article.appendChild(img);
    section.appendChild(article);

});
