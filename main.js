const menuEmail = document.querySelector(".navbar-email");
const menuHamIcon = document.querySelector(".menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const productDetailCloseIcon = document.querySelector(".product-detail-close");

const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const cardsContainer = document.querySelector(".cards-container");
const productDetailContainer = document.querySelector("#productDetail");

menuEmail.addEventListener("click", toogleDesktopMenu);
menuHamIcon.addEventListener("click", toogleMobileMenu);
menuCarritoIcon.addEventListener("click", toogleCarritoAside);
productDetailCloseIcon.addEventListener("click", closeProductDetailAside);

/*
 *Funcion para colocar la clase inactive
 *Valida si el componente tiene la clase inactive, si no lo tiene se lo coloca
 *@param componente
 */
function containerNotClosed(container) {
  const isContainerClosed = container.classList.contains("inactive");
  if (!isContainerClosed) {
    container.classList.add("inactive");
  }
}

function toogleDesktopMenu() {
  containerNotClosed(productDetailContainer);
  containerNotClosed(shoppingCartContainer);
  desktopMenu.classList.toggle("inactive");
}

function toogleMobileMenu() {
  containerNotClosed(shoppingCartContainer);
  mobileMenu.classList.toggle("inactive");
}

function toogleCarritoAside() {
  containerNotClosed(mobileMenu);
  containerNotClosed(desktopMenu);
  containerNotClosed(productDetailContainer);
  shoppingCartContainer.classList.toggle("inactive");
}

function openProductDetailAside() {
  shoppingCartContainer.classList.add("inactive");
  productDetailContainer.classList.remove("inactive");
  containerNotClosed(desktopMenu);
}

function closeProductDetailAside() {
  productDetailContainer.classList.add("inactive");
}

const productList = [];
const cantidad = 20;
for (let index = 0; index < cantidad; index++) {
  productList.push({
    name: "Bike",
    price: 120,
    image:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  });
}

function renderProducts(arr) {
  /*
   *Renderiza el card de los productos
   */
  for (product of productList) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.image);
    productImg.addEventListener("click", openProductDetailAside);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productInfoDiv = document.createElement("div");
    const productName = document.createElement("p");
    productName.innerText = product.name;
    const productPrice = document.createElement("p");
    productPrice.innerText = product.price;

    const productInfoFigure = document.createElement("figure");
    const productImgCart = document.createElement("img");
    productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");

    productInfoFigure.appendChild(productImgCart);
    productInfoDiv.append(productName, productPrice);
    productInfo.append(productInfoDiv, productInfoFigure);
    productCard.append(productImg, productInfo);

    cardsContainer.appendChild(productCard);
  }
}

renderProducts(productList);
