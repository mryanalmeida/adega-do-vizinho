const products = [
    {
        category: "Copão",
        name: "Copão de Whisky",
        price: 40,
        image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b",
        available: true
    },
    {
        category: "Copão",
        name: "Copão de Whisky economico",
        price: 25,
        image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b",
        available: true
    },
    {
        category: "Doses",
        name: "Dose Jack Daniels",
        price: 15,
        image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b",
        available: true
    },
    {
        category: "Energético",
        name: "Red Bull",
        price: 14,
        image: "https://images.unsplash.com/photo-1622543925917-763c34d1a86e",
        available: true
    },
    {
        category: "Gelo de Sabor",
        name: "Gelo de Morango",
        price: 8,
        image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd",
        available: true
    },
    {
        category: "Cerveja",
        name: "Heineken Long Neck",
        price: 12,
        image: "https://images.unsplash.com/photo-1608270586620-248524c67de9",
        available: false
    },
    {
        category: "Combos",
        name: "Combo Whisky + Energético",
        price: 120,
        image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b",
        available: true
    }
];
let cart = [];
function renderProducts(category = null) {
    const container =
        document.getElementById("products-container");
    const categoryTitle =
        document.getElementById("category-title");
    container.innerHTML = "";
    let filteredProducts = products;
    if (category) {
        filteredProducts = products.filter(product =>
            product.category === category
        );
        categoryTitle.innerText = category;
    } else {
        categoryTitle.innerText = "Produtos";
    }
    filteredProducts.forEach(product => {
        container.innerHTML += `
    <div class="card">
        <img src="${product.image}">
        <div class="card-content">
            <h4>${product.name}</h4>
            <div class="price">
                R$ ${product.price.toFixed(2)}
            </div>
            ${product.available
                ?
                `<button
                    class="add-btn"
                    onclick="addToCart('${product.name}', ${product.price})">
                    Adicionar
                </button>`
                :
                `<button
                    class="out-btn"
                    disabled>
                    ESGOTADO
                </button>`
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
renderProducts();
function toggleCart() {
    document
        .getElementById("cart")
        .classList
        .toggle("active");
}
function addToCart(name, price) {
    cart.push({
        name,
        price
    });
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
    cart.forEach((item, index) => {
        total += item.price;
        cartItems.innerHTML += `
    <div class="cart-item">
        <div>
            <strong>${item.name}</strong>
            <br>
            R$ ${item.price.toFixed(2)}
        </div>
        <button
            class="remove-btn"
            onclick="removeItem(${index})">
            ✕
        </button>
    </div>
`;
    });
    cartTotal.innerText = total.toFixed(2);
    cartCount.innerText = cart.length;
}
function sendWhatsApp() {
    if (cart.length <= 0) {
        alert("Seu carrinho está vazio!");
        return;
    }
    const nome =
        document.getElementById("nome").value;
    const endereco =
        document.getElementById("endereco").value;
    const pagamento =
        document.getElementById("pagamento").value;
    const observacao =
        document.getElementById("observacao").value;
    let total = 0;
    let message =
        `🍺 *NOVO PEDIDO - ADEGA DO VIZINHO* %0A%0A`;
    message += `👤 Nome: ${nome}%0A`;
    message += `📍 Endereço: ${endereco}%0A`;
    message += `💳 Pagamento: ${pagamento}%0A%0A`;
    message += `🛒 *Itens:* %0A`;
    message += `%0A💰 Total: R$ ${total.toFixed(2)}%0A`;
    if (observacao) {
        message +=
            `%0A📝 Observação: ${observacao}%0A`;
    }
    cart.forEach(item => {
        total += item.price;
        message +=
            `- ${item.name} | R$ ${item.price.toFixed(2)}%0A`;
    });
    // TROQUE PELO SEU NÚMERO
    const phone = "5511917742509";
    const url =
        `https://wa.me/${phone}?text=${message}`;
    window.open(url, "_blank");
}