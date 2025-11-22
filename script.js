/* ========================================
   Divine Pooja Store - JavaScript
   Cart, Search, Filter, and UI Functions
   ======================================== */

// ========== PRODUCT DATA ==========
const products = [
    // Pooja Essentials
    { id: 1, name: "Agarbatti (Incense Sticks)", price: 30, category: "Pooja Essentials", 
      image: "https://images.unsplash.com/photo-1600618528240-fb9fc964b853?w=400&h=400&fit=crop" },
    { id: 2, name: "Camphor (Kapur)", price: 25, category: "Pooja Essentials", 
      image: "https://images.unsplash.com/photo-1602874801007-bd458bb1b8b6?w=400&h=400&fit=crop" },
    { id: 3, name: "Diya Oil (Til Oil)", price: 50, category: "Pooja Essentials", 
      image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=400&h=400&fit=crop" },
    { id: 4, name: "Haldi (Turmeric)", price: 20, category: "Pooja Essentials", 
      image: "https://images.unsplash.com/photo-1615485500710-aa71300612aa?w=400&h=400&fit=crop" },
    { id: 5, name: "Kumkum (Sindoor)", price: 20, category: "Pooja Essentials", 
      image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&h=400&fit=crop" },
    { id: 6, name: "Sambrani Cups", price: 40, category: "Pooja Essentials", 
      image: "https://images.unsplash.com/photo-1609766856923-7e0a0c06df30?w=400&h=400&fit=crop" },
    
    // God Idols & Photos
    { id: 7, name: "Brass Ganesha Idol", price: 300, category: "God Idols & Photos", 
      image: "https://images.unsplash.com/photo-1567591414240-e9c1e001183a?w=400&h=400&fit=crop" },
    { id: 8, name: "Marble Krishna Idol", price: 450, category: "God Idols & Photos", 
      image: "https://images.unsplash.com/photo-1604608672516-f1b9b1d37076?w=400&h=400&fit=crop" },
    { id: 9, name: "Lakshmi Photo Frame", price: 120, category: "God Idols & Photos", 
      image: "https://images.unsplash.com/photo-1621947081720-86970823b77a?w=400&h=400&fit=crop" },
    { id: 10, name: "Shiva Lingam (Mini)", price: 250, category: "God Idols & Photos", 
      image: "https://images.unsplash.com/photo-1545126178-862cdb469409?w=400&h=400&fit=crop" },
    
    // Garlands & Flowers
    { id: 11, name: "Fresh Flower Garland", price: 40, category: "Garlands & Flowers", 
      image: "https://images.unsplash.com/photo-1606293926075-69a00dbfde81?w=400&h=400&fit=crop" },
    { id: 12, name: "Artificial Garland", price: 60, category: "Garlands & Flowers", 
      image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400&h=400&fit=crop" },
    { id: 13, name: "Lotus Flowers (5 pcs)", price: 30, category: "Garlands & Flowers", 
      image: "https://images.unsplash.com/photo-1606567595334-d39972c85dfd?w=400&h=400&fit=crop" },
    { id: 14, name: "Puja Floral Plate", price: 50, category: "Garlands & Flowers", 
      image: "https://images.unsplash.com/photo-1518882605630-8eb748ddc1fe?w=400&h=400&fit=crop" },
    
    // Pooja Samagri Kits
    { id: 15, name: "Lakshmi Puja Kit", price: 199, category: "Pooja Samagri Kits", 
      image: "https://images.unsplash.com/photo-1621947081720-86970823b77a?w=400&h=400&fit=crop" },
    { id: 16, name: "Ganesh Puja Kit", price: 159, category: "Pooja Samagri Kits", 
      image: "https://images.unsplash.com/photo-1567591414240-e9c1e001183a?w=400&h=400&fit=crop" },
    { id: 17, name: "Satyanarayan Puja Kit", price: 299, category: "Pooja Samagri Kits", 
      image: "https://images.unsplash.com/photo-1609766856923-7e0a0c06df30?w=400&h=400&fit=crop" },
    { id: 18, name: "Varalakshmi Puja Kit", price: 249, category: "Pooja Samagri Kits", 
      image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=400&h=400&fit=crop" },
    
    // Rudraksha & Accessories
    { id: 19, name: "Rudraksha Mala (108 beads)", price: 150, category: "Rudraksha & Accessories", 
      image: "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?w=400&h=400&fit=crop" },
    { id: 20, name: "Tulsi Mala", price: 80, category: "Rudraksha & Accessories", 
      image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&h=400&fit=crop" },
    { id: 21, name: "Gold-Plated Chain", price: 180, category: "Rudraksha & Accessories", 
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop" },
    { id: 22, name: "Silver Chain", price: 200, category: "Rudraksha & Accessories", 
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop" },
    
    // Brass & Copper Items
    { id: 23, name: "Brass Diya (Set of 2)", price: 100, category: "Brass & Copper Items", 
      image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=400&h=400&fit=crop" },
    { id: 24, name: "Copper Kalash", price: 250, category: "Brass & Copper Items", 
      image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&h=400&fit=crop" },
    { id: 25, name: "Brass Bell (Ghanta)", price: 150, category: "Brass & Copper Items", 
      image: "https://images.unsplash.com/photo-1609766856923-7e0a0c06df30?w=400&h=400&fit=crop" },
    { id: 26, name: "Panchapatra Udharani", price: 120, category: "Brass & Copper Items", 
      image: "https://images.unsplash.com/photo-1602874801007-bd458bb1b8b6?w=400&h=400&fit=crop" }
];

// ========== CART FUNCTIONS ==========

// Get cart from localStorage
function getCart() {
    const cart = localStorage.getItem('divineCart');
    return cart ? JSON.parse(cart) : [];
}

// Save cart to localStorage
function saveCart(cart) {
    localStorage.setItem('divineCart', JSON.stringify(cart));
}

// Add item to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    let cart = getCart();
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.qty += 1;
    } else {
        cart.push({ ...product, qty: 1 });
    }
    
    saveCart(cart);
    updateCartCount();
    showToast(`${product.name} added to cart!`);
}

// Remove item from cart
function removeFromCart(productId) {
    let cart = getCart();
    cart = cart.filter(item => item.id !== productId);
    saveCart(cart);
    updateCartCount();
}

// Clear entire cart
function clearCart() {
    saveCart([]);
    updateCartCount();
}

// Get cart total
function getCartTotal() {
    const cart = getCart();
    return cart.reduce((total, item) => total + (item.price * item.qty), 0);
}

// Update cart count in header
function updateCartCount() {
    const cart = getCart();
    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
    const countElements = document.querySelectorAll('#cartCount, .cart-count');
    countElements.forEach(el => {
        if (el) el.textContent = totalItems;
    });
}

// ========== SEARCH & FILTER ==========

let searchQuery = '';
let currentCategory = 'All';

// Filter products based on search and category
function filterProducts() {
    return products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = currentCategory === 'All' || product.category === currentCategory;
        return matchesSearch && matchesCategory;
    });
}

// Render products grid
function renderProducts() {
    const container = document.getElementById('productsGrid');
    const noResults = document.getElementById('noResults');
    if (!container) return;
    
    const filtered = filterProducts();
    
    if (filtered.length === 0) {
        container.innerHTML = '';
        if (noResults) noResults.style.display = 'block';
        return;
    }
    
    if (noResults) noResults.style.display = 'none';
    container.innerHTML = filtered.map(product => createProductCard(product)).join('');
}

// Create product card HTML
function createProductCard(product) {
    return `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}" class="product-image" 
                 onerror="this.src='https://images.unsplash.com/photo-1609766856923-7e0a0c06df30?w=400&h=400&fit=crop'">
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-category">${product.category}</p>
                <p class="product-price">₹${product.price}</p>
                <button class="btn btn-primary" onclick="addToCart(${product.id})">
                    🛒 Add to Cart
                </button>
            </div>
        </div>
    `;
}

// ========== TOAST NOTIFICATION ==========

function showToast(message) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    
    const toastMessage = toast.querySelector('.toast-message');
    if (toastMessage) toastMessage.textContent = message;
    
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2500);
}

// ========== INITIALIZE ==========

document.addEventListener('DOMContentLoaded', function() {
    // Update cart count on all pages
    updateCartCount();
    
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
});

// ========== UTILITY FUNCTIONS ==========

// Format price with rupee symbol
function formatPrice(price) {
    return `₹${price.toLocaleString('en-IN')}`;
}

// Debounce function for search
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}
