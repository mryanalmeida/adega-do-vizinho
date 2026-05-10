// ==========================================
// ARRAY DE PRODUTOS
// ==========================================
// Aqui ficam todos os produtos da loja.
// Cada objeto representa um produto do site.

const products = [
    {
        category: "Copão", // Categoria do produto
        name: "Copão de Red Label Premium", // Nome
        description: "Copão de 700ml com Whisky + Red Bull 250ml + Gelo de coco.", // Descrição
        price: 30, // Preço
        image: "img/Produtos/red-premium.png", // Caminho da imagem
        available: true // Se está disponível para venda
    }
];


// ==========================================
// CONFIGURAÇÕES GERAIS
// ==========================================

// Nome usado para salvar o carrinho no navegador
const CART_KEY = "adega-cart";

// Número do WhatsApp que recebe os pedidos
const WHATSAPP_PHONE = "5511917742509";


// ==========================================
// VARIÁVEIS PRINCIPAIS
// ==========================================

// Carrega o carrinho salvo anteriormente
let cart = loadCart();

// Guarda a categoria atual selecionada
let currentCategory = null;


// ==========================================
// CARREGAR CARRINHO
// ==========================================
// Pega os dados salvos no localStorage do navegador

function loadCart() {

    try {

        // Tenta pegar o carrinho salvo
        return JSON.parse(localStorage.getItem(CART_KEY)) || [];

    } catch {

        // Se der erro retorna carrinho vazio
        return [];
    }
}


// ==========================================
// SALVAR CARRINHO
// ==========================================
// Salva o carrinho atual no navegador

function saveCart() {

    localStorage.setItem(CART_KEY, JSON.stringify(cart));
}


// ==========================================
// TOAST / MENSAGEM PEQUENA
// ==========================================
// Mostra mensagens rápidas na tela

function showToast(message) {

    // Procura toast antigo
    const existingToast = document.querySelector(".toast-message");

    // Remove toast antigo
    if (existingToast) {
        existingToast.remove();
    }

    // Cria nova div
    const toast = document.createElement("div");

    // Adiciona classe CSS
    toast.className = "toast-message";

    // Texto da mensagem
    toast.innerText = message;

    // Coloca no body
    document.body.appendChild(toast);

    // Faz animação aparecer
    setTimeout(() => toast.classList.add("show"), 100);

    // Remove depois de 2.5 segundos
    setTimeout(() => {

        toast.classList.remove("show");

        setTimeout(() => toast.remove(), 300);

    }, 2500);
}


// ==========================================
// FORMATAR PREÇO
// ==========================================
// Converte número para formato brasileiro

function formatPrice(value) {

    return Number(value)
        .toFixed(2)
        .replace(".", ",");
}


// ==========================================
// PROTEGER HTML
// ==========================================
// Evita códigos maliciosos no HTML

function escapeHTML(value) {

    return String(value)

        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}


// ==========================================
// MOSTRAR PRODUTOS NA TELA
// ==========================================

function renderProducts(category = null) {

    // Container dos produtos
    const container = document.getElementById("products-container");

    // Título da categoria
    const categoryTitle = document.getElementById("category-title");

    // Se não existir para execução
    if (!container || !categoryTitle) {
        return;
    }

    // Começa com todos os produtos
    let filteredProducts = products;

    // Se escolheu categoria filtra
    if (category) {

        filteredProducts = products.filter(
            product => product.category === category
        );

        categoryTitle.innerText = category;

    } else {

        categoryTitle.innerText = "Produtos";
    }

    // Se não tiver produto
    if (filteredProducts.length === 0) {

        container.innerHTML = `
            <div class="empty-products">
                Nenhum produto encontrado.
            </div>
        `;

        return;
    }

    // Cria HTML dos produtos
    const productsHTML = filteredProducts.map(product => {

        // Proteção HTML
        const safeName = escapeHTML(product.name);

        return `
            <div class="card reveal">

                <img src="${product.image}">

                <div class="card-content">

                    <h4>${safeName}</h4>

                    <div class="price">
                        R$ ${formatPrice(product.price)}
                    </div>

                    <button 
                        class="add-btn"
                        onclick="addToCart('${safeName}')"
                    >
                        Adicionar
                    </button>

                </div>
            </div>
        `;

    }).join("");

    // Coloca HTML na tela
    container.innerHTML = productsHTML;

    // Ativa animação
    revealOnScroll();
}


// ==========================================
// FILTRAR PRODUTOS
// ==========================================

function filterProducts(category) {

    // Salva categoria atual
    currentCategory = category;

    // Renderiza produtos filtrados
    renderProducts(category);

    // Pega container
    const productsContainer =
        document.getElementById("products-container");

    // Faz rolagem suave
    if (productsContainer) {

        productsContainer.scrollIntoView({
            behavior: "smooth"
        });
    }

    // Fecha menu mobile
    closeMobileMenu();
}


// ==========================================
// ABRIR/FECHAR CARRINHO
// ==========================================

function toggleCart() {

    const cartElement = document.getElementById("cart");

    const overlay = document.getElementById("cart-overlay");

    // Alterna classe active
    cartElement.classList.toggle("active");

    overlay.classList.toggle(
        "active",
        cartElement.classList.contains("active")
    );
}


