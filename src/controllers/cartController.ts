// src/controllers/cartController.ts
import { Request, Response, NextFunction } from 'express';
import CartItemModel from '../models/Cart';
import ProductModel from '../models/Product';

// Add item to cart
export const addToCart = async (req: Request, res: Response) => {
  const { productId, quantity } = req.body;
  const userId = req.user._id; // Assuming user is authenticated

  try {
    // Check if product exists
    const product = await ProductModel.findById(productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    const cartItem = new CartItemModel({
      productId,
      quantity,
      userId,
    });

    await cartItem.save();
    return res.status(201).json({ cartItem });
  } catch (error) {
    return res.status(500).json({ message: 'Error adding to cart', error });
  }
};

// Get all cart items for a user
export const getCart = async (req: Request, res: Response) => {
  const userId = req.user._id; // Assuming user is authenticated

  try {
    const cartItems = await CartItemModel.find({ userId }).populate('productId');
    return res.status(200).json({ cartItems });
  } catch (error) {
    return res.status(500).json({ message: 'Error fetching cart items', error });
  }
};

export const getCartItems = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const cartItems = await CartItemModel.find({ userId: req.user.id });
        res.json({ success: true, data: cartItems });
    } catch (error) {
        next(error);
    }
};

