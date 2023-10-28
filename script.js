document.addEventListener("DOMContentLoaded", function () {
    const cart = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    const productlist = document.getElementById("product-list");
    const checkoutForm = document.getElementById("checkout-form");

    productlist.addEventListener("click", addToCart);
    cart.addEventListener("click", removeFromCart);
    checkoutForm.addEventListener("submit", handleCheckout);

    function addToCart(event) {
        if (event.target.tagName === "LI") {
            const item = event.target;
            const itemName = item.getAttribute("data-name");
            const itemPrice = parseFloat(item.getAttribute("data-price"));

            const cartItem = document.createElement("li");
            cartItem.innerHTML = `${itemName} - $${itemPrice}`;
            cart.appendChild(cartItem);

            updateCartTotal(itemPrice);
        }
    }

    function removeFromCart(event) {
        if (event.target.tagName === "LI") {
            const cartItem = event.target;
            const itemPrice = parseFloat(cartItem.textContent.split(" - $")[1]);
            cart.removeChild(cartItem);

            updateCartTotal(-itemPrice);
        }
    }

    function updateCartTotal(price) {
        const currentTotal = parseFloat(cartTotal.textContent);
        cartTotal.textContent = (currentTotal + price).toFixed(2);
    }

    function handleCheckout(event) {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const total = cartTotal.textContent;

        // Aquí puedes enviar los datos a tu servidor para completar la compra.
        // Por ahora, simplemente mostraremos un mensaje de compra exitosa.
        alert(`Compra exitosa\nNombre: ${name}\nEmail: ${email}\nTotal: $${total}`);
    }
});
