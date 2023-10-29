let body = document.getElementsByTagName("body")[0];
body.style.margin = 0;
body.style.padding = 0;
// =========================      Top Container         =============================
let top_container = document.createElement("div");
top_container.setAttribute("class","top-container");
body.insertAdjacentElement("afterbegin", top_container);
top_container.style.background = "url(img/home.png)";
top_container.style.backgroundRepeat = "no-repeat";
top_container.style.minHeight = "25rem";
top_container.style.maxHeight = "30rem";
top_container.style.width = "100%";
top_container.style.overflow = "hidden";
top_container.style.backgroundSize = "cover";
top_container.style.backgroundPosition = "center";

// ================          header                 ============================
let menu_header = document.createElement("header");
top_container.insertAdjacentElement("afterbegin", menu_header);
menu_header.style.padding = "7px 0px 7px 0px";
menu_header.style.height = "100%";
menu_header.style.width = "100%";
menu_header.style.display = "flex";
menu_header.style.justifyContent = "space-around";


let empDiv = document.createElement("div");
menu_header.insertAdjacentElement("afterbegin", empDiv)
let nav_bar = document.createElement("nav");
menu_header.insertAdjacentElement("beforeend", nav_bar);
nav_bar.style.display = "flex";


let menu_ul = document.createElement("ul");
menu_ul.setAttribute("class", "menu_ul");
nav_bar.insertAdjacentElement("afterbegin", menu_ul);
menu_ul.style.listStyleType = "none"
menu_ul.style.display = "flex";
menu_ul.style.justifyContent = "space-between";
menu_ul.style.gap = "2rem";



// =========================        menu item                       ====================
let menuItems = ["Add restaurent", "Log in", "sign up"]
for (let i=0; i<menuItems.length; i++){
    let menu_li=document.createElement('li');
    menu_ul.appendChild(menu_li);
    menu_li.innerHTML=menu_li.innerHTML + menuItems[i];
    menu_li.style.listStyle= "none";
    menu_li.style.color= "white";
    menu_li.style.fontSize= "1.4em";
}

// =============              Head line / home section ==================

let main_section = document.createElement("section");
top_container.insertAdjacentElement("beforeend",main_section)

