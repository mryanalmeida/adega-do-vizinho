const products = [
    {
        category: "Copão",
        name: "Copão de Red Label Premium",
        description: "Copão de 700ml com Whisky + Red Bull 250ml + Gelo de coco.",
        price: 30,
        image: "img/Produtos/red-premium.png",
        available: true
    },
    {
        category: "Copão",
        name: "Copão de Red Label Básico",
        description: "Copão de 700ml com Whisky + Energético Vibe + Gelo de coco.",
        price: 28,
        image: "img/Produtos/red-basico.png",
        available: true
    },
    {
        category: "Copão",
        name: "Copão de Jack Daniels Premium",
        description: "Copão de 700ml com Whisky + Red Bull 250ml + Gelo de coco.",
        price: 38,
        image: "img/Produtos/jack-premium.png",
        available: true
    },
    {
        category: "Copão",
        name: "Copão de Jack Daniels Básico",
        description: "Copão de 700ml com Whisky + Energético Vibe + Gelo de coco.",
        price: 35,
        image: "img/Produtos/jack-basico.png",
        available: true
    },
    {
        category: "Energético",
        name: "Red Bull",
        description: "Energético Red Bull lata 250ml gelado.",
        price: 14,
        image: "https://images.unsplash.com/photo-1622543925917-763c34d1a86e?auto=format&fit=crop&w=900&q=70",
        available: true
    },
    {
        category: "Gelo de Sabor",
        name: "Gelo de Morango",
        description: "Gelo saborizado de morango para drinks.",
        price: 8,
        image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=900&q=70",
        available: true
    },
    {
        category: "Cerveja",
        name: "Heineken Long Neck",
        description: "Long neck Heineken extremamente gelada.",
        price: 12,
        image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=900&q=70",
        available: false
    },
    {
        category: "Combos",
        name: "Combo Whisky + Energético",
        description: "Combo completo com whisky, energético e gelo.",
        price: 120,
        image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=900&q=70",
        available: true
    }
];

const CART_KEY = "adega-cart";
const WHATSAPP_PHONE = "5511917742509";

let cart = loadCart();
let currentCategory = null;

function loadCart() {
    try {
        return JSON.parse(localStorage.getItem(CART_KEY)) || [];
    } catch {
        return [];
    }
}

function saveCart() {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function showToast(message) {
    const existingToast = document.querySelector(".toast-message");

    if (existingToast) {
        existingToast.remove();
    }

    const toast = document.createElement("div");
    toast.className = "toast-message";
    toast.innerText = message;

    document.body.appendChild(toast);

    setTimeout(() => toast.classList.add("show"), 100);

    setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => toast.remove(), 300);
    }, 2500);
}

function formatPrice(value) {
    return Number(value).toFixed(2).replace(".", ",");
}

