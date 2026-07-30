/* app.js */
let productsEl = document.querySelector(".products");
let cartItemsEl = document.querySelector(".cart-items");

// render products function

function renderProducts() {
  products.forEach((product) => {
    productsEl.innerHTML += `
     <div class="item flex">
            <div class="item-container w-full bg-prod-bg2 border border-indigo-500/15 rounded-2xl overflow-hidden relative transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(99,102,241,0.2)]">
              <div class="item-img flex items-center justify-center p-6 h-[200px] bg-gradient-to-br from-prod-bg2 to-prod-bg">
                <img src="${product.imgSrc}" alt="T-shirt 1" class="max-h-[150px] object-contain transition-transform duration-300 drop-shadow-[0_8px_16px_rgba(99,102,241,0.3)]">
              </div>
              <div class="p-4">
                <h5 class="text-prod-text font-semibold text-base mb-1">${product.name}</h5>
                <p class="text-prod-muted text-xs leading-relaxed mb-2">${product.description}</p>
                <p class="text-prod-accent2 font-bold text-lg">${product.price}</p>
              </div>
              <button class="add-to-wishlist absolute top-3 right-14 w-9 h-9 rounded-full flex items-center justify-center bg-white/[0.08] text-red-400 border border-red-400/25 hover:bg-red-400/20 hover:scale-110 transition-all text-sm"><i class="bi bi-heart-fill"></i></button>
              <button onclick="addToCart(${product.id})" class="add-to-cart absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center bg-prod-accent text-white shadow-[0_4px_12px_rgba(99,102,241,0.4)] hover:scale-110 hover:shadow-[0_6px_18px_rgba(99,102,241,0.6)] transition-all text-sm"><i class="bi bi-bag-plus-fill"></i></button>
            </div>
          </div>
    `;
  });
}

renderProducts();

// cart array
let cart = [];

// add to cart
function addToCart(id) {
  if (cart.some((item) => item.id === id)) {
    alert("alraedy exists");
  } else {
    let item = products.find((product) => product.id === id);

    cart.push({
      ...item,
      numberOfUnits: 1,
    });

    updatecart();
  }
}

// update cart

function updatecart() {
  renderCartItems();
  // renderSubtotals();
}

function renderCartItems() {
  cartItemsEl.innerHTML = "";
  cart.forEach((item) => {
    cartItemsEl.innerHTML += `<div class="cart-item flex items-center gap-1.5 bg-white/[0.05] border border-green-500/10 rounded-2xl px-2 py-2.5 mb-2 hover:bg-green-500/[0.08] transition-colors">
            <div class="item-info flex-[1.4] flex items-center gap-2 bg-white/[0.06] rounded-xl p-1.5 cursor-pointer hover:bg-red-500/25 transition-colors">
              <img src="${item.imgSrc}" alt="T-shirt 1" class="w-12 h-12 object-contain rounded-lg">
              <span class="text-cart-text text-xs font-medium">${item.name}</span>
            </div>
            <div class="flex-1 text-cart-accent2 font-bold text-sm text-center">
              <small class="text-cart-muted text-[0.65rem]">$</small>${item.price}
            </div>
            <div class="flex-1 flex items-center justify-center gap-1.5">
              <button onclick="chnageNumberOfUnits('minus' , ${item.id})" class="qty-btn minus w-6 h-6 rounded-full bg-white/10 border border-green-500/20 text-cart-text font-bold flex items-center justify-center hover:bg-cart-accent hover:text-cart-bg hover:border-cart-accent transition-all select-none">−</button>
              <span class="number text-cart-text font-semibold text-base min-w-[18px] text-center">${item.numberOfUnits}</span>
              <button onclick="chnageNumberOfUnits('plus' , ${item.id})" class="qty-btn plus w-6 h-6 rounded-full bg-white/10 border border-green-500/20 text-cart-text font-bold flex items-center justify-center hover:bg-cart-accent hover:text-cart-bg hover:border-cart-accent transition-all select-none">+</button>
            </div>
          </div>
        </div>
        `;
  });
}

// change the number of the unit for an item
chnageNumberOfUnits(action, id)