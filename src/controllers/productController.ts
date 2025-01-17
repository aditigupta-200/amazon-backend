// src/controllers/productController.ts
import { Request, Response, NextFunction } from "express";
import ProductModel from "../models/Product";

// Upload a product
export const uploadProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, description, price, imageUrl, category } = req.body;

    const product = new ProductModel({
      name,
      description,
      price,
      imageUrl,
      category,
    });

    await product.save();
    return res.status(201).json({ product });
  } catch (error) {
    next(error);
  }
};

// Get all products
export const getAllProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const products = await ProductModel.find();
    return res.status(200).json({ products });
  } catch (error) {
    next(error);
  }
};

// Get a single product by ID
export const getProductById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const product = await ProductModel.findById(req.params.productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    return res.status(200).json({ product });
  } catch (error) {
    next(error);
  }
};
