let main_div = document.createElement("div");
main_div.setAttribute("class","main_section");
let body = document.getElementsByTagName("body")[0];
body.insertAdjacentElement("afterbegin", main_div);
let img_div = document.createElement("div");

main_div.insertAdjacentElement("afterbegin", img_div);

console.log(img_div);
main_div.textContent="hello";
