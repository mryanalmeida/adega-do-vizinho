// ==========================================
// PRODUTOS DA LOJA
// ==========================================
// Cada objeto representa um produto exibido no catálogo.

const products = [
    // ==========================================
    // ============   WHISKY   ==================
    // ==========================================

    {
        category: "Copão",
        name: "Copão de Red Label Premium",
        description: "Copão de 700ml com Whisky + Red Bull 250ml + Gelo de coco.",
        topics: [
            "Mais sabores de gelo disponíveis",
            "Consulte os sabores disponíveis de energetico"
        ],
        price: 35,
        image: "img/Produtos/red-premium.png",
        available: true
    },

    {
        category: "Copão",
        name: "Copão de Red Label Básico",
        description: "Copão de 700ml com Whisky + Energético Vibe + Gelo de coco.",
        topics: [
            "Mais sabores de gelo disponíveis",
            "Consulte os sabores disponíveis de energetico"
        ],
        price: 28,
        image: "img/Produtos/red-basico.png",
        available: true
    },

    {
        category: "Copão",
        name: "Copão de Jack Daniels Premium",
        description: "Copão de 700ml com Whisky + Red Bull 250ml + Gelo de coco.",
        topics: [
            "Mais sabores de gelo disponíveis",
            "Consulte os sabores disponíveis de energetico",
            "Consulte os sabores disponíveis do whisky"
        ],
        price: 40,
        image: "img/Produtos/jack-premium.png",
        available: true
    },

    {
        category: "Copão",
        name: "Copão de Jack Daniels Básico",
        description: "Copão de 700ml com Whisky + Energético Vibe + Gelo de coco.",
        topics: [
            "Mais sabores de gelo disponíveis",
            "Consulte os sabores disponíveis de energetico",
            "Consulte os sabores disponíveis do whisky"
        ],
        price: 38,
        image: "img/Produtos/jack-basico.png",
        available: true
    },

    // ==========================================
    // =============    GIN    ==================
    // ==========================================

    {
        category: "Copão",
        name: "Copão de Eternity",
        description: "Copão de 700ml com Gin + Baly + Gelo.",
        topics: [
            "Consulte os sabores disponíveis de Gin",
            "Consulte os sabores disponíveis de energetico",
            "Consulte os sabores disponiveis do gelo"
        ],
        price: 15,
        //variants: [
        //    {
        //        name: "250ml",
        //        price: 10
        //    },
        //    {
        //       name: "355ml",
        //        price: 14
        //    },
        //    {
        //        name: "473ml",
        //        price: 18
        //    },
        //],
        image: "img/Produtos/eternity.png",
        available: true
    },


    // ==========================================
    // =============    GELOS    ================
    // ==========================================

    {
        category: "Gelo de Sabor",
        name: "Gelo de coco",
        description: "Gelo de coco 200ml",
        topics: [
            "Consulte os sabores disponiveis",
        ],
        price: 1,
        //variants: [
        //    {
        //        name: "250ml",
        //        price: 10
        //    },
        //    {
        //       name: "355ml",
        //        price: 14
        //    },
        //    {
        //        name: "473ml",
        //        price: 18
        //    },
        //],
        image: "img/Produtos/gelos.png",
        available: true
    },

    // ==========================================
    // ============   CERVEJA    ================
    // ==========================================

    {
        category: "Cerveja",
        name: "Corona",
        description: "Cerveja corona Long Neck 330ml",
        topics: [
            "",
            ""
        ],
        price: 10,
        //variants: [
        //    {
        //        name: "350ml (LATA)",
        //        price: 0
        //    },
        //    {
        //       name: "330ml (LONG NECK)",
        //        price: 0
        //    },
        //    {
        //        name: "600ml (Garrafa)",
        //        price: 0
        //    },
        //],
        image: "img/Produtos/corona.png",
        available: true
    },

    // ==========================================
    // ============     COMBOS    ===============
    // ==========================================


    

    // ==========================================
    // ==========    ENÉRGETICO    ==============
    // ==========================================

    {
        category: "Energético",
        name: "Red Bull",
        description: "Energético Red Bull 250ml.",
        topics: [
            "Consulte os sabores disponiveis",
            //"Consulte os sabores disponiveis"
        ],
        price: 11,

        //variants: [
        //    {
        //        name: "250ml",
        //        price: 10
        //    },
        //    {
        //       name: "355ml",
        //        price: 14
        //    },
        //    {
        //        name: "473ml",
        //        price: 18
        //    },
        //],

        image: "img/Produtos/redbull.png",
        available: true
    },

    {
        category: "Energético",
        name: "Baly",
        description: "Energético Baly 2L.",
        topics: [
            "Consulte os sabores disponiveis",
            //"Consulte os sabores disponiveis"
        ],
        price: 10,
        //variants: [
        //    {
        //        name: "250ml",
        //        price: 10
        //    },
        //    {
        //       name: "473ml",
        //        price: 14
        //    },
        //    {
        //        name: "2L",
        //        price: 18
        //    },
        //],
        image: "img/Produtos/baly.png",
        available: true
    },

    {
        category: "Energético",
        name: "V!be",
        description: "Energético V!be 2L.",
        topics: [
            "Somente o sabor tradicional",
            //"Consulte os sabores disponiveis"
        ],
        price: 8,
        //variants: [
        //    {
        //       name: "473ml",
        //        price: 14
        //    },
        //    {
        //        name: "2L",
        //        price: 18
        //    },
        //],
        image: "img/Produtos/v!be.png",
        available: true
    },

    {
        category: "Energético",
        name: "Monster",
        description: "Energético Monster 473ml.",
        topics: [
            "Somente o sabor tradicional",
            //"Consulte os sabores disponiveis"
        ],
        price: 11,
        //variants: [
        //    {
        //       name: "269ml",
        //        price: 9
        //    },
        //    {
        //        name: "473L",
        //        price: 11
        //    },
        //],
        image: "img/Produtos/monster.png",
        available: true
    }

];