function escapeHTML(value) {
    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

function renderProducts(category = null) {
    const container = document.getElementById("products-container");
    const categoryTitle = document.getElementById("category-title");

    if (!container || !categoryTitle) {
        return;
    }

    let filteredProducts = products;

    if (category) {
        filteredProducts = products.filter(product => product.category === category);
        categoryTitle.innerText = category;
    } else {
        categoryTitle.innerText = "Produtos";
    }

    if (filteredProducts.length === 0) {
        container.innerHTML = `
            <div class="empty-products">
                Nenhum produto encontrado.
            </div>
        `;
        return;
    }

    const productsHTML = filteredProducts.map(product => {
        const safeName = escapeHTML(product.name);
        const safeDescription = escapeHTML(product.description);
        const safeImage = escapeHTML(product.image);

        return `
            <div class="card reveal">
                <img src="${safeImage}" alt="${safeName}" loading="lazy">

                <div class="card-content">
                    <h4>${safeName}</h4>

                    <p class="description">
                        ${safeDescription}
                    </p>

                    <div class="price">
                        R$ ${formatPrice(product.price)}
                    </div>

                    ${product.available
                ? `
                            <button class="add-btn" onclick="addToCart('${safeName}')">
                                Adicionar
                            </button>
                        `
                : `
                            <button class="out-btn" disabled>
                                ESGOTADO
                            </button>
                        `
            }
                </div>
            </div>
        `;
    }).join("");

    container.innerHTML = productsHTML;
    revealOnScroll();
}

function filterProducts(category) {
    currentCategory = category;

    renderProducts(category);

    const productsContainer = document.getElementById("products-container");

    if (productsContainer) {
        productsContainer.scrollIntoView({
            behavior: "smooth"
        });
    }

    closeMobileMenu();
}

function toggleCart() {
    const cartElement = document.getElementById("cart");
    const overlay = document.getElementById("cart-overlay");

    if (!cartElement || !overlay) {
        return;
    }

    cartElement.classList.toggle("active");
    overlay.classList.toggle("active", cartElement.classList.contains("active"));
}

function openCart() {
    const cartElement = document.getElementById("cart");
    const overlay = document.getElementById("cart-overlay");

    if (!cartElement || !overlay) {
        return;
    }

    cartElement.classList.add("active");
    overlay.classList.add("active");
}

function closeCart() {
    const cartElement = document.getElementById("cart");
    const overlay = document.getElementById("cart-overlay");

    if (!cartElement || !overlay) {
        return;
    }

    cartElement.classList.remove("active");
    overlay.classList.remove("active");
}

function toggleMobileMenu() {
    const navMenu = document.getElementById("nav-menu");
    const menuBtn = document.getElementById("menu-btn");

    if (!navMenu || !menuBtn) {
        return;
    }

    navMenu.classList.toggle("active");
    menuBtn.innerText = navMenu.classList.contains("active") ? "✕" : "☰";
}

function closeMobileMenu() {
    const navMenu = document.getElementById("nav-menu");
    const menuBtn = document.getElementById("menu-btn");

    if (!navMenu || !menuBtn) {
        return;
    }

    navMenu.classList.remove("active");
    menuBtn.innerText = "☰";
}

function addCartItem(name, price) {
    const firstItem = cart.length === 0;
    const existingItem = cart.find(item => item.name === name);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            name,
            price,
            quantity: 1
        });
    }

    updateCart();
    showToast("Produto adicionado ao carrinho 🍺");

    if (firstItem) {
        openCart();
    }
}

function addToCart(productName) {
    const decodedName = productName
        .replaceAll("&amp;", "&")
        .replaceAll("&lt;", "<")
        .replaceAll("&gt;", ">")
        .replaceAll("&quot;", '"')
        .replaceAll("&#039;", "'");

    const product = products.find(item => item.name === decodedName);

    if (!product || !product.available) {
        showToast("Produto indisponível no momento.");
        return;
    }

    addCartItem(product.name, product.price);
}

function increaseQuantity(index) {
    if (!cart[index]) {
        return;
    }

    cart[index].quantity += 1;
    updateCart();
}

function decreaseQuantity(index) {
    if (!cart[index]) {
        return;
    }

    if (cart[index].quantity > 1) {
        cart[index].quantity -= 1;
    } else {
        cart.splice(index, 1);
    }

    updateCart();
}

function removeItem(index) {
    if (!cart[index]) {
        return;
    }

    cart.splice(index, 1);
    updateCart();
}

function clearCart() {
    cart = [];
    updateCart();
    localStorage.removeItem(CART_KEY);
}

function clearCheckoutFields() {
    const fields = ["nome", "endereco", "pagamento", "observacao"];

    fields.forEach(id => {
        const field = document.getElementById(id);

        if (field) {
            field.value = "";
        }
    });
}

function updateCart() {
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    const cartCount = document.getElementById("cart-count");

    if (!cartItems || !cartTotal || !cartCount) {
        return;
    }

    let total = 0;
    let totalItems = 0;

    if (cart.length === 0) {
        cartItems.innerHTML = `
            <p style="color:#999; text-align:center; margin-top:20px;">
                Seu carrinho está vazio.
            </p>
        `;
    } else {
        const itemsHTML = cart.map((item, index) => {
            const subtotal = item.price * item.quantity;

            total += subtotal;
            totalItems += item.quantity;

            return `
                <div class="cart-item">
                    <div>
                        <strong>${escapeHTML(item.name)}</strong>
                        <br>
                        <small>
                            R$ ${formatPrice(item.price)} x ${item.quantity}
                        </small>
                        <br>
                        <strong>
                            R$ ${formatPrice(subtotal)}
                        </strong>

                        <div class="quantity-box">
                            <button class="remove-btn" onclick="decreaseQuantity(${index})" aria-label="Diminuir quantidade">-</button>
                            <span>${item.quantity}</span>
                            <button class="remove-btn" onclick="increaseQuantity(${index})" aria-label="Aumentar quantidade">+</button>
                        </div>
                    </div>

                    <button class="remove-btn" onclick="removeItem(${index})" aria-label="Remover item">
                        ✕
                    </button>
                </div>
            `;
        }).join("");

        cartItems.innerHTML = itemsHTML;
    }

    cartTotal.innerText = formatPrice(total);
    cartCount.innerText = totalItems;

    saveCart();
}

