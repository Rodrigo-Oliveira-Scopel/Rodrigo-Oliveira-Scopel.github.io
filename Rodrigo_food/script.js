let cart = [];
let total = 0;

function addToCart(item, price) {
    cart.push({ item, price });
    total += price;
    updateCart();
}

function updateCart() {
    const cartElement = document.getElementById('cart');
    const totalElement = document.getElementById('total');

    cartElement.innerHTML = '';
    cart.forEach((cartItem) => {
        const li = document.createElement('li');
        li.textContent = `${cartItem.item} - R$ ${cartItem.price.toFixed(2)}`;
        cartElement.appendChild(li);
    });

    totalElement.textContent = total.toFixed(2);

    if (cart.length === 0) {
        cartElement.innerHTML = '<li>Carrinho vazio</li>';
    }
}
function addToCart(item, price) {
    cart.push({ item, price });
    total += price;
    updateCart();
}

function removeFromCart(index) {
    total -= cart[index].price; // Subtrai o preço do item removido do total
    cart.splice(index, 1); // Remove o item do carrinho
    updateCart();
}

function updateCart() {
    const cartElement = document.getElementById('cart');
    const totalElement = document.getElementById('total');

    cartElement.innerHTML = '';
    cart.forEach((cartItem, index) => {
        const li = document.createElement('li');
        li.textContent = `${cartItem.item} - R$ ${cartItem.price.toFixed(2)}`;
        
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remover';
        removeButton.onclick = () => removeFromCart(index);

        li.appendChild(removeButton);
        cartElement.appendChild(li);
    });

    totalElement.textContent = total.toFixed(2);

    if (cart.length === 0) {
        cartElement.innerHTML = '<li>Carrinho vazio</li>';
    }
}