// ==========================================
// CONFIGURAÇÕES GERAIS
// ==========================================

const CART_KEY = "adega-cart";
const WHATSAPP_PHONE = "5511917742509";

// Configure aqui o horário de funcionamento.
// day: 0 = domingo, 1 = segunda, 2 = terça, 3 = quarta, 4 = quinta, 5 = sexta, 6 = sábado
const OPENING_HOURS = [
    { day: 0, open: "00:00", close: "00:01" }, // DOMINGO
    { day: 1, open: "00:00", close: "00:01" }, // SEGUNDA-FEIRA
    { day: 2, open: "00:00", close: "00:01" }, // TERÇA-FEIRA
    { day: 3, open: "00:00", close: "00:01" }, // QUARTA-FEIRA
    { day: 4, open: "00:00", close: "00:01" }, // QUINTA-FEIRA
    { day: 5, open: "00:00", close: "00:01" }, // SEXTA-FEIRA
    { day: 6, open: "00:00", close: "00:01" }  // SÁBADO
];


// ==========================================
// VARIÁVEIS PRINCIPAIS
// ==========================================

let cart = loadCart();
let cartOpenedAfterFirstAdd = false;

// ==========================================
// FUNÇÕES AUXILIARES
// ==========================================

function getElement(id) {
    return document.getElementById(id);
}

function loadCart() {
    try {
        const savedCart = JSON.parse(localStorage.getItem(CART_KEY));

        if (!Array.isArray(savedCart)) {
            return [];
        }

        // Filtra itens inválidos para evitar erro no carrinho.
        return savedCart.filter(item =>
            item &&
            typeof item.name === "string" &&
            Number(item.price) >= 0 &&
            Number(item.quantity) > 0
        );
    } catch {
        return [];
    }
}

function saveCart() {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function formatPrice(value) {
    return Number(value || 0).toFixed(2).replace(".", ",");
}

function getProductVariants(product) {
    return Array.isArray(product.variants)
        ? product.variants.filter(variant =>
            variant &&
            typeof variant.name === "string" &&
            Number(variant.price) >= 0
        )
        : [];
}

function getProductDisplayPrice(product) {
    const variants = getProductVariants(product);

    if (variants.length > 0) {
        return `A partir de R$ ${formatPrice(variants[0].price)}`;
    }

    return `R$ ${formatPrice(product.price)}`;
}

function escapeHTML(value) {
    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

function showToast(message) {
    const oldToast = document.querySelector(".toast-message");

    if (oldToast) {
        oldToast.remove();
    }

    const toast = document.createElement("div");
    toast.className = "toast-message";
    toast.innerText = message;
    document.body.appendChild(toast);

    setTimeout(() => toast.classList.add("show"), 50);

    setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => toast.remove(), 300);
    }, 2500);
}


// ==========================================
// MENU MOBILE
// ==========================================
// Essas funções corrigem o botão hambúrguer do celular.