function getStoreStatus(now = new Date()) {
    const day = now.getDay();
    const hour = now.getHours();

    const isWeekend = day === 5 || day === 6 || day === 0;
    const openHour = 18;
    const closeHour = 2;

    const isOpen = hour >= openHour || hour < closeHour;

    if (isOpen) {
        return {
            open: true,
            title: "Aberto agora",
            detail: "Faça seu pedido até 02:00."
        };
    }

    if (hour >= closeHour && hour < openHour) {
        return {
            open: false,
            title: "Fechado no momento",
            detail: `Abrimos hoje às ${openHour}:00.`
        };
    }

    return {
        open: false,
        title: "Fechado no momento",
        detail: isWeekend ? "Abrimos em breve." : `Abrimos às ${openHour}:00.`
    };
}

function updateStoreStatus() {
    const status = getStoreStatus();

    const statusHome = document.getElementById("status-text-home");
    const statusDetail = document.getElementById("status-detail-home");
    const homeBox = document.getElementById("status-box-home");

    if (!statusHome || !statusDetail || !homeBox) {
        return;
    }

    statusHome.innerText = status.title;
    statusDetail.innerText = status.detail;

    homeBox.classList.toggle("closed", !status.open);
}

function validateOrder() {
    if (cart.length <= 0) {
        showToast("Seu carrinho está vazio.");
        return false;
    }

    const nome = document.getElementById("nome");
    const endereco = document.getElementById("endereco");
    const pagamento = document.getElementById("pagamento");

    if (!nome || nome.value.trim() === "") {
        showToast("Informe seu nome.");
        nome?.focus();
        return false;
    }

    if (!endereco || endereco.value.trim() === "") {
        showToast("Informe seu endereço.");
        endereco?.focus();
        return false;
    }

    if (!pagamento || pagamento.value === "") {
        showToast("Selecione a forma de pagamento.");
        pagamento?.focus();
        return false;
    }

    return true;
}

function createOrderMessage(encoded = true) {
    let total = 0;

    const nome = document.getElementById("nome").value.trim();
    const endereco = document.getElementById("endereco").value.trim();
    const pagamento = document.getElementById("pagamento").value;
    const observacao = document.getElementById("observacao").value.trim();

    let message = `🍺 *NOVO PEDIDO - ADEGA DO VIZINHO*\n\n`;

    message += `👤 *Nome:* ${nome}\n`;
    message += `📍 *Endereço:* ${endereco}\n`;
    message += `💳 *Pagamento:* ${pagamento}\n\n`;
    message += `🛒 *Itens do pedido:*\n`;

    cart.forEach(item => {
        const subtotal = item.price * item.quantity;

        total += subtotal;

        message += `- ${item.quantity}x ${item.name} | R$ ${formatPrice(subtotal)}\n`;
    });

    message += `\n💰 *Total:* R$ ${formatPrice(total)}\n`;

    if (observacao !== "") {
        message += `\n📝 *Observação:* ${observacao}\n`;
    }

    return encoded ? encodeURIComponent(message) : message;
}

function sendOrder() {
    if (!validateOrder()) {
        return;
    }

    const message = createOrderMessage(true);
    const url = `https://wa.me/${WHATSAPP_PHONE}?text=${message}`;

    window.open(url, "_blank");

    clearCart();
    clearCheckoutFields();
    closeCart();

    showToast("Pedido enviado com sucesso 🍺");
}

function revealOnScroll() {
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach(item => {
        const windowHeight = window.innerHeight;
        const elementTop = item.getBoundingClientRect().top;
        const elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
            item.classList.add("active");
        }
    });
}

document.addEventListener("click", event => {
    const navMenu = document.getElementById("nav-menu");
    const menuBtn = document.getElementById("menu-btn");

    if (!navMenu || !menuBtn) {
        return;
    }

    const clickedInsideMenu = navMenu.contains(event.target);
    const clickedMenuButton = menuBtn.contains(event.target);

    if (!clickedInsideMenu && !clickedMenuButton) {
        closeMobileMenu();
    }
});

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("resize", revealOnScroll);

renderProducts();
updateCart();
updateStoreStatus();
revealOnScroll();

setInterval(updateStoreStatus, 60000);