// ==========================================
// ADICIONAR PRODUTO AO CARRINHO
// ==========================================

function addToCart(productName) {

    // Procura produto pelo nome
    const product = products.find(
        item => item.name === productName
    );

    // Se não existir
    if (!product) {

        showToast("Produto indisponível.");

        return;
    }

    // Procura se já existe no carrinho
    const existingItem = cart.find(
        item => item.name === product.name
    );

    // Se já existir aumenta quantidade
    if (existingItem) {

        existingItem.quantity += 1;

    } else {

        // Se não existir adiciona novo item
        cart.push({
            name: product.name,
            price: product.price,
            quantity: 1
        });
    }

    // Atualiza carrinho
    updateCart();

    // Mostra mensagem
    showToast("Produto adicionado 🍺");
}


// ==========================================
// AUMENTAR QUANTIDADE
// ==========================================

function increaseQuantity(index) {

    // Soma +1
    cart[index].quantity += 1;

    // Atualiza carrinho
    updateCart();
}


// ==========================================
// DIMINUIR QUANTIDADE
// ==========================================

function decreaseQuantity(index) {

    // Se quantidade maior que 1
    if (cart[index].quantity > 1) {

        cart[index].quantity -= 1;

    } else {

        // Remove item do array
        cart.splice(index, 1);
    }

    // Atualiza carrinho
    updateCart();
}


// ==========================================
// REMOVER ITEM
// ==========================================

function removeItem(index) {

    // Remove item específico
    cart.splice(index, 1);

    // Atualiza carrinho
    updateCart();
}


// ==========================================
// LIMPAR CARRINHO
// ==========================================

function clearCart() {

    // Esvazia array
    cart = [];

    // Atualiza interface
    updateCart();

    // Remove do navegador
    localStorage.removeItem(CART_KEY);
}


// ==========================================
// ATUALIZAR CARRINHO
// ==========================================

function updateCart() {

    // Elementos HTML
    const cartItems =
        document.getElementById("cart-items");

    const cartTotal =
        document.getElementById("cart-total");

    let total = 0;

    // Cria HTML dos itens
    const itemsHTML = cart.map((item, index) => {

        // Calcula subtotal
        const subtotal =
            item.price * item.quantity;

        // Soma total
        total += subtotal;

        return `
            <div class="cart-item">

                <strong>${item.name}</strong>

                <br>

                R$ ${formatPrice(subtotal)}

                <div class="quantity-box">

                    <button onclick="decreaseQuantity(${index})">
                        -
                    </button>

                    <span>${item.quantity}</span>

                    <button onclick="increaseQuantity(${index})">
                        +
                    </button>

                </div>

            </div>
        `;

    }).join("");

    // Atualiza HTML
    cartItems.innerHTML = itemsHTML;

    // Atualiza total
    cartTotal.innerText =
        formatPrice(total);

    // Salva carrinho
    saveCart();
}


// ==========================================
// VALIDAR PEDIDO
// ==========================================

function validateOrder() {

    // Se carrinho vazio
    if (cart.length <= 0) {

        showToast("Carrinho vazio.");

        return false;
    }

    // Tudo certo
    return true;
}


// ==========================================
// CRIAR MENSAGEM DO WHATSAPP
// ==========================================

function createOrderMessage() {

    let total = 0;

    let message =
        `🍺 *NOVO PEDIDO*\n\n`;

    // Percorre itens do carrinho
    cart.forEach(item => {

        const subtotal =
            item.price * item.quantity;

        total += subtotal;

        message +=
            `- ${item.quantity}x ${item.name}\n`;
    });

    // Adiciona total
    message +=
        `\n💰 Total: R$ ${formatPrice(total)}`;

    return encodeURIComponent(message);
}


// ==========================================
// ENVIAR PEDIDO
// ==========================================

function sendOrder() {

    // Valida pedido
    if (!validateOrder()) {
        return;
    }

    // Cria mensagem
    const message =
        createOrderMessage();

    // Cria URL WhatsApp
    const url =
        `https://wa.me/${WHATSAPP_PHONE}?text=${message}`;

    // Abre WhatsApp
    window.open(url, "_blank");

    // Limpa carrinho
    clearCart();

    // Mensagem sucesso
    showToast("Pedido enviado 🍺");
}


// ==========================================
// ANIMAÇÃO AO ROLAR
// ==========================================

function revealOnScroll() {

    // Pega elementos
    const reveals =
        document.querySelectorAll(".reveal");

    reveals.forEach(item => {

        // Altura da tela
        const windowHeight =
            window.innerHeight;

        // Distância topo
        const elementTop =
            item.getBoundingClientRect().top;

        // Quando aparecer ativa animação
        if (elementTop < windowHeight - 100) {

            item.classList.add("active");
        }
    });
}


// ==========================================
// EVENTOS GLOBAIS
// ==========================================

// Evento scroll
window.addEventListener(
    "scroll",
    revealOnScroll
);

// Renderiza produtos ao iniciar
renderProducts();

// Atualiza carrinho
updateCart();

// Ativa animação inicial
revealOnScroll();