function toggleMobileMenu() {
    const navMenu = getElement("nav-menu");
    const menuBtn = getElement("menu-btn");

    if (!navMenu || !menuBtn) {
        return;
    }

    const isOpen = navMenu.classList.toggle("active");

    menuBtn.innerText = isOpen ? "✕" : "☰";
    menuBtn.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
    menuBtn.setAttribute("aria-expanded", String(isOpen));
}

function closeMobileMenu() {
    const navMenu = getElement("nav-menu");
    const menuBtn = getElement("menu-btn");

    if (!navMenu || !menuBtn) {
        return;
    }

    navMenu.classList.remove("active");
    menuBtn.innerText = "☰";
    menuBtn.setAttribute("aria-label", "Abrir menu");
    menuBtn.setAttribute("aria-expanded", "false");
}


// ==========================================
// STATUS ABERTO / FECHADO
// ==========================================

function timeToMinutes(time) {
    const [hours, minutes] = time.split(":").map(Number);
    return hours * 60 + minutes;
}

function getScheduleForDay(day) {
    return OPENING_HOURS.find(item => item.day === day);
}

function createStatus(open, text, detail) {
    return { open, text, detail };
}

function getStoreStatus() {
    const now = new Date();
    const currentDay = now.getDay();
    const currentMinutes = now.getHours() * 60 + now.getMinutes();

    const todaySchedule = getScheduleForDay(currentDay);
    const previousDay = currentDay === 0 ? 6 : currentDay - 1;
    const previousSchedule = getScheduleForDay(previousDay);

    // Verifica primeiro se ainda estamos dentro do horário do dia anterior,
    // exemplo: domingo 11:00 até segunda 02:00.
    if (previousSchedule) {
        const previousOpen = timeToMinutes(previousSchedule.open);
        const previousClose = timeToMinutes(previousSchedule.close);
        const previousGoesOvernight = previousClose <= previousOpen;

        if (previousGoesOvernight && currentMinutes < previousClose) {
            return createStatus(true, "Estamos abertos", `Atendimento até ${previousSchedule.close}`);
        }
    }

    if (!todaySchedule) {
        return createStatus(false, "Estamos fechados", "Confira nosso horário pelo WhatsApp");
    }

    const openMinutes = timeToMinutes(todaySchedule.open);
    const closeMinutes = timeToMinutes(todaySchedule.close);
    const goesOvernight = closeMinutes <= openMinutes;

    if (goesOvernight) {
        const isOpen = currentMinutes >= openMinutes;
        return createStatus(
            isOpen,
            isOpen ? "Estamos abertos" : "Estamos fechados",
            isOpen ? `Atendimento até ${todaySchedule.close}` : `Abrimos às ${todaySchedule.open}`
        );
    }

    const isOpen = currentMinutes >= openMinutes && currentMinutes < closeMinutes;

    return createStatus(
        isOpen,
        isOpen ? "Estamos abertos" : "Estamos fechados",
        isOpen ? `Atendimento até ${todaySchedule.close}` : `Abrimos às ${todaySchedule.open}`
    );
}

function updateStoreStatus() {
    const statusBox = getElement("status-box-home");
    const statusText = getElement("status-text-home");
    const statusDetail = getElement("status-detail-home");

    if (!statusBox || !statusText || !statusDetail) {
        return;
    }

    const status = getStoreStatus();

    statusText.innerText = status.text;
    statusDetail.innerText = status.detail;

    statusBox.classList.toggle("closed", !status.open);
}


// ==========================================
// PRODUTOS
// ==========================================

