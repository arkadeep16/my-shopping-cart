/* app.js */
let productsEl = document.querySelector(".products");

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

    cart.push(item);

    console.log(cart);
  }
}
