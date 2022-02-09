import {getProductCount} from "./common.js "

let table = document.getElementById("table");
let card = document.querySelector("sup")
let products = []
let deleteBtn = document.querySelectorAll(".text-danger")



if( JSON.parse(localStorage.getItem("products"))!=null){
    products = JSON.parse(localStorage.getItem("products"));
}

getProductList(products);

card.innerText = getProductCount(products)


function getProductList(list) {
    for (const product of list) {
        table.lastElementChild.innerHTML += `<tr>
        <th><img src="${product.img}" style="height:100px" alt=""></th>
        <td>${product.name}</td>
        <td>${product.count}</td>
        <td class="text-danger" style="cursor:pointer;font-weight:700">X</td>
        
      </tr>`
        
    }
}

deleteBtn.forEach(icon=>{
    icon.addEventListener("click",function () {
        let id = this.parentNode.firstElementChild.getAttribute("data-id");

        products = products.filter(m=>m.id != id);
        localStorage.setItem("products", JSON.stringify(products));
        countElem.innerText = getProductCount(products);
        document.location.reload(true);
    })
})



