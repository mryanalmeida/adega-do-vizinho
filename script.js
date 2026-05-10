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
        image: "https://images.unsplash.com/photo-1622543925917-763c34d1a86e",
        available: true
    },
    {
        category: "Gelo de Sabor",
        name: "Gelo de Morango",
        description: "Gelo saborizado de morango para drinks.",
        price: 8,
        image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd",
        available: true
    },
    {
        category: "Cerveja",
        name: "Heineken Long Neck",
        description: "Long neck Heineken extremamente gelada.",
        price: 12,
        image: "https://images.unsplash.com/photo-1608270586620-248524c67de9",
        available: false
    },
    {
        category: "Combos",
        name: "Combo Whisky + Energético",
        description: "Combo completo com whisky, energético e gelo.",
        price: 120,
        image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b",
        available: true
    }
];

let cart = JSON.parse(localStorage.getItem("adega-cart")) || [];
let currentCategory = null;

function saveCart() {
    localStorage.setItem("adega-cart", JSON.stringify(cart));
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

    setTimeout(() => {
        toast.classList.add("show");
    }, 100);

    setTimeout(() => {
        toast.classList.remove("show");

        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 2500);
}

function formatPrice(value) {
    return value.toFixed(2).replace(".", ",");
}

function renderProducts(category = null, search = "") {
    const container = document.getElementById("products-container");
    const categoryTitle = document.getElementById("category-title");

    container.innerHTML = "";

    let filteredProducts = products;

    if (category) {
        filteredProducts = products.filter(product => product.category === category);
        categoryTitle.innerText = category;
    } else {
        categoryTitle.innerText = "Produtos";
    }

    if (search.trim() !== "") {
        const term = search.toLowerCase();

        filteredProducts = products.filter(product =>
            product.name.toLowerCase().includes(term) ||
            product.description.toLowerCase().includes(term) ||
            product.category.toLowerCase().includes(term)
        );

        categoryTitle.innerText = "Resultado da busca";
    }

    if (filteredProducts.length === 0) {
        container.innerHTML = `
            <div class="empty-products">
                Nenhum produto encontrado.
            </div>
        `;
        return;
    }

    filteredProducts.forEach(product => {
        container.innerHTML += `
            <div class="card reveal">
                <img src="${product.image}" alt="${product.name}">

                <div class="card-content">
                    <h4>${product.name}</h4>

                    <p class="description">
                        ${product.description}
                    </p>

                    <div class="price">
                        R$ ${formatPrice(product.price)}
                    </div>

                    ${product.available
                ? `
                            <button class="add-btn" onclick="addToCart('${product.name}')">
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
    });

    revealOnScroll();
}

function filterProducts(category) {
    currentCategory = category;

    const searchInput = document.getElementById("search-input");

    if (searchInput) {
        searchInput.value = "";
    }

    renderProducts(category);

    document.getElementById("products-container").scrollIntoView({
        behavior: "smooth"
    });
}

function searchProducts() {
    const search = document.getElementById("search-input").value;

    renderProducts(currentCategory, search);

    if (search.trim() !== "") {
        document.getElementById("products-container").scrollIntoView({
            behavior: "smooth"
        });
    }
}

function toggleCart() {
    document.getElementById("cart").classList.toggle("active");
}

function openCart() {
    document.getElementById("cart").classList.add("active");
}

function closeCart() {
    document.getElementById("cart").classList.remove("active");
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
    const product = products.find(item => item.name === productName);

    if (!product || !product.available) {
        return;
    }

    addCartItem(product.name, product.price);
}

function increaseQuantity(index) {
    cart[index].quantity += 1;
    updateCart();
}

function decreaseQuantity(index) {
    if (cart[index].quantity > 1) {
        cart[index].quantity -= 1;
    } else {
        cart.splice(index, 1);
    }

    updateCart();
}

function removeItem(index) {
    cart.splice(index, 1);
    updateCart();
}

function clearCart() {
    cart = [];

    updateCart();

    localStorage.removeItem("adega-cart");
}

function clearCheckoutFields() {
    document.getElementById("nome").value = "";
    document.getElementById("endereco").value = "";
    document.getElementById("pagamento").value = "";
    document.getElementById("observacao").value = "";
}

function updateCart() {
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    const cartCount = document.getElementById("cart-count");

    cartItems.innerHTML = "";

    let total = 0;
    let totalItems = 0;

    if (cart.length === 0) {
        cartItems.innerHTML = `
            <p style="
                color:#999;
                text-align:center;
                margin-top:20px;
            ">
                Seu carrinho está vazio.
            </p>
        `;
    }

    cart.forEach((item, index) => {
        const subtotal = item.price * item.quantity;

        total += subtotal;
        totalItems += item.quantity;

        cartItems.innerHTML += `
            <div class="cart-item">
                <div>
                    <strong>${item.name}</strong>
                    <br>
                    <small>
                        R$ ${formatPrice(item.price)} x ${item.quantity}
                    </small>
                    <br>
                    <strong>
                        R$ ${formatPrice(subtotal)}
                    </strong>

                    <div style="
                        margin-top:10px;
                        display:flex;
                        gap:8px;
                        align-items:center;
                    ">
                        <button class="remove-btn" onclick="decreaseQuantity(${index})">-</button>
                        <span>${item.quantity}</span>
                        <button class="remove-btn" onclick="increaseQuantity(${index})">+</button>
                    </div>
                </div>

                <button class="remove-btn" onclick="removeItem(${index})">
                    ✕
                </button>
            </div>
        `;
    });

    cartTotal.innerText = formatPrice(total);
    cartCount.innerText = totalItems;

    saveCart();
}

function updateStoreStatus() {
    const now = new Date();
    const hour = now.getHours();

    const isOpen = hour >= 18 || hour < 2;

    const statusHome = document.getElementById("status-text-home");
    const homeBox = document.getElementById("status-box-home");

    if (!statusHome || !homeBox) {
        return;
    }

    if (isOpen) {
        statusHome.innerText = "Aberto agora";
        homeBox.classList.remove("closed");
    } else {
        statusHome.innerText = "Fechado no momento";
        homeBox.classList.add("closed");
    }
}

function validateOrder() {
    if (cart.length <= 0) {
        showToast("Seu carrinho está vazio.");
        return false;
    }

    const nome = document.getElementById("nome");
    const endereco = document.getElementById("endereco");
    const pagamento = document.getElementById("pagamento");

    if (nome.value.trim() === "") {
        showToast("Informe seu nome.");
        nome.focus();
        return false;
    }

    if (endereco.value.trim() === "") {
        showToast("Informe seu endereço.");
        endereco.focus();
        return false;
    }

    if (pagamento.value === "") {
        showToast("Selecione a forma de pagamento.");
        pagamento.focus();
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

    const phone = "5511917742509";
    const message = createOrderMessage(true);
    const url = `https://wa.me/${phone}?text=${message}`;

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

window.addEventListener("scroll", revealOnScroll);

renderProducts();
updateCart();
updateStoreStatus();
revealOnScroll();