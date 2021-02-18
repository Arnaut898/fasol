let catalog = "";

CATALOG.forEach(({ id, title, img, price, priceOld, structure }) => {
  if (priceOld.length == 0) {
    catalog += `
    <div class="catalog__item">
        <div class="catalog__item-title">${title}</div>
        <div class="catalog__item-img"><img src="${img}" alt=""></div>
        <div class="catalog__item-prices">
          <div class="catalog__item-price">${price} <span>₽/шт</span></div>
          <div class="catalog__item-price-old"></div>
        </div>
        <div class="catalog__item-structure">${structure} <span>₽</span></div>
    </div>
    `;
  } else {
    catalog += `
    <div class="catalog__item">
        <div class="catalog__item-title">${title}</div>
        <div class="catalog__item-img"><img src="${img}" alt=""></div>
        <div class="catalog__item-prices">
          <div class="catalog__item-price">${price} <span>₽/шт</span> </div>
          <div class="catalog__item-price-old">${priceOld} <span>₽</span></div>
        </div>
        <div class="catalog__item-structure">${structure} <span>₽</span></div>
    </div>
    `;
  }
});

document.querySelector(".catalog__items").innerHTML = catalog;

const catalogItem = document.querySelectorAll(".catalog__item");
const buttonShowMore = document.querySelector(".catalog__button");

for (let i = 10; i < catalogItem.length; i++) {
  catalogItem[i].classList.add("catalog__item-hidden");
}

let countD = 10;

buttonShowMore.addEventListener("click", () => {
  countD += 10;
  if (countD <= catalogItem.length) {
    for (let i = 0; i < countD; i++) {
      catalogItem[i].classList.remove("catalog__item-hidden");
    }
  }
});

const search = document.querySelector(".form__input");
const clearSearch = document.querySelector(".form__clear");

clearSearch.addEventListener("click", (event) => {
  event.preventDefault();

  search.value = "";

  document.querySelector(".catalog__wrapper").appendChild(buttonShowMore);
  clearSearch.classList.remove("form__clear-active");

  for (let i = 0; i == 10; i++) {
    catalogItem[i].classList.remove("catalog__item-hidden");
  }
});

search.addEventListener("input", () => {
  let val = search.value.toLowerCase().trim();
  let searchItems = document.querySelectorAll(".catalog__item-title");

  buttonShowMore.remove();
  clearSearch.classList.add("form__clear-active");

  catalogItem.forEach((item) => {
    item.classList.remove("catalog__item-hidden");
  });

  if (val != "") {
    searchItems.forEach((elem) => {
      if (elem.innerText.toLowerCase().search(val) == -1) {
        elem.parentElement.classList.add("catalog__item-hidden");
      } else {
        elem.parentElement.classList.remove("catalog__item-hidden");
      }
    });
  }
});