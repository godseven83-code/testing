// Application Data
const appData = {
    "products": [{
            "id": 1,
            "name": "esp8266",
            "category": "Penetration Testing Tools",
            "price": 14759,
            "originalPrice": 16000,
            "brand": "Hak5",
            "image": "images/esp8266.jpeg",
            "stock": 15,
            "rating": 4.8,
            "reviews": 127,
            "description": "Keystroke injection tool that appears as a USB flash drive to humans but acts as a keyboard to computers",
            "specs": {
                "Type": "Keystroke Injection Device",
                "Language": "DuckScript 3.0",
                "Storage": "MicroSD Card",
                "Compatibility": "Windows, Mac, Linux",
                "Dimensions": "Standard USB Form Factor"
            },
            "features": ["Hotplug Attack Framework", "DuckScript Programming", "Payload Studio Compatible", "Human Interface Device"]
        },
        {
            "id": 2,
            "name": "Flipper Zero",
            "category": "Penetration Testing Tools",
            "price": 19900,
            "originalPrice": 22000,
            "brand": "Flipper Devices",
            "image": "/api/placeholder/300/300",
            "stock": 8,
            "rating": 4.9,
            "reviews": 203,
            "description": "Portable multi-tool for pentesters and geeks with RFID, NFC, Sub-GHz, and GPIO capabilities",
            "specs": {
                "Display": "1.4\" Monochrome LCD",
                "MCU": "STM32WB55 Dual-Core ARM",
                "Storage": "MicroSD Card Support",
                "Battery": "Built-in Rechargeable",
                "Connectivity": "Bluetooth, Sub-1GHz, NFC"
            },
            "features": ["RFID/NFC Cloning", "Sub-GHz Analysis", "GPIO Interface", "IR Transceiver", "Bluetooth LE"]
        },
        {
            "id": 3,
            "name": "WiFi Pineapple Mark VII",
            "category": "Wireless Security Tools",
            "price": 25000,
            "originalPrice": 28000,
            "brand": "Hak5",
            "image": "/api/placeholder/300/300",
            "stock": 12,
            "rating": 4.7,
            "reviews": 89,
            "description": "Advanced wireless auditing platform for penetration testing and red team operations",
            "specs": {
                "CPU": "Quad-Core ARM Cortex-A53",
                "RAM": "1GB DDR3",
                "Storage": "8GB eMMC + MicroSD",
                "Wireless": "Dual-Band AC Wi-Fi",
                "Ports": "2x USB-C, Ethernet"
            },
            "features": ["Rogue Access Point", "Man-in-the-Middle Attacks", "Client Reconnaissance", "PineAP Suite"]
        },
        {
            "id": 4,
            "name": "Raspberry Pi 5 Pentest Kit",
            "category": "Hardware Platforms",
            "price": 12500,
            "originalPrice": 15000,
            "brand": "Raspberry Pi Foundation",
            "image": "/api/placeholder/300/300",
            "stock": 25,
            "rating": 4.6,
            "reviews": 156,
            "description": "Complete ethical hacking kit based on Raspberry Pi 5 with pre-installed Kali Linux",
            "specs": {
                "CPU": "2.4GHz Quad-Core ARM Cortex-A76",
                "RAM": "8GB LPDDR4X",
                "Storage": "128GB MicroSD with Kali Linux",
                "Connectivity": "Wi-Fi 6, Bluetooth 5.0, Gigabit Ethernet",
                "Ports": "2x USB 3.0, 2x USB 2.0, 2x HDMI"
            },
            "features": ["Pre-loaded Kali Linux", "50+ Security Tools", "Portable Design", "GPIO Interface"]
        },
        {
            "id": 5,
            "name": "Proxmark3 RDV4",
            "category": "RFID Security Tools",
            "price": 18500,
            "originalPrice": 20000,
            "brand": "Proxmark",
            "image": "/api/placeholder/300/300",
            "stock": 6,
            "rating": 4.5,
            "reviews": 67,
            "description": "Professional RFID research and penetration testing platform for low and high frequency analysis",
            "specs": {
                "Frequency": "125kHz - 13.56MHz",
                "MCU": "ARM Cortex-M3",
                "Antenna": "Dual Frequency Coils",
                "Interface": "USB 2.0",
                "Software": "Proxmark3 Client"
            },
            "features": ["RFID Cloning", "Card Emulation", "Frequency Analysis", "Raw Signal Capture"]
        },
        {
            "id": 6,
            "name": "LAN Turtle",
            "category": "Network Security Hardware",
            "price": 8500,
            "originalPrice": 10000,
            "brand": "Hak5",
            "image": "/api/placeholder/300/300",
            "stock": 20,
            "rating": 4.4,
            "reviews": 94,
            "description": "Covert network access device for remote administration and penetration testing",
            "specs": {
                "CPU": "400MHz MIPS",
                "RAM": "64MB DDR2",
                "Storage": "16MB Flash",
                "Interface": "USB Ethernet Adapter",
                "OS": "OpenWrt Linux"
            },
            "features": ["Remote Shell Access", "Network Pivoting", "Covert Channel", "Modular Payloads"]
        },
        {
            "id": 7,
            "name": "Bash Bunny Mark II",
            "category": "Penetration Testing Tools",
            "price": 16500,
            "originalPrice": 18000,
            "brand": "Hak5",
            "image": "/api/placeholder/300/300",
            "stock": 10,
            "rating": 4.7,
            "reviews": 112,
            "description": "Multi-vector USB attack and automation platform with dual mode functionality",
            "specs": {
                "CPU": "Quad-Core ARM Cortex-A7",
                "RAM": "512MB DDR3",
                "Storage": "8GB eMMC",
                "Interface": "USB 3.0 Type-A",
                "Modes": "Attack/Arming Switch"
            },
            "features": ["Keystroke Injection", "Network Attacks", "Mass Storage Emulation", "Ethernet Emulation"]
        },
        {
            "id": 8,
            "name": "HackRF One",
            "category": "Radio Frequency Tools",
            "price": 22000,
            "originalPrice": 25000,
            "brand": "Great Scott Gadgets",
            "image": "/api/placeholder/300/300",
            "stock": 14,
            "rating": 4.6,
            "reviews": 78,
            "description": "Software Defined Radio (SDR) platform for RF analysis and security research",
            "specs": {
                "Frequency Range": "1MHz to 6GHz",
                "Sample Rate": "Up to 20 MSPS",
                "Interface": "USB 3.0",
                "Software": "GNU Radio Compatible",
                "Antenna": "SMA Connector"
            },
            "features": ["Full Duplex Operation", "Wide Frequency Range", "Open Source Hardware", "GNU Radio Support"]
        },
        {
            "id": 9,
            "name": "Ubertooth One",
            "category": "Bluetooth Security Tools",
            "price": 9500,
            "originalPrice": 12000,
            "brand": "Great Scott Gadgets",
            "image": "/api/placeholder/300/300",
            "stock": 18,
            "rating": 4.3,
            "reviews": 52,
            "description": "Open source Bluetooth monitoring and analysis platform for security research",
            "specs": {
                "Frequency": "2.4GHz ISM Band",
                "MCU": "ARM Cortex-M3",
                "Interface": "USB 2.0",
                "Antenna": "Integrated PCB Antenna",
                "Software": "Ubertooth Tools"
            },
            "features": ["Bluetooth Sniffing", "Protocol Analysis", "Jamming Capabilities", "Open Source Firmware"]
        },
        {
            "id": 10,
            "name": "Digispark Attiny85",
            "category": "DIY Security Tools",
            "price": 2500,
            "originalPrice": 3000,
            "brand": "Digistump",
            "image": "/api/placeholder/300/300",
            "stock": 35,
            "rating": 4.2,
            "reviews": 234,
            "description": "Micro USB development board perfect for creating custom keystroke injection tools",
            "specs": {
                "MCU": "Attiny85 8-bit AVR",
                "Flash": "8KB",
                "RAM": "512 bytes",
                "Interface": "USB HID",
                "Size": "Tiny Form Factor"
            },
            "features": ["Arduino Compatible", "USB HID Support", "Compact Design", "Custom Payload Development"]
        },
        {
            "id": 11,
            "name": "YubiKey 5 NFC",
            "category": "Hardware Security Keys",
            "price": 8000,
            "originalPrice": 9000,
            "brand": "Yubico",
            "image": "/api/placeholder/300/300",
            "stock": 50,
            "rating": 4.9,
            "reviews": 189,
            "description": "Multi-protocol hardware security key for strong authentication and identity verification",
            "specs": {
                "Protocols": "FIDO2, U2F, PIV, OpenPGP",
                "Connectivity": "USB-A, NFC",
                "Durability": "Water & Crush Resistant",
                "Compatibility": "Cross-Platform",
                "Certification": "FIPS 140-2 Level 2"
            },
            "features": ["Passwordless Login", "Two-Factor Authentication", "NFC Support", "Enterprise Ready"]
        },
        {
            "id": 12,
            "name": "Alfa AWUS036ACS WiFi Adapter",
            "category": "Wireless Security Tools",
            "price": 4500,
            "originalPrice": 5500,
            "brand": "Alfa Network",
            "image": "/api/placeholder/300/300",
            "stock": 40,
            "rating": 4.5,
            "reviews": 167,
            "description": "High-gain USB WiFi adapter with monitor mode and packet injection support for wireless security testing",
            "specs": {
                "Chipset": "Realtek RTL8812AU",
                "Frequency": "2.4GHz & 5GHz Dual-Band",
                "Standards": "802.11a/b/g/n/ac",
                "Interface": "USB 3.0",
                "Antenna": "5dBi Detachable"
            },
            "features": ["Monitor Mode", "Packet Injection", "Kali Linux Compatible", "Long Range Reception"]
        }
    ],
    "categories": [
        { "name": "Penetration Testing Tools", "count": 0, "description": "Professional tools for authorized security testing" },
        { "name": "Wireless Security Tools", "count": 0, "description": "WiFi and wireless network security analysis" },
        { "name": "Network Security Hardware", "count": 0, "description": "Network monitoring and analysis devices" },
        { "name": "RFID Security Tools", "count": 0, "description": "RFID/NFC cloning and analysis tools" },
        { "name": "Hardware Security Keys", "count": 0, "description": "Multi-factor authentication devices" },
        { "name": "Radio Frequency Tools", "count": 0, "description": "SDR and RF analysis equipment" },
        { "name": "IoT Security Devices", "count": 0, "description": "Internet of Things security testing tools" },
        { "name": "DIY Security Tools", "count": 0, "description": "Build your own security testing devices" }
    ],
    "brands": ["Hak5", "Flipper Devices", "Raspberry Pi Foundation", "Great Scott Gadgets", "Yubico", "Alfa Network", "Proxmark", "Digistump"],

};

