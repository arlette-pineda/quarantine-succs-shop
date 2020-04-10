require('dotenv/config');
const express = require('express');

const db = require('./database');
const ClientError = require('./client-error');
const staticMiddleware = require('./static-middleware');
const sessionMiddleware = require('./session-middleware');

const app = express();

app.use(staticMiddleware);
app.use(sessionMiddleware);

app.use(express.json());

app.get('/api/health-check', (req, res, next) => {
  db.query('select \'successfully connected\' as "message"')
    .then(result => res.json(result.rows[0]))
    .catch(err => next(err));
});

// GET products
app.get('/api/products', (req, res, next) => {
  const sql = `
  select "productId",
          "name",
          "price",
          "image",
          "shortDescription"
    from  "products"
  `;
  db.query(sql)
    .then(result => {
      res.status(200).json(result.rows);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

// GET products by ID
app.get('/api/products/:productId', (req, res, next) => {
  const { productId } = req.params;
  if (!parseInt(productId, 10)) {
    return res.status(400).json({
      error: '"productId" must be a positive integer'
    });
  }
  const sql = `
    select *
    from "products"
    where "productId" = $1
  `;
  const value = [productId];
  db.query(sql, value)
    .then(result => {
      const product = result.rows[0];
      if (!product) {
        next();
      } else {
        res.json(product);
      }
    })
    .catch(err => {
      next(err);
    });
});

// GET cart
app.get('/api/cart', (req, res, next) => {
  const sql = `
  select *
  from "carts"
  `;
  db.query(sql)
    .then(result => {
      res.status(200).json(result.rows);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

// POST to cart
app.post('/api/cart/', (req, res, next) => {
  const productId = req.body.productId;
  console.log('the product body here', productId);
  if (!parseInt(productId, 10)) {
    return res.status(400).json({
      error: 'Invalid productId, must be positive integer'
    });
  }
  const sql = `
  select "price"
  from "products"
  where "products"."productId" = $1
  `;
  const value = [productId];
  db.query(sql, value)
    .then(result => {
      if (result.rowCount === 0) {
        throw new ClientError('product not found', 400);
      }

      const price = result.rows[0].price;

      if (req.session && req.session.cartId) {
        return { price: price, cardId: req.session.cartId };
      }

      const insertSql = `
      insert into "carts" ("cartId", "createdAt")
      values (default, default)
      returning "cartId"
      `;
      return Promise.resolve(db.query(insertSql)
        .then(insertResult => {
          return (
            console.log('insertResult here', insertResult),
            { price: price, cartId: insertResult.rows[0].cartId });
        }
        ));
    })
    .then(cartIdPriceResult => {
      req.session.cartId = cartIdPriceResult.cartId;
      const insertCartItemSql = `
      insert into "cartItems" ("cartId", "productId", "price")
      values ($1, $2, $3)
      returning "cartItemId"
      `;
      const values = [req.session.cartId, req.body.productId, cartIdPriceResult.price];

      return (
        db.query(insertCartItemSql, values)
          .then(result => {
            const cartItemId = result.rows[0];
            return cartItemId;
          })
      );
    })
    .then(result => {
      const sql = `
      select "c"."cartItemId",
      "c"."price",
      "p"."productId",
      "p"."image",
      "p"."name",
      "p"."shortDescription"
      from "cartItems" as "c"
      join "products" as "p" using ("productId")
      where "c"."cartItemId" = $1
      `;
      const value = [result.cartItemId];
    })
    .catch(err => {
      next(err);
    });
});

app.use('/api', (req, res, next) => {
  next(new ClientError(`cannot ${req.method} ${req.originalUrl}`, 404));
});

app.use((err, req, res, next) => {
  if (err instanceof ClientError) {
    res.status(err.status).json({ error: err.message });
  } else {
    console.error(err);
    res.status(500).json({
      error: 'an unexpected error occurred'
    });
  }
});

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port', process.env.PORT);
});
