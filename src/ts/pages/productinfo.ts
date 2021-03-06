import { logToHome } from "../main";
import { Cart } from "../pages/models/Cart";
import { ContentOfCart } from "./models/ContentOfCart";
import { categoryListeners } from "../main";

let currentCart = new Cart();

window.onload = function () {
    document.getElementById("log").addEventListener("click", logToHome);
    loadProd();
    createHTML();
    categoryListeners();
    currentCart.cartAmountCount();
};

function loadProd() {
    let game = JSON.parse(sessionStorage.getItem("game"));
    console.log(game);
}


function createHTML() {
    let game = JSON.parse(sessionStorage.getItem("game"));
    let prodInfo: HTMLDivElement = document.getElementById(
        "prodInfo"
    ) as HTMLDivElement;

    let name: HTMLSpanElement = document.createElement("h3");
    let img: HTMLImageElement = document.createElement("img");
    let price: HTMLSpanElement = document.createElement("h3");
    let description: HTMLSpanElement = document.createElement("span");
    let infoWrap: HTMLDivElement = document.createElement("div");
    infoWrap.className = "infoWrap";
    let number: HTMLInputElement = document.createElement("input");
    number.type = "number";
    number.value = "1";
    number.min = "1";
    let button: HTMLButtonElement = document.createElement("button");

    name.innerHTML = game.name;
    img.src = game.image;
    price.innerHTML = game.price + ":-";
    description.innerHTML = game.description;
    button.innerHTML = "Lägg till i varukorgen";

    button.addEventListener("click", () => {
        let content = new ContentOfCart(game, parseInt(number.value));
        currentCart.addToCart(content);
        currentCart.cartAmountUpdate();
    });

    prodInfo.appendChild(img);
    infoWrap.appendChild(name);
    infoWrap.appendChild(price);
    infoWrap.appendChild(number);
    infoWrap.appendChild(button);
    prodInfo.appendChild(infoWrap);
    prodInfo.appendChild(description);
}
