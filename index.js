const cartItems = [];
const totalPriceElement = document.getElementById('total-price');

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const productElement = button.parentElement;
        const productName = productElement.getAttribute('data-name');
        const productPrice = parseInt(productElement.getAttribute('data-price'));

        cartItems.push({ name: productName, price: productPrice });
        updateCart();
    });
});

function updateCart() {
    const cartItemsList = document.getElementById('cart-items');
    cartItemsList.innerHTML = '';

    let totalPrice = 0;
    cartItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ${item.price}₽`;
        cartItemsList.appendChild(li);
        totalPrice += item.price;
    });

    totalPriceElement.textContent = `Общая сумма: ${totalPrice}₽`;
}
const items = [

];

document.getElementById('searchButton').addEventListener('click', function () {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const results = items.filter(item => item.toLowerCase().includes(query));
    displayResults(results);
});

function displayResults(results) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    if (results.length === 0) {
        resultsContainer.innerHTML = '<li>Ничего не найдено</li>';
        return;
    }

    results.forEach(result => {
        const li = document.createElement('li');
        li.textContent = result;
        resultsContainer.appendChild(li);
    });
}