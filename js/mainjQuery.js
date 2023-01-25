$(document).ready(function () {
  /*
   *Funcion para colocar la clase inactive
   *Valida si el componente tiene la clase inactive, si no lo tiene se lo coloca
   *@param componente
   */
  function containerNotClosed(container) {
    const isContainerClosed = container.hasClass("inactive");
    if (!isContainerClosed) {
      container.addClass("inactive");
    }
  }

  $(".navbar-email").click(function () {
    containerNotClosed($("#shoppingCartContainer"));
    containerNotClosed($("#shoppingCartContainer"));
    $(".desktop-menu").toggleClass("inactive");
  });

  $(".menu").click(function () {
    containerNotClosed($("#shoppingCartContainer"));
    $(".mobile-menu").toggleClass("inactive");
  });

  $(".navbar-shopping-cart").click(function () {
    containerNotClosed($(".mobile-menu"));
    containerNotClosed($(".desktop-menu"));
    containerNotClosed($("#productDetail"));
    $("#shoppingCartContainer").toggleClass("inactive");
  });

  $(".product-detail-close").click(function () {
    $("#productDetail").addClass("inactive");
  });

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
    for (product of arr) {
      const src_img = "./icons/bt_add_to_cart.svg";
      const productImg = $("<img>").attr("src", product.image);
      $(".cards-container").append(
        $("<div>")
          .addClass("product-card")
          .append(
            productImg,
            $("<div>")
              .addClass("product-info")
              .append(
                $("<div>").append(
                  $("<p>").text(product.name),
                  $("<p>").text(product.price)
                ),
                $("<figure>").append($("<img>").attr("src", src_img))
              )
          )
      );

      productImg.click(function () {
        $("#shoppingCartContainer").addClass("inactive");
        $("#productDetail").removeClass("inactive");
        containerNotClosed($(".desktop-menu"));
      });
    }
  }

  renderProducts(productList);
});