function renderProducts(category = null) {
    const container = getElement("products-container");
    const categoryTitle = getElement("category-title");

    if (!container || !categoryTitle) {
        return;
    }

    const filteredProducts = category
        ? products.filter(product => product.category === category)
        : products;

    categoryTitle.innerText = category || "Produtos";

    if (filteredProducts.length === 0) {
        container.innerHTML = `
            <div class="empty-products">
                Nenhum produto encontrado nessa categoria.
            </div>
        `;
        revealOnScroll();
        return;
    }

    container.innerHTML = filteredProducts.map(product => {
        const productIndex = products.indexOf(product);
        const safeName = escapeHTML(product.name);
        const safeDescription = escapeHTML(product.description || "");
        const safeImage = escapeHTML(product.image || "");
        const safeTopics = Array.isArray(product.topics) ? product.topics : [];
        const variants = getProductVariants(product);
        const hasVariants = variants.length > 0;

        const topicsHTML = safeTopics.length > 0
            ? `
                <ul class="product-topics">
                    ${safeTopics.map(topic => `<li>${escapeHTML(topic)}</li>`).join("")}
                </ul>
            `
            : "";

        const variantsHTML = hasVariants
            ? `
                <div class="variant-box">
                    <label for="product-variant-${productIndex}">Escolha uma opção:</label>

                    <select class="variant-select" id="product-variant-${productIndex}">
                        ${variants.map((variant, index) => `
                            <option value="${index}">
                                ${escapeHTML(variant.name)} - R$ ${formatPrice(variant.price)}
                            </option>
                        `).join("")}
                    </select>
                </div>
            `
            : "";

        const isAvailable = product.available !== false;

        return `
            <div class="card reveal">
                <img src="${safeImage}" alt="${safeName}" loading="lazy" onerror="this.src='img/Logo.jpeg'">

                <div class="card-content">
                    <h4>${safeName}</h4>
                    <p class="description">${safeDescription}</p>
                    ${topicsHTML}
                    ${variantsHTML}

                    <div class="price">${getProductDisplayPrice(product)}</div>

                    ${isAvailable ? `
                        <button type="button" class="add-btn" onclick="addToCart(${productIndex})">
                            Adicionar
                        </button>
                    ` : `
                        <button type="button" class="out-btn" disabled>
                            Indisponível
                        </button>
                    `}
                </div>
            </div>
        `;
    }).join("");

    revealOnScroll();
}

function filterProducts(category) {
    renderProducts(category);

    const productsContainer = getElement("products-container");

    if (productsContainer) {
        productsContainer.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    closeMobileMenu();
}


// ==========================================
// CARRINHO
// ==========================================

function openCart() {
    const cartElement = getElement("cart");
    const overlay = getElement("cart-overlay");

    if (!cartElement || !overlay) {
        return;
    }

    updateCart();
    cartElement.classList.add("active");
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeCart() {
    const cartElement = getElement("cart");
    const overlay = getElement("cart-overlay");

    if (!cartElement || !overlay) {
        return;
    }

    cartElement.classList.remove("active");
    overlay.classList.remove("active");
    document.body.style.overflow = "";
}

function toggleCart() {
    const cartElement = getElement("cart");

    if (!cartElement) {
        return;
    }

    if (cartElement.classList.contains("active")) {
        closeCart();
    } else {
        openCart();
    }
}

function addToCart(productIndex) {
    const product = products[Number(productIndex)];

    if (!product || product.available === false) {
        showToast("Produto indisponível.");
        return;
    }

    const variants = getProductVariants(product);
    const variantSelect = getElement(`product-variant-${productIndex}`);
    const selectedVariantIndex = variantSelect ? Number(variantSelect.value) : 0;
    const selectedVariant = variants[selectedVariantIndex] || null;

    const itemName = selectedVariant
        ? `${product.name} - ${selectedVariant.name}`
        : product.name;

    const itemPrice = selectedVariant
        ? Number(selectedVariant.price)
        : Number(product.price);

    const cartWasEmpty = cart.length === 0;

    const existingItem = cart.find(item => item.name === itemName);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            name: itemName,
            baseName: product.name,
            variant: selectedVariant ? selectedVariant.name : "",
            price: itemPrice,
            quantity: 1
        });
    }

    updateCart();
    showToast("Produto adicionado 🍺");

    if (cartWasEmpty) {
        openCart();
    }
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

function clearCart(showMessage = false) {
    cart = [];
    localStorage.removeItem(CART_KEY);
    updateCart();

    if (showMessage) {
        showToast("Carrinho limpo.");
    }
}

function updateCartCount() {
    const cartCount = getElement("cart-count");

    if (!cartCount) {
        return;
    }

    const totalItems = cart.reduce((total, item) => total + Number(item.quantity || 0), 0);
    cartCount.innerText = totalItems;
}

