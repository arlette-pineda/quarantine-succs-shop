# Wicked Sales Shopping Cart
A full stack Node.js and React shopping cart app.

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
Try the app live [here](https://wicked-sales.arlettepineda.com/)

## Features
- Users can view list of all products
- Users can view details of each product
- Users can add products to cart
- Users can view their cart summary
- Users can go to checkout and place order

## Preview
![Wicked Sales Preview Add to Cart](AddtoCart.gif "Wicked Sales add to cart preview")
![Wicked Sales Preview Checkout](Checkout.gif "Wicked Sales checkout preview")

### Development
- Node.js 10 or higher
- NPM 6 or higher
- Express 4 or higher
- PostgreSQL 10 or higher

### Getting Started

1. Clone the repository.
  ```
    git clone https://github.com/arlette-pineda/wicked-sales-js
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

