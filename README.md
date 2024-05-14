Shopping Cart Project
Description

This project is a comprehensive shopping cart application created using a dummy API. The main features of the application include product browsing, adding items to the cart, and a payment system integrated with Stripe. The aim is to simulate a complete e-commerce experience with the following functionalities:

    Product Listing: Browse through a list of products fetched from a dummy API.
    Shopping Cart: Add, remove, and update products in the shopping cart.
    Stripe Payment Integration: Secure and efficient payment processing using Stripe.

Technologies Used

    Frontend:
        HTML
        CSS
        JavaScript
        React.js (if applicable)
    Backend:
        Node.js (if applicable)
        Express.js (if applicable)
    API: Dummy API for product data
    Payment Gateway: Stripe

Features

    Product Display:
        Fetch and display products from the dummy API.
        Each product includes details such as name, price, and description.

    Shopping Cart:
        Add products to the cart.
        Remove products from the cart.
        Update product quantities in the cart.
        View total price and item count in the cart.

    Checkout and Payment:
        Review cart items before checkout.
        Secure payment processing through Stripe.
        Handle payment success and failure scenarios.

Setup and Installation
git clone https://github.com/yourusername/shopping-cart.git
cd shopping-cart

npm install
REACT_APP_STRIPE_PUBLIC_KEY=your_public_key_here
STRIPE_SECRET_KEY=your_secret_key_here

npm start
