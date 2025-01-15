"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeFromCart = exports.getCartItems = exports.addToCart = void 0;
const Cart_1 = __importDefault(require("../models/Cart"));
const Product_1 = __importDefault(require("../models/Product"));
// Add an item to the cart
const addToCart = async (req, res, next) => {
    const { productId } = req.body;
    try {
        const product = await Product_1.default.findById(productId);
        if (!product) {
            res.status(404).json({ message: 'Product not found' });
            return;
        }
        let cart = await Cart_1.default.findOne({ user: req.user._id });
        if (!cart) {
            cart = new Cart_1.default({ user: req.user._id, items: [] });
        }
        const existingItem = cart.items.find((item) => item.product.equals(productId));
        if (existingItem) {
            existingItem.quantity += 1;
        }
        else {
            cart.items.push({ product: productId, quantity: 1 });
        }
        await cart.save();
        res.status(201).json(cart);
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to add to cart', error });
    }
};
exports.addToCart = addToCart;
// Get cart items
const getCartItems = async (req, res, next) => {
    try {
        const cart = await Cart_1.default.findOne({ user: req.user._id }).populate('items.product');
        if (!cart) {
            res.status(404).json({ message: 'Cart not found' });
            return;
        }
        res.json(cart.items);
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to fetch cart items', error });
    }
};
exports.getCartItems = getCartItems;
// Remove an item from the cart
const removeFromCart = async (req, res, next) => {
    const { itemId } = req.params;
    try {
        const cart = await Cart_1.default.findOne({ user: req.user._id });
        if (!cart) {
            res.status(404).json({ message: 'Cart not found' });
            return;
        }
        cart.items = cart.items.filter((item) => !item._id.equals(itemId));
        await cart.save();
        res.json({ message: 'Item removed from cart' });
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to remove item', error });
    }
};
exports.removeFromCart = removeFromCart;
