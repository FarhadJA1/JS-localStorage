import {getProductCount} from "./common.js "

let addBtns = document.querySelectorAll(".btn-primary");
let card = document.querySelector("sup")

if (JSON.parse(localStorage.getItem("products")) == null) {
    localStorage.setItem("products",JSON.stringify([]));
}

let products=JSON.parse(localStorage.getItem("products"));



addBtns.forEach(btn=>{
    btn.addEventListener("click",function (e) {
        e.preventDefault();
        let productImage = this.parentNode.previousElementSibling.getAttribute("src");
        let productId = this.parentNode.parentNode.getAttribute("data-id");
        let productName = this.parentNode.firstElementChild.innerText;
        
        
        let productExist = products.find(m=>m.id == productId)

        if (productExist == undefined) {
            products.push({
                id:productId,
                name:productName,
                img:productImage,
                count:1
            })
        }
        else{
            productExist.count += 1;
        }

        localStorage.setItem("products",JSON.stringify(products))
        card.innerText = getProductCount(products)
        
        
    })
})
card.innerText = getProductCount(products)