// Application State
let state = {
    currentPage: 'home',
    cart: JSON.parse(localStorage.getItem('techiecyber404_cart')) || [],
    filters: {
        category: '',
        brand: '',
        priceMin: null,
        priceMax: null,
        search: ''
    },
    sortBy: 'name'
};

// Load orders from localStorage on init
let orders = JSON.parse(localStorage.getItem('techiecyber404_orders')) || [];

// Function to save cart to localStorage
function saveCart() {
    localStorage.setItem('techiecyber404_cart', JSON.stringify(state.cart));
}

// Function to save orders
function saveOrders() {
    localStorage.setItem('techiecyber404_orders', JSON.stringify(orders));
}

// Function to get all orders
function getOrders() {
    return orders;
}

// Function to add an order
function addOrder(orderData) {
    const order = {
        id: generateOrderId(),
        ...orderData,
        timestamp: new Date().toISOString(),
        status: 'pending', // e.g., 'pending', 'shipped', 'delivered'
        items: [...state.cart], // Snapshot of cart
        total: getCartTotal()
    };
    orders.unshift(order); // Add to front for newest first
    saveOrders();
    return order.id;
}

// Utility Functions
function formatPrice(price) {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0
    }).format(price);
}

function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let stars = '★'.repeat(fullStars);
    if (hasHalfStar) stars += '☆';
    return stars;
}

