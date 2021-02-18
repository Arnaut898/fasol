document.querySelectorAll(".catalog__item").forEach((item) => {
  item.addEventListener("click", (event) => {
    const popup = document.querySelector(".popup");
    const popupContent = document.querySelector(".popup__content");
    const body = document.querySelector("body")

    body.style.overflow = "hidden";

    const product = event.target.closest(".catalog__item");

    const productTitle = product.querySelector(".catalog__item-title")
      .textContent;
    const productIMG = product.querySelector("img").getAttribute("src");
    const productPrice = document.querySelector(".catalog__item-price")
      .textContent;
    const productPriceOld = document.querySelector(".catalog__item-price-old")
      .textContent;
    const productStructure = document.querySelector(".catalog__item-structure")
      .textContent;

    popup.classList.add("popup-active");
    popupContent.classList.add("popup__content-active");


    body.addEventListener('click', event => {
      
      const target = event.target;
      
      if(target.classList.contains('popup__inner')) {
        body.style.overflow = "visible";
        popup.classList.remove("popup-active");
        popupContent.classList.remove("popup__content-active");
      }
    });

    body.addEventListener('keydown', event => {
      
      if(event.key === 'Escape') {
        body.style.overflow = "visible";
        popup.classList.remove("popup-active");
        popupContent.classList.remove("popup__content-active");
      }
    });

    popupContent.innerHTML = `
      <button class="popup__close">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="times"
          class="svg-inline--fa fa-times fa-w-11"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 352 512"
        >
          <path
            fill="currentColor"
            d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
          ></path>
        </svg>
      </button>
      <div class="popup__img">
        <img src="${productIMG}" alt="">
      </div>
      <div class="popup__content-wrapper">
        <div class="popup__title">${productTitle}</div>
        <div class="popup__prices">
          <div class="popup__price">${productPrice}</div>
          <div class="popup__price-old">${productPriceOld}</div>
        </div>
        <p class="popup__text">Описание:</p>
        <div class="popup__structure">${productStructure}</div>
      </div>
    `;

    const popupClose = document.querySelector(".popup__close");

    popupClose.addEventListener("click", () => {
      popup.classList.remove("popup-active");
      document.querySelector("body").style.overflow = "visible";
    });
  });
});
