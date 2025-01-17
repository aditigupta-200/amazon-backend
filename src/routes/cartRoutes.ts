import express from 'express';
import { getCartItems, addToCart } from '../controllers/cartController';

const router = express.Router();

// Route to get cart items
router.get('/cart', async (req, res, next) => {
    await getCartItems(req, res, next);
});

// Route to add items to the cart
router.post('/add-to-cart', async (req, res) => {
    await addToCart(req, res);
});

export default router;