function updateCart() {
    const cartItems = getElement("cart-items");
    const cartTotal = getElement("cart-total");

    if (!cartItems || !cartTotal) {
        return;
    }

    let total = 0;

    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-products">
                Seu carrinho está vazio.
            </div>
        `;
    } else {
        cartItems.innerHTML = cart.map((item, index) => {
            const subtotal = Number(item.price) * Number(item.quantity);
            total += subtotal;

            return `
                <div class="cart-item">
                    <div>
                        <strong>${escapeHTML(item.name)}</strong>
                        <small>R$ ${formatPrice(item.price)} cada</small>
                        <p>Subtotal: R$ ${formatPrice(subtotal)}</p>

                        <div class="quantity-box">
                            <button type="button" onclick="decreaseQuantity(${index})" aria-label="Diminuir quantidade">-</button>
                            <span>${item.quantity}</span>
                            <button type="button" onclick="increaseQuantity(${index})" aria-label="Aumentar quantidade">+</button>
                        </div>
                    </div>

                    <button class="remove-btn" type="button" onclick="removeItem(${index})" aria-label="Remover item">
                        ✕
                    </button>
                </div>
            `;
        }).join("");
    }

    cartTotal.innerText = formatPrice(total);
    updateCartCount();
    saveCart();
}


// ==========================================
// PEDIDO NO WHATSAPP
// ==========================================

function getCheckoutData() {
    return {
        nome: getElement("nome")?.value.trim() || "",
        endereco: getElement("endereco")?.value.trim() || "",
        pagamento: getElement("pagamento")?.value.trim() || "",
        observacao: getElement("observacao")?.value.trim() || ""
    };
}

function validateOrder() {
    const data = getCheckoutData();

    if (cart.length <= 0) {
        showToast("Carrinho vazio.");
        openCart();
        return false;
    }

    if (!data.nome) {
        showToast("Digite seu nome.");
        getElement("nome")?.focus();
        return false;
    }

    if (!data.endereco) {
        showToast("Digite seu endereço.");
        getElement("endereco")?.focus();
        return false;
    }

    if (!data.pagamento) {
        showToast("Escolha a forma de pagamento.");
        getElement("pagamento")?.focus();
        return false;
    }

    return true;
}

function createOrderMessage() {
    const data = getCheckoutData();
    let total = 0;

    let message = "🍺 *NOVO PEDIDO - ADEGA DO VIZINHO*\n\n";

    message += "🛒 *Itens do pedido:*\n";

    cart.forEach(item => {
        const subtotal = Number(item.price) * Number(item.quantity);
        total += subtotal;

        message += `- ${item.quantity}x ${item.name} | R$ ${formatPrice(subtotal)}\n`;
    });

    message += `\n💰 *Total:* R$ ${formatPrice(total)}\n\n`;
    message += `👤 *Nome:* ${data.nome}\n`;
    message += `📍 *Endereço:* ${data.endereco}\n`;
    message += `💳 *Pagamento:* ${data.pagamento}\n`;

    if (data.observacao) {
        message += `📝 *Observação:* ${data.observacao}\n`;
    }

    return encodeURIComponent(message);
}

function clearCheckoutFields() {
    const nome = getElement("nome");
    const endereco = getElement("endereco");
    const pagamento = getElement("pagamento");
    const observacao = getElement("observacao");

    if (nome) nome.value = "";
    if (endereco) endereco.value = "";
    if (pagamento) pagamento.value = "";
    if (observacao) observacao.value = "";
}

function sendOrder() {
    if (!validateOrder()) {
        return;
    }

    const message = createOrderMessage();
    const url = `https://wa.me/${WHATSAPP_PHONE}?text=${message}`;

    window.open(url, "_blank", "noopener,noreferrer");

    clearCart();
    clearCheckoutFields();
    closeCart();

    showToast("Pedido enviado 🍺");
}


// ==========================================
// ANIMAÇÃO AO ROLAR
// ==========================================

function revealOnScroll() {
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach((item, index) => {
        const windowHeight = window.innerHeight;
        const elementTop = item.getBoundingClientRect().top;

        // Cria um efeito em sequência, deixando os elementos entrarem de forma mais premium.
        item.style.setProperty("--reveal-delay", `${Math.min(index * 55, 330)}ms`);

        if (elementTop < windowHeight - 100) {
            item.classList.add("active");
        }
    });
}


// ==========================================
// EVENTOS GLOBAIS
// ==========================================

window.addEventListener("scroll", revealOnScroll);

window.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        closeCart();
        closeMobileMenu();
    }
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 1100) {
        closeMobileMenu();
    }
});

// Fecha o menu mobile quando clicar em algum link do menu.
document.querySelectorAll("#nav-menu a").forEach(link => {
    link.addEventListener("click", closeMobileMenu);
});

// Inicia o site depois que o HTML estiver carregado.
document.addEventListener("DOMContentLoaded", () => {
    renderProducts();
    updateCart();
    updateStoreStatus();
    updateFooterYear();
    revealOnScroll();
});

// Atualiza o status aberto/fechado a cada minuto.
setInterval(updateStoreStatus, 60000);


// ==========================================
// ANO AUTOMÁTICO DO FOOTER
// ==========================================

function updateFooterYear() {
    const footerYear = getElement("footer-year");

    if (footerYear) {
        footerYear.innerText = new Date().getFullYear();
    }
}
