let bagItems = [];

function onLoad() {
  displayItemsOnHomePage();
  displayBagItem();
}

function addToBag(id) {
  // console.log(id);
  bagItems.push(items[id - 1]);
  // console.log(bagItems);
  localStorage.setItem("bagItems", JSON.stringify(bagItems));
  displayBagItem();
}

function displayBagItem() {
  let bagItemCountElement = document.querySelector(".bag-item-count");
  if (bagItems.length > 0) {
    bagItemCountElement.style.visibility = "visible";
    bagItemCountElement.innerText = bagItems.length;
  } else {
    bagItemCountElement.style.visibility = "hidden";
  }
}

function displayItemsOnHomePage() {
  const main_container = document.querySelector(".main_container");
  for (item of items) {
    const {
      image,
      company,
      rating,
      item_name,
      current_price,
      original_price,
      discount_percentage,
    } = item;
    // console.log(item);
    main_container.innerHTML += `<div class="item-card">
          <img class="item-image" src="${image}" alt="" />
          <div class="rating">${rating.stars} ⭐ | ${rating.count / 1000}k</div>
          <div class="company-name">${company}</div>
          <div class="item-name">${item_name}</div>
          <div class="price">
            <span class="current-price">Rs ${current_price}</span
            ><span class="original-price">Rs ${original_price}</span
            ><span class="discount-percentage">(${discount_percentage}% OFF)</span>
          </div>
          <button class="btn-add-bag" onclick="addToBag(${
            item.id
          });">Add To Bag</button>
        </div>`;
  }
}

onLoad();
