// Sample product list — you can expand this
const products = [
  {
    name: "Oversized Tee – Peach",
    price: "₹799",
    image: "https://images.unsplash.com/photo-1600180758890-6e3f43b3e6f4"
  },
  {
    name: "Denim Jacket – Classic Blue",
    price: "₹1,499",
    image: "https://images.unsplash.com/photo-1562158070-9c5d2a6b3e0f"
  },
  {
    name: "Summer Dress – Floral",
    price: "₹1,299",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb"
  }
];

let current = 0;

function showProduct(index) {
  const product = products[index];
  if (!product) return;

  document.getElementById("productImage").src = product.image;
  document.getElementById("productName").innerText = product.name;
  document.getElementById("productPrice").innerText = product.price;
}

function skipProduct() {
  current = (current + 1) % products.length;
  showProduct(current);
}

function saveToWishlist() {
  const product = products[current];
  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  wishlist.push(product);
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  alert("💖 Saved to Wishlist!");
  skipProduct();
}

function buyNow() {
  const product = products[current];
  localStorage.setItem("viewProduct", JSON.stringify(product));
  window.location.href = "product.html";
}

// Show the first product
showProduct(current);
