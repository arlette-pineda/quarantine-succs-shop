# Quarantine Succs Shop
A full stack Node.js and React e-commerce app.

## Technologies Used
- React.js
- Node.js
- Express
- PostgreSQL
- Bootstrap 4
- Webpack
- CSS3
- HTML5
- FontAwesome
- Babel

## Live Demo
Try the app live [here!](https://wicked-sales.arlettepineda.com/)

## Features
- Users can view list of all products
- Users can view details of each product
- Users can add products to cart
- Users can remove products from cart
- Users can view their cart summary
- Users can go to checkout and place order

## Preview
![Quarantine Succs Preview Add to Cart](addToCart.gif "Quarantine Succs add to cart preview")
![Quarantine Succs Preview Checkout](checkout.gif "Quarantine Succs checkout preview")
![Quarantine Succs Preview Scroll to Top](scrollToTop.gif "Quarantine Succs scroll to top preview")

### Development
- Node.js 10 or higher
- NPM 6 or higher
- Express 4 or higher
- PostgreSQL 10 or higher

### Getting Started

1. Clone the repository.
  ```
    git clone https://github.com/arlette-pineda/quarantine-succs-shop
  ```
2. Change directories to folder.
  ```
    cd wicked-sales-js
  ```
3. Install dependencies with NPM.
  ```
     npm install
  ```
4. Start PostgreSQL server.
  ```
     sudo service postgresql start
  ```
5. Create database.
  ```
     createdb wickedSales
  ```
6. Import database to PostgreSQL.
  ```
    npm run db:import
  ```
7. You many now start the project. It can be viewed by going to http://localhost:3000 in your browser. 
  ```javascript
    npm run dev 
  ```

