let main_div = document.createElement("div");
main_div.setAttribute("class","main_section");
let body = document.getElementsByTagName("body")[0];
body.insertAdjacentElement("afterbegin", main_div);
body.style.margin = 0;
body.style.padding = 0;


let img_div = document.createElement("div");
img_div.setAttribute("class", "bg_home")
main_div.insertAdjacentElement("afterbegin", img_div);
let homeImg = document.createElement("img");
img_div.insertAdjacentElement("afterbegin",homeImg)
homeImg.setAttribute("src", "img/home.png");



let nav_div = document.createElement("div");
nav_div.setAttribute("class", "menu");
img_div.insertAdjacentElement("beforeend", nav_div);
let menu_ul = document.createElement("ul")
menu_ul.setAttribute("class", "menu_ul")
nav_div.insertAdjacentElement("afterbegin", menu_ul);
// let menu_item = document.createElement("li")

let menuItems = ["Add restaurent", "Log in", "sign up"]
for (let i=0; i<menuItems.length; i++){
    let menu_li=document.createElement('li');
    menu_ul.appendChild(menu_li);
    menu_li.innerHTML=menu_li.innerHTML + menuItems[i];
    console.log(menu_li);
}