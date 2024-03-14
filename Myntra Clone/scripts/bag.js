let bagItemObjects;
let convience_fee = 99;
let bagItemsContainer = document.querySelector(".bag-items-container");

onLoad();

function onLoad() {
  loadBagItemsObjects();
  displayBagItem();
  displayBagSummary();
}

function displayBagSummary() {
  let bagSummary = document.querySelector(".bag-summary");
  let totalItem = bagItemObjects.length;
  let totalMRP = 0;
  let totalDiscount = 0;

  for (singleBagItem of bagItemObjects) {
    totalMRP += singleBagItem.original_price;
    totalDiscount += singleBagItem.original_price - singleBagItem.current_price;
  }

  if (totalMRP - totalDiscount == 0) {
    convience_fee = 0;
  }
  let finalPayment = totalMRP - totalDiscount + convience_fee;

  bagSummary.innerHTML = `<div class="bag-details-container">
            <div class="price-header">PRICE DETAILS (${totalItem} Items) </div>
            <div class="price-item">
              <span class="price-item-tag">Total MRP</span>
              <span class="price-item-value">Rs ${totalMRP}</span>
            </div>
            <div class="price-item">
              <span class="price-item-tag">Discount on MRP</span>
              <span class="price-item-value priceDetail-base-discount">- Rs ${totalDiscount}</span>
            </div>
            <div class="price-item">
              <span class="price-item-tag">Convenience Fee</span>
              <span class="price-item-value">Rs ${convience_fee}</span>
            </div>
            <hr>
            <div class="price-footer">
              <span class="price-item-tag">Total Amount</span>
              <span class="price-item-value">Rs ${finalPayment}</span>
            </div>
          </div>
          <button class="btn-place-order">
            <div class="css-xjhrni">PLACE ORDER</div>
          </button>`;
}

function loadBagItemsObjects() {
  // console.log(bagItems);
  bagItemObjects = bagItems.map((itemId) => {
    for (let i = 0; i < items.length; i++) {
      if (itemId == items[i].id) {
        return items[i];
      }
    }
  });
  console.log(bagItemObjects);
}

function displayBagItem() {
  let newHtml = "";
  for (bagItem of bagItemObjects) {
    newHtml += generateItemHtml(bagItem);
  }
  console.log(newHtml);
  bagItemsContainer.innerHTML = newHtml;
}

function removeFromBag(id) {
  bagItems = bagItems.filter((bagItemId) => bagItemId != id);
  localStorage.setItem("bagItems", JSON.stringify(bagItems));
  loadBagItemsObjects();
  displayBagIcon();
  displayBagItem();
  displayBagSummary();
}

function generateItemHtml(item) {
  const {
    id,
    image,
    company,
    item_name,
    current_price,
    original_price,
    discount_percentage,
    return_period,
    delivery_date,
  } = item;

  return `<div class="bag-item-container">
            <div class="item-left-part">
              <img class="bag-item-img" src="../${image}">
            </div>
            <div class="item-right-part">
              <div class="company">${company}</div>
              <div class="item-name">${item_name}</div>
              <div class="price-container">
                <span class="current-price">Rs ${current_price}</span>
                <span class="original-price">Rs ${original_price}</span>
                <span class="discount-percentage">(${discount_percentage}% OFF)</span>
              </div>
              <div class="return-period">
                <span class="return-period-days">${return_period} days</span> return available
              </div>
              <div class="delivery-details">
                Delivery by
                <span class="delivery-details-days">${delivery_date}</span>
              </div>
            </div>

            <div class="remove-from-cart" onclick="removeFromBag(${id});">X</div>
          </div>`;
}