function generateOrderId() {
    return 'TC404-' + Math.random().toString(36).substr(2, 9).toUpperCase();
}

function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;

    // Add icon based on type
    const icons = {
        success: '✅',
        error: '❌',
        warning: '⚠️',
        info: 'ℹ️'
    };

    notification.innerHTML = `
        <span style="margin-right: 8px;">${icons[type] || icons.success}</span>
        ${message}
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOut 0.3s ease-in forwards';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }
    }, 4000);
}

// Add slideOut animation to CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Loading state functions
function setButtonLoading(button, loading = true) {
    if (loading) {
        button.classList.add('btn--loading');
        button.disabled = true;
        button.dataset.originalText = button.textContent;
    } else {
        button.classList.remove('btn--loading');
        button.disabled = false;
        if (button.dataset.originalText) {
            button.textContent = button.dataset.originalText;
        }
    }
}

// Function to test EmailJS configuration
function testEmailJSConfiguration() {
    console.log('Testing EmailJS configuration...');

    // Check if EmailJS is loaded
    if (typeof emailjs === 'undefined') {
        console.error('❌ EmailJS is not loaded. Check if the script tag is correct.');
        return false;
    }

    console.log('✅ EmailJS library is loaded');

    // Test with a simple email
    const testData = {
        to_name: 'Test User',
        to_email: 'test@example.com',
        from_name: 'TechieCyber404 Hardware Store',
        message: 'This is a test message from your website.'
    };

    emailjs.send("service_rqlka6t", "template_v825r0j", testData)
        .then(function(response) {
            console.log('✅ EmailJS test successful:', response.status, response.text);
        }, function(error) {
            console.error('❌ EmailJS test failed:', error);
            console.log('Check these things:');
            console.log('1. Service ID: service_rqlka6t');
            console.log('2. Template ID: template_v825r0j');
            console.log('3. Public Key: 9yqDcWHUqGlPw4mlH');
            console.log('4. Template variables match the data being sent');
        });
}

// Navigation Functions
function showPage(pageId) {
    console.log('Showing page:', pageId);

    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    // Show target page
    const targetPage = document.getElementById(pageId + '-page');
    if (targetPage) {
        targetPage.classList.add('active');
        state.currentPage = pageId;

        // Update navigation active states
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });
        document.querySelectorAll(`[data-page="${pageId}"]`).forEach(link => {
            link.classList.add('active');
        });

        // Close mobile menu
        const mobileNav = document.getElementById('mobile-nav');
        if (mobileNav) {
            mobileNav.classList.remove('active');
        }

        // Load page-specific content
        if (pageId === 'shop') {
            loadShopProducts();
        }

        window.scrollTo(0, 0);
        return true;
    } else {
        console.error('Page not found:', pageId + '-page');
        return false;
    }
}

// Product Functions
function getFilteredProducts() {
    let filtered = [...appData.products];

    if (state.filters.category) {
        filtered = filtered.filter(product => product.category === state.filters.category);
    }

    if (state.filters.brand) {
        filtered = filtered.filter(product => product.brand === state.filters.brand);
    }

    if (state.filters.search) {
        const search = state.filters.search.toLowerCase();
        filtered = filtered.filter(product =>
            product.name.toLowerCase().includes(search) ||
            product.description.toLowerCase().includes(search) ||
            product.category.toLowerCase().includes(search)
        );
    }

    if (state.filters.priceMin !== null) {
        filtered = filtered.filter(product => product.price >= state.filters.priceMin);
    }

    if (state.filters.priceMax !== null) {
        filtered = filtered.filter(product => product.price <= state.filters.priceMax);
    }

    // Apply sorting
    filtered.sort((a, b) => {
        switch (state.sortBy) {
            case 'price-low':
                return a.price - b.price;
            case 'price-high':
                return b.price - a.price;
            case 'rating':
                return b.rating - a.rating;
            case 'name':
            default:
                return a.name.localeCompare(b.name);
        }
    });

    return filtered;
}

function renderProductCard(product) {
    const stockStatus = product.stock > 10 ? 'in-stock' : 'low-stock';
    const stockText = product.stock > 10 ? 'In Stock' : `Only ${product.stock} left`;

    return `
    <div class="product-card" data-product-id="${product.id}">
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}" width="200" height="200" style="object-fit:cover; border-radius:8px;">
      </div>
      <div class="product-info">
        <div class="product-brand">${product.brand}</div>
        <h3 class="product-name">${product.name}</h3>
        <p class="product-description">${product.description}</p>
        <div class="product-rating">
          <span class="stars">${generateStars(product.rating)}</span>
          <span>${product.rating} (${product.reviews} reviews)</span>
        </div>
        <div class="product-price">
          <span class="current-price">${formatPrice(product.price)}</span>
          ${product.originalPrice > product.price ? `<span class="original-price">${formatPrice(product.originalPrice)}</span>` : ''}
        </div>
        <div class="stock-status ${stockStatus}">${stockText}</div>
        <div class="product-actions">
          <button class="btn btn--primary btn--sm view-product-btn" data-product-id="${product.id}">
            View Details
          </button>
          <button class="btn btn--secondary btn--sm add-to-cart-btn" data-product-id="${product.id}">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  `;
}

function renderProductDetail(product) {
  const stockStatus = product.stock > 10 ? 'in-stock' : 'low-stock';
  const stockText = product.stock > 10 ? 'In Stock' : `Only ${product.stock} left`;
  
  return `
    
     <div class="product-images">
      <img class="main-image" src="${product.image}" alt="${product.name}" width="300" height="300" style="object-fit:cover; border-radius:12px;">
        </div>

    <div class="product-details">
      <div class="product-brand">${product.brand}</div>
      <h1>${product.name}</h1>
      <div class="product-rating">
        <span class="stars">${generateStars(product.rating)}</span>
        <span>${product.rating} (${product.reviews} reviews)</span>
      </div>
      <div class="product-price">
        <span class="current-price">${formatPrice(product.price)}</span>
        ${product.originalPrice > product.price ? `<span class="original-price">${formatPrice(product.originalPrice)}</span>` : ''}
      </div>
      <div class="stock-status ${stockStatus}">${stockText}</div>
      <p>${product.description}</p>
      
      <div class="product-specs">
        <h3>Specifications</h3>
        ${Object.entries(product.specs).map(([key, value]) => `
          <div class="spec-item">
            <span class="spec-label">${key}:</span>
            <span class="spec-value">${value}</span>
          </div>
        `).join('')}
      </div>
      
      <div class="product-features">
        <h3>Features</h3>
        <ul class="features-list">
          ${product.features.map(feature => `<li>${feature}</li>`).join('')}
        </ul>
      </div>
      
      <div class="product-actions">
        <button class="btn btn--primary btn--lg add-to-cart-btn" data-product-id="${product.id}">
          Add to Cart - ${formatPrice(product.price)}
        </button>
      </div>
    </div>
  `;
}

function showProductDetail(productId) {
  const product = appData.products.find(p => p.id === parseInt(productId));
  if (!product) return;
  
  document.getElementById('product-breadcrumb').textContent = product.name;
  document.getElementById('product-detail-content').innerHTML = renderProductDetail(product);
  showPage('product-detail');
}

// Cart Functions
function addToCart(productId) {
  const product = appData.products.find(p => p.id === parseInt(productId));
  if (!product) return;
  
  const existingItem = state.cart.find(item => item.id === product.id);
  
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    state.cart.push({
      ...product,
      quantity: 1
    });
  }
  
  saveCart(); // Save to localStorage
  updateCartUI();
  showNotification('Product added to cart!');
}

function removeFromCart(productId) {
  state.cart = state.cart.filter(item => item.id !== parseInt(productId));
  saveCart(); // Save to localStorage
  updateCartUI();
}

function updateCartQuantity(productId, quantity) {
  const item = state.cart.find(item => item.id === parseInt(productId));
  if (item) {
    if (quantity <= 0) {
      removeFromCart(productId);
    } else {
      item.quantity = quantity;
      saveCart(); // Save to localStorage
    }
  }
  updateCartUI();
}

function getCartTotal() {
  return state.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

function updateCartUI() {
  const cartCount = state.cart.reduce((total, item) => total + item.quantity, 0);
  const cartCountElement = document.getElementById('cart-count');
  if (cartCountElement) {
    cartCountElement.textContent = cartCount;
  }
  
  // Update cart sidebar
  const cartItems = document.getElementById('cart-items');
  if (cartItems) {
    if (state.cart.length === 0) {
      cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
    } else {
      cartItems.innerHTML = state.cart.map(item => `
        <div class="cart-item">
          <div class="cart-item-image">
              <img src="${item.image}" alt="${item.name}" width="60" height="60" style="object-fit:cover; border-radius:8px;">
                  </div>
          <div class="cart-item-details">
            <div class="cart-item-name">${item.name}</div>
            <div class="cart-item-price">${formatPrice(item.price)}</div>
            <div class="quantity-controls">
              <button class="quantity-btn" data-action="decrease" data-product-id="${item.id}">-</button>
              <span class="quantity">${item.quantity}</span>
              <button class="quantity-btn" data-action="increase" data-product-id="${item.id}">+</button>
              <button class="btn btn--secondary btn--sm" data-action="remove" data-product-id="${item.id}">Remove</button>
            </div>
          </div>
        </div>
      `).join('');
    }
  }
  
  const cartTotalElement = document.getElementById('cart-total');
  if (cartTotalElement) {
    cartTotalElement.textContent = getCartTotal().toLocaleString();
  }
  
  // Update cart page
  const cartContent = document.getElementById('cart-content');
  if (cartContent) {
    if (state.cart.length === 0) {
      cartContent.innerHTML = `
        <div class="empty-cart-message" style="text-align: center; padding: 60px 20px;">
          <h2>Your cart is empty</h2>
          <p>Looks like you haven't added any items to your cart yet.</p>
          <button class="btn btn--primary" onclick="showPage('shop')">Continue Shopping</button>
        </div>
      `;
    } else {
      cartContent.innerHTML = `
        <div class="cart-items-list">
          ${state.cart.map(item => `
            <div class="cart-item-row" style="display: flex; gap: 20px; padding: 20px; border-bottom: 1px solid var(--color-border);">
              <div class="cart-item-image">🔧</div>
              <div class="cart-item-info" style="flex: 1;">
                <h3>${item.name}</h3>
                <p class="cart-item-brand">${item.brand}</p>
                <p class="cart-item-price">${formatPrice(item.price)} each</p>
              </div>
              <div class="cart-item-controls">
                <div class="quantity-controls">
                  <button class="quantity-btn" data-action="decrease" data-product-id="${item.id}">-</button>
                  <span class="quantity">${item.quantity}</span>
                  <button class="quantity-btn" data-action="increase" data-product-id="${item.id}">+</button>
                </div>
                <div class="item-total">${formatPrice(item.price * item.quantity)}</div>
                <button class="btn btn--secondary btn--sm" data-action="remove" data-product-id="${item.id}">Remove</button>
              </div>
            </div>
          `).join('')}
        </div>
        <div class="cart-summary" style="background: var(--color-surface); padding: 30px; margin-top: 30px; border-radius: 12px;">
          <div class="cart-total-section">
            <h2>Order Summary</h2>
            <div class="total-line" style="display: flex; justify-content: space-between; margin: 10px 0;">
              <span>Subtotal:</span>
              <span>${formatPrice(getCartTotal())}</span>
            </div>
            <div class="total-line" style="display: flex; justify-content: space-between; margin: 10px 0;">
              <span>Shipping:</span>
              <span>FREE</span>
            </div>
            <div class="total-line total" style="display: flex; justify-content: space-between; margin: 20px 0; font-size: 18px; border-top: 1px solid var(--color-border); padding-top: 20px;">
              <span><strong>Total:</strong></span>
              <span><strong>${formatPrice(getCartTotal())}</strong></span>
            </div>
            <button class="btn btn--primary btn--lg btn--full-width" onclick="showPage('checkout')">
              Proceed to Checkout
            </button>
          </div>
        </div>
      `;
    }
  }
  
  // Update checkout summary
  const checkoutSummary = document.getElementById('checkout-summary');
  if (checkoutSummary) {
    checkoutSummary.innerHTML = `
      ${state.cart.map(item => `
        <div class="checkout-item" style="display: flex; justify-content: space-between; margin: 10px 0;">
          <span>${item.name} (x${item.quantity})</span>
          <span>${formatPrice(item.price * item.quantity)}</span>
        </div>
      `).join('')}
      <div class="checkout-total" style="border-top: 1px solid var(--color-border); margin-top: 20px; padding-top: 20px;">
        <strong>Total: ${formatPrice(getCartTotal())}</strong>
      </div>
    `;
  }
}

function loadShopFilters() {
  const categoryFilters = document.getElementById('category-filters');
  if (categoryFilters) {
    categoryFilters.innerHTML = appData.categories.map(category => `
      <label class="filter-item">
        <input type="checkbox" class="filter-checkbox" data-filter="category" value="${category.name}">
        <span>${category.name} (${category.count})</span>
      </label>
    `).join('');
  } 
  
  /*const brandFilters = document.getElementById('brand-filters');
  if (brandFilters) {
    brandFilters.innerHTML = appData.brands.map(brand => `
      <label class="filter-item">
        <input type="checkbox" class="filter-checkbox" data-filter="brand" value="${brand}">
        <span>${brand}</span>
      </label>
    `).join('');
  } */
}

function loadShopProducts() {
    const productsGrid = document.getElementById('shop-products-grid');
    if (!productsGrid) return;

  // Only show esp8266 product
  const espProduct = appData.products.find(p => p.name === "esp8266");
  if (!espProduct) {
    productsGrid.innerHTML = '<p class="no-products">No products found.</p>';
    } else {
    productsGrid.innerHTML = renderProductCard(espProduct);
    }
}

// Initialize Application
function init() {
  console.log('Initializing application...');
  
  // Check EmailJS availability
  setTimeout(() => {
    if (typeof emailjs !== 'undefined') {
      console.log('✅ EmailJS is loaded and ready');
    } else {
      console.warn('⚠️ EmailJS is not loaded. Email functionality will not work.');
    }
  }, 1000);
  
  // Load featured products on home page
  const featuredProducts = appData.products.slice(0, 1);
  const featuredGrid = document.getElementById('featured-products-grid');
  if (featuredGrid) {
    featuredGrid.innerHTML = featuredProducts.map(renderProductCard).join('');
  }
  
  // Load categories
  const categoriesGrid = document.getElementById('categories-grid');
  if (categoriesGrid) {
    categoriesGrid.innerHTML = appData.categories.map(category => `
      <div class="category-card" data-category="${category.name}">
        <div class="category-icon">🔒</div>
        <h3 class="category-name">${category.name}</h3>
        <div class="category-count">${category.count} products</div>
        <p class="category-description">${category.description}</p>
      </div>
    `).join('');
  }
  
  
  
  loadShopFilters();
  loadShopProducts();
  updateCartUI();
}

// Event Handler Functions
function handleNavigation(e) {
  e.preventDefault();
  e.stopPropagation();
  
  let targetPage = null;
  
  if (e.target.hasAttribute('data-page')) {
    targetPage = e.target.getAttribute('data-page');
  } else if (e.target.closest('[data-page]')) {
    targetPage = e.target.closest('[data-page]').getAttribute('data-page');
  } else if (e.target.closest('.logo')) {
    targetPage = 'home';
  }
  
  if (targetPage) {
    console.log('Navigating to:', targetPage);
    showPage(targetPage);
  }
}

function handleProductActions(e) {
  e.preventDefault();
  e.stopPropagation();
  
  if (e.target.classList.contains('view-product-btn')) {
    const productId = e.target.getAttribute('data-product-id');
    showProductDetail(productId);
  } else if (e.target.classList.contains('add-to-cart-btn')) {
    const productId = e.target.getAttribute('data-product-id');
    addToCart(productId);
  }
}

function handleCartActions(e) {
  if (!e.target.classList.contains('quantity-btn')) return;
  
  e.preventDefault();
  e.stopPropagation();
  
  const productId = e.target.getAttribute('data-product-id');
  const action = e.target.getAttribute('data-action');
  
  if (action === 'increase') {
    const item = state.cart.find(item => item.id === parseInt(productId));
    if (item) {
      updateCartQuantity(productId, item.quantity + 1);
    }
  } else if (action === 'decrease') {
    const item = state.cart.find(item => item.id === parseInt(productId));
    if (item) {
      updateCartQuantity(productId, item.quantity - 1);
    }
  } else if (action === 'remove') {
    removeFromCart(productId);
  }
}

function handleCategoryFilter(e) {
  if (!e.target.closest('.category-card')) return;
  
  e.preventDefault();
  e.stopPropagation();
  
  const category = e.target.closest('.category-card').getAttribute('data-category');
  state.filters.category = category;
  loadShopProducts();
  showPage('shop');
}

function handleFilterChange(e) {
  if (!e.target.classList.contains('filter-checkbox')) return;
  
  const filterType = e.target.getAttribute('data-filter');
  const value = e.target.value;
  
  if (e.target.checked) {
    if (filterType === 'category') {
      document.querySelectorAll('[data-filter="category"]').forEach(cb => {
        if (cb !== e.target) cb.checked = false;
      });
      state.filters.category = value;
    } else if (filterType === 'brand') {
      state.filters.brand = value;
    }
  } else {
    if (filterType === 'category') {
      state.filters.category = '';
    } else if (filterType === 'brand') {
      state.filters.brand = '';
    }
  }
  
  loadShopProducts();
}

// DOM Event Listeners
document.addEventListener('DOMContentLoaded', function() {
  init();
  
  // Global click handler with proper delegation
  document.addEventListener('click', function(e) {
    console.log('Click detected on:', e.target);
    
    // Navigation clicks - check multiple conditions
    if (e.target.hasAttribute('data-page') || 
        e.target.closest('[data-page]') || 
        e.target.closest('.logo')) {
      handleNavigation(e);
      return;
    }
    
    // Product action buttons
    if (e.target.classList.contains('view-product-btn') || 
        e.target.classList.contains('add-to-cart-btn')) {
      handleProductActions(e);
      return;
    }
    
    // Cart actions
    if (e.target.classList.contains('quantity-btn')) {
      handleCartActions(e);
      return;
    }
    
    // Category cards
    if (e.target.closest('.category-card')) {
      handleCategoryFilter(e);
      return;
    }
    
    // Filter checkboxes
    if (e.target.classList.contains('filter-checkbox')) {
      handleFilterChange(e);
      return;
    }
  });
  
  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileNav = document.getElementById('mobile-nav');
  if (mobileMenuBtn && mobileNav) {
    mobileMenuBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      mobileNav.classList.toggle('active');
    });
  }
  
  // Cart sidebar functionality
  const cartBtn = document.getElementById('cart-btn');
  const cartSidebar = document.getElementById('cart-sidebar');
  const cartClose = document.getElementById('cart-close');
  
  if (cartBtn && cartSidebar) {
    cartBtn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      cartSidebar.classList.add('active');
    });
  }
  
  if (cartClose && cartSidebar) {
    cartClose.addEventListener('click', function() {
      cartSidebar.classList.remove('active');
    });
  }
  
  // Search functionality
  const searchInput = document.getElementById('search-input');
  const searchBtn = document.getElementById('search-btn');
  
  function performSearch() {
    if (searchInput) {
      state.filters.search = searchInput.value;
      loadShopProducts();
      if (state.currentPage !== 'shop') {
        showPage('shop');
      }
    }
  }
  
  if (searchBtn) {
    searchBtn.addEventListener('click', performSearch);
  }
  
  if (searchInput) {
    searchInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        performSearch();
      }
    });
  }
  
  // Sort functionality
  const sortSelect = document.getElementById('sort-select');
  if (sortSelect) {
    sortSelect.addEventListener('change', function() {
      state.sortBy = this.value;
      loadShopProducts();
    });
  }
  
  // Price filter
  const applyPriceFilterBtn = document.getElementById('apply-price-filter');
  if (applyPriceFilterBtn) {
    applyPriceFilterBtn.addEventListener('click', function() {
      const priceMinInput = document.getElementById('price-min');
      const priceMaxInput = document.getElementById('price-max');
      state.filters.priceMin = priceMinInput.value ? parseInt(priceMinInput.value) : null;
      state.filters.priceMax = priceMaxInput.value ? parseInt(priceMaxInput.value) : null;
      loadShopProducts();
    });
  }
  
  // Checkout functionality
  const checkoutForm = document.getElementById('checkout-form');
  if (checkoutForm) {
    checkoutForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      if (state.cart.length === 0) {
        showNotification('Your cart is empty!');
        return;
      }
      
      const orderId = generateOrderId();
      const orderIdElement = document.getElementById('order-id');
      if (orderIdElement) {
        orderIdElement.textContent = orderId;
      }
      
      state.cart = [];
      updateCartUI();
      
      const modal = document.getElementById('order-confirmation-modal');
      if (modal) {
        modal.classList.remove('hidden');
      }
    });
  }
  
  // Contact form
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      showNotification('Thank you for your message! We will get back to you soon.');
      contactForm.reset();
    });
  }
  
  // Modal and sidebar close handlers
  const continueShoppingBtn = document.getElementById('continue-shopping');
  if (continueShoppingBtn) {
    continueShoppingBtn.addEventListener('click', function() {
      document.getElementById('order-confirmation-modal').classList.add('hidden');
      showPage('shop');
    });
  }
  
  const closeConfirmationModal = document.getElementById('close-confirmation-modal');
  if (closeConfirmationModal) {
    closeConfirmationModal.addEventListener('click', function() {
      document.getElementById('order-confirmation-modal').classList.add('hidden');
    });
  }
  
  // Close cart sidebar when clicking outside
  document.addEventListener('click', function(e) {
    if (cartSidebar && cartSidebar.classList.contains('active')) {
      if (!cartSidebar.contains(e.target) && !cartBtn.contains(e.target)) {
        cartSidebar.classList.remove('active');
      }
    }
  });
  
  // Close modal when clicking outside
  document.addEventListener('click', function(e) {
    const modal = document.getElementById('order-confirmation-modal');
    if (modal && !modal.classList.contains('hidden')) {
      if (e.target === modal) {
        modal.classList.add('hidden');
      }
    }
  });
  
  document.getElementById('checkout-btn').addEventListener('click', function() {
  document.getElementById('checkout-form-modal').style.display = 'flex';
});

document.getElementById('close-checkout-form').addEventListener('click', function() {
  document.getElementById('checkout-form-modal').style.display = 'none';
});

// Form validation functions
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^[0-9]{10}$/;
    return re.test(phone.replace(/\s/g, ''));
}

function validateRequired(value) {
    return value.trim().length > 0;
}

function showFieldError(field, message) {
    field.classList.add('form-control--error');
    
    // Remove existing error message
    const existingError = field.parentNode.querySelector('.form-error-message');
    if (existingError) {
        existingError.remove();
    }
    
    // Add new error message
    const errorElement = document.createElement('span');
    errorElement.className = 'form-error-message';
    errorElement.textContent = message;
    field.parentNode.appendChild(errorElement);
}

function clearFieldError(field) {
    field.classList.remove('form-control--error');
    field.classList.add('form-control--success');
    
    const existingError = field.parentNode.querySelector('.form-error-message');
    if (existingError) {
        existingError.remove();
    }
}

function validatePinCode(pincode) {
    const re = /^[0-9]{6}$/;
    return re.test(pincode.replace(/\s/g, ''));
}

function validateOrderForm(form) {
    let isValid = true;
    const fields = {
        name: form.name,
        phone: form.phone,
        city: form.city,
        address: form.address,
        pincode: form.pincode,
        email: form.email
    };
    
    // Clear previous errors
    Object.values(fields).forEach(field => {
        field.classList.remove('form-control--error', 'form-control--success');
        const errorMsg = field.parentNode.querySelector('.form-error-message');
        if (errorMsg) errorMsg.remove();
    });
    
    // Validate each field
    if (!validateRequired(fields.name.value)) {
        showFieldError(fields.name, 'Name is required');
        isValid = false;
    } else {
        clearFieldError(fields.name);
    }
    
    if (!validateRequired(fields.phone.value)) {
        showFieldError(fields.phone, 'Phone number is required');
        isValid = false;
    } else if (!validatePhone(fields.phone.value)) {
        showFieldError(fields.phone, 'Please enter a valid 10-digit phone number');
        isValid = false;
    } else {
        clearFieldError(fields.phone);
    }
    
    if (!validateRequired(fields.city.value)) {
        showFieldError(fields.city, 'City is required');
        isValid = false;
    } else {
        clearFieldError(fields.city);
    }
    
    if (!validateRequired(fields.address.value)) {
        showFieldError(fields.address, 'Address is required');
        isValid = false;
    } else {
        clearFieldError(fields.address);
    }
    
    if (!validateRequired(fields.pincode.value)) {
        showFieldError(fields.pincode, 'Pin code is required');
        isValid = false;
    } else if (!validatePinCode(fields.pincode.value)) {
        showFieldError(fields.pincode, 'Please enter a valid 6-digit pin code');
        isValid = false;
    } else {
        clearFieldError(fields.pincode);
    }
    
    if (!validateRequired(fields.email.value)) {
        showFieldError(fields.email, 'Email is required');
        isValid = false;
    } else if (!validateEmail(fields.email.value)) {
        showFieldError(fields.email, 'Please enter a valid email address');
        isValid = false;
    } else {
        clearFieldError(fields.email);
    }
    
    return isValid;
}

document.getElementById('order-form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Validate form
  if (!validateOrderForm(this)) {
    showNotification('Please fix the errors in the form', 'error');
    return;
  }
  
  const submitButton = this.querySelector('button[type="submit"]');
  setButtonLoading(submitButton, true);
  
  const name = this.name.value;
  const phone = this.phone.value;
  const city = this.city.value;
  const address = this.address.value;
  const pincode = this.pincode.value;
  const email = this.email.value;
  
  // Save order to localStorage
  const orderId = addOrder({ name, phone, city, address, pincode, email });

  // Prepare data for EmailJS
  const orderData = {
    to_name: name,
    to_email: email,
    from_name: "TechieCyber404 Hardware Store",
    order_id: orderId,
    customer_name: name,
    customer_email: email,
    customer_phone: phone,
    customer_city: city,
    customer_address: address,
    customer_pincode: pincode,
    payment_method: "Cash on Delivery (COD)",
    order_total: formatPrice(getCartTotal()),
    order_items: state.cart.map(item => `${item.name} (Qty: ${item.quantity}) - ${formatPrice(item.price * item.quantity)}`).join('\n'),
    message: `New COD order received from ${name}. Order ID: ${orderId}. Total: ${formatPrice(getCartTotal())}. Payment: Cash on Delivery`
  };

  console.log('Sending EmailJS with data:', orderData);

  // Check if EmailJS is loaded
  if (typeof emailjs === 'undefined') {
    console.error('❌ EmailJS is not loaded!');
    setButtonLoading(submitButton, false);
    showNotification("Email service not available. Order saved but no confirmation email sent.", 'warning');
    
    // Still process the order locally
    document.getElementById('checkout-form-modal').style.display = 'none';
    document.getElementById('order-id').textContent = orderId;
    document.getElementById('order-confirmation-modal').classList.remove('hidden');
    state.cart = [];
    saveCart();
    updateCartUI();
    this.reset();
    return;
  }

  // Send with EmailJS
  emailjs.send("service_rqlka6t", "template_v825r0j", orderData)
    .then(function(response) {
      console.log('EmailJS success:', response.status, response.text);
      setButtonLoading(submitButton, false);
      showNotification("Order placed successfully! Confirmation sent to your email.", 'success');
      
      // Hide the checkout form modal
      document.getElementById('checkout-form-modal').style.display = 'none';

      // Show the confirmation modal with order ID
      document.getElementById('order-id').textContent = orderId;
      document.getElementById('order-confirmation-modal').classList.remove('hidden');

      // Clear the cart
      state.cart = [];
      saveCart();
      updateCartUI();

      // Reset form
      this.reset();
    }, function(error) {
      console.error("EmailJS error details:", error);
      setButtonLoading(submitButton, false);
      showNotification("Failed to send order confirmation email. Order saved but please contact support.", 'error');
      
      // Still show confirmation even if email fails
      document.getElementById('checkout-form-modal').style.display = 'none';
      document.getElementById('order-id').textContent = orderId;
      document.getElementById('order-confirmation-modal').classList.remove('hidden');
      
      // Clear the cart
      state.cart = [];
      saveCart();
      updateCartUI();
      
      // Reset form
      this.reset();
    });
}.bind(document.getElementById('order-form')));
  
  console.log('Application fully initialized');
});

// Removed duplicate checkout-form handler - using order-form instead
