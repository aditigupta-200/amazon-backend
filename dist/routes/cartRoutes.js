"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import necessary modules
const express_1 = __importDefault(require("express"));
const authController_1 = require("../controllers/authController");
const cartController_1 = require("../controllers/cartController");
const router = express_1.default.Router();
// Route to add an item to the cart
router.post('/', authController_1.protect, cartController_1.addToCart);
// Route to get cart items
router.get('/', authController_1.protect, cartController_1.getCartItems);
// Route to remove an item from the cart
router.delete('/:itemId', authController_1.protect, cartController_1.removeFromCart);
exports.default = router;
