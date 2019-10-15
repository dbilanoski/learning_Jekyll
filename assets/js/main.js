
const buyButton = document.querySelector(".buy-button") || null;
if(buyButton != null) {
  buyButton.addEventListener("click", function() {
    const productTitle = buyButton.parentElement.childNodes[1].innerHTML;
    const grammar = productTitle.includes("shoes") || productTitle.includes("boots") ? "are" : "is";
  
  alert(`${productTitle} ${grammar} added to fake cart.`)
})
}

