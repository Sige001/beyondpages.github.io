// Initialize the cart with data from localStorage or as an empty array
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function toggleCart() {
    const cartContainer = document.getElementById('cart-container');
    cartContainer.style.display = cartContainer.style.display === 'block' ? 'none' : 'block';
}

// Updated addToCart function for the book details page
function addToCart() {
    const title = document.getElementById('book-title').textContent;
    const author = document.getElementById('book-author').textContent;
    const quantity = document.getElementById('quantity').value;
    const format = document.querySelector('input[name="format"]:checked').value;
    const price = format === 'paperback' ? 17.99 : 19.99;

    console.log("Adding to cart:", { title, author, quantity, format, price });

    const cartItem = {
        title,
        author,
        format,
        quantity,
        price: price * quantity, // Calculate total price for quantity
    };


    // Add the new book to the cart
    cart.push(cartItem);

    // Save the updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Update the cart UI after adding the item
    updateCartUI();

    // Debugging: Check what's in the cart
    console.log("Cart after adding item:", cart);

    // Show success message
    alert(`${title} has been added to your cart!`);
}

// Update the cart UI
function updateCartUI() {
    const cartCount = document.getElementById('cart-count');
    const cartItemsList = document.getElementById('cart-items-list');
    const cartTotal = document.getElementById('cart-total');

    // Update cart count
    cartCount.textContent = cart.length;

    // Clear the cart list
    cartItemsList.innerHTML = '';

    // Add each item in the cart to the list
    let total = 0;
    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.title} (${item.format}) - $${item.price.toFixed(2)} x ${item.quantity}`;
        cartItemsList.appendChild(listItem);
        total += item.price;
    });

    // Update total price
    cartTotal.textContent = `Total: $${total.toFixed(2)}`;
}

// Function to handle when the page loads
window.onload = function() {
    updateCartUI(); // Ensure the cart is updated on page load
};

