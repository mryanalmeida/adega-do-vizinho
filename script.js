// CATÁLOGO DO SITE

const products = [
    {
        category: "Copão",
        name: "Copão de Red Label Premium",
        description: "Copão de 700ml com Whisky  + Red Bull 250ml + Gelo de coco.",
        price: 0,
        image: "img/Produtos/red-premium.png",
        available: true
    },
    {
        category: "Copão",
        name: "Copão de Red Label Básico",
        description: "Copão de 700ml com Whisky) + Energético Vibe + Gelo de coco.",
        price: 0,
        image: "img/Produtos/red-basico.png",
        available: true
    },

    {
        category: "Copão",
        name: "Copão de Jack Daniels Premium",
        description: "Copão de 700ml com Whisky + Red Bull 250ml + Gelo de coco.",
        price: 0,
        image: "img/Produtos/jack-premium.png",
        available: true
    },

    {
        category: "Energético",
        name: "Red Bull",
        description: "Energético Red Bull lata 250ml gelado.",
        price: 0,
        image: "https://images.unsplash.com/photo-1622543925917-763c34d1a86e",
        available: true
    },
    {
        category: "Gelo de Sabor",
        name: "Gelo de Morango",
        description: "Gelo saborizado de morango para drinks.",
        price: 0,
        image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd",
        available: true
    },
    {
        category: "Cerveja",
        name: "Heineken Long Neck",
        description: "Long neck Heineken extremamente gelada.",
        price: 0,
        image: "https://images.unsplash.com/photo-1608270586620-248524c67de9",
        available: false
    },
    {
        category: "Combos",
        name: "Combo Whisky + Energético",
        description: "Combo completo com whisky, energético e gelo.",
        price: 0,
        image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b",
        available: true
    }
];

let cart = [];

// TOAST PERSONALIZADO

function showToast(message) {

    const existingToast =
        document.querySelector(".toast-message");

    if (existingToast) {

        existingToast.remove();

    }

    const toast =
        document.createElement("div");

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

    return value
        .toFixed(2)
        .replace(".", ",");

}

function renderProducts(category = null) {

    const container =
        document.getElementById("products-container");

    const categoryTitle =
        document.getElementById("category-title");

    container.innerHTML = "";

    let filteredProducts = products;

    if (category) {

        filteredProducts =
            products.filter(product =>
                product.category === category
            );

        categoryTitle.innerText = category;

    } else {

        categoryTitle.innerText = "Produtos";

    }

    filteredProducts.forEach(product => {

        container.innerHTML += `

            <div class="card">

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

                ?

                `
                        <button
                            class="add-btn"
                            onclick="addToCart('${product.name}')">

                            Adicionar

                        </button>
                        `

                :

                `
                        <button
                            class="out-btn"
                            disabled>

                            ESGOTADO

                        </button>
                        `
            }

                </div>

            </div>

        `;

    });

}

function filterProducts(category) {

    renderProducts(category);

    document
        .getElementById("products-container")
        .scrollIntoView({
            behavior: "smooth"
        });

}

function toggleCart() {

    document
        .getElementById("cart")
        .classList
        .toggle("active");

}

function openCart() {

    document
        .getElementById("cart")
        .classList
        .add("active");

}

function addToCart(productName) {

    const product =
        products.find(item =>
            item.name === productName
        );

    if (!product || !product.available) {

        return;

    }

    const firstItem =
        cart.length === 0;

    const existingItem =
        cart.find(item =>
            item.name === product.name
        );

    if (existingItem) {

        existingItem.quantity += 1;

    } else {

        cart.push({
            name: product.name,
            price: product.price,
            quantity: 1
        });

    }

    updateCart();

    showToast("Produto adicionado ao carrinho 🍺");

    if (firstItem) {

        openCart();

    }

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

function updateCart() {

    const cartItems =
        document.getElementById("cart-items");

    const cartTotal =
        document.getElementById("cart-total");

    const cartCount =
        document.getElementById("cart-count");

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

        const subtotal =
            item.price * item.quantity;

        total += subtotal;

        totalItems += item.quantity;

        cartItems.innerHTML += `

            <div class="cart-item">

                <div>

                    <strong>${item.name}</strong>

                    <br>

                    <small>
                        R$ ${formatPrice(item.price)}
                        x ${item.quantity}
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

                        <button
                            class="remove-btn"
                            onclick="decreaseQuantity(${index})">

                            -

                        </button>

                        <span>${item.quantity}</span>

                        <button
                            class="remove-btn"
                            onclick="increaseQuantity(${index})">

                            +

                        </button>

                    </div>

                </div>

                <button
                    class="remove-btn"
                    onclick="removeItem(${index})">

                    ✕

                </button>

            </div>

        `;

    });

    cartTotal.innerText =
        formatPrice(total);

    cartCount.innerText =
        totalItems;

}

function sendWhatsApp() {

    if (cart.length <= 0) {

        showToast("Seu carrinho está vazio.");

        return;

    }

    const nome =
        document.getElementById("nome");

    const endereco =
        document.getElementById("endereco");

    const pagamento =
        document.getElementById("pagamento");

    const observacao =
        document.getElementById("observacao");

    if (nome.value.trim() === "") {

        showToast("Informe seu nome.");

        nome.focus();

        return;

    }

    if (endereco.value.trim() === "") {

        showToast("Informe seu endereço.");

        endereco.focus();

        return;

    }

    if (pagamento.value === "") {

        showToast("Selecione a forma de pagamento.");

        pagamento.focus();

        return;

    }

    let total = 0;

    let message =
        `🍺 *NOVO PEDIDO - ADEGA DO VIZINHO* %0A%0A`;

    message +=
        `👤 *Nome:* ${nome.value}%0A`;

    message +=
        `📍 *Endereço:* ${endereco.value}%0A`;

    message +=
        `💳 *Pagamento:* ${pagamento.value}%0A%0A`;

    message +=
        `🛒 *Itens do pedido:* %0A`;

    cart.forEach(item => {

        const subtotal =
            item.price * item.quantity;

        total += subtotal;

        message +=
            `- ${item.quantity}x ${item.name} | R$ ${formatPrice(subtotal)}%0A`;

    });

    message +=
        `%0A💰 *Total:* R$ ${formatPrice(total)}%0A`;

    if (observacao.value.trim() !== "") {

        message +=
            `%0A📝 *Observação:* ${observacao.value}%0A`;

    }

    const phone =
        "5511917742509";

    const url =
        `https://wa.me/${phone}?text=${message}`;

    window.open(url, "_blank");

}

renderProducts();

updateCart();