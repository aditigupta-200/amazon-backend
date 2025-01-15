"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProducts = exports.createProduct = void 0;
const Product_1 = __importDefault(require("../models/Product"));
const createProduct = async (req, res) => {
    const { name, price, description, image } = req.body;
    try {
        const product = new Product_1.default({ name, price, description, image });
        await product.save();
        res.status(201).json({ message: 'Product created successfully', product });
    }
    catch (error) {
        res.status(500).json({ message: 'Error creating product' });
    }
};
exports.createProduct = createProduct;
const getProducts = async (req, res) => {
    try {
        const products = await Product_1.default.find();
        res.status(200).json(products);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching products' });
    }
};
exports.getProducts = getProducts;
