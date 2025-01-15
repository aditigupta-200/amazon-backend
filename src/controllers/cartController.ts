// import { Request, Response } from 'express';
// import mongoose from 'mongoose';
// import Cart, { CartItem } from '../models/Cart';

// // Add product to cart
// export const addToCart = async (req: Request, res: Response) => {
//   const { userId, productId, quantity } = req.body;

//   try {
//     const cart = await Cart.findOne({ user: userId });
//     const productObjectId = new mongoose.Types.ObjectId(productId);

//     if (cart) {
//       const itemIndex = cart.items.findIndex((item: CartItem) =>
//         (item.productId as mongoose.Types.ObjectId).equals(productObjectId)
//       );

//       if (itemIndex >= 0) {
//         // Update quantity
//         cart.items[itemIndex].quantity += quantity;
//       } else {
//         // Add new product
//         cart.items.push({ productId, quantity });
//       }

//       await cart.save();
//       res.status(200).json(cart);
//     } else {
//       // Create new cart
//       const newCart = await Cart.create({
//         user: userId,
//         items: [{ productId, quantity }],
//       });
//       res.status(201).json(newCart);
//     }
//   } catch (error) {
//     res.status(500).json({ message: 'Server error' });
//   }
// };

// // Remove item from cart
// export const removeFromCart = async (req: Request, res: Response) => {
//   const { userId, cartItemId } = req.body;

//   try {
//     const cart = await Cart.findOne({ user: userId });

//     if (cart) {
//       cart.items = cart.items.filter((item: CartItem) =>
//         item._id.toString() !== cartItemId
//       );

//       await cart.save();
//       res.status(200).json(cart);
//     } else {
//       res.status(404).json({ message: 'Cart not found' });
//     }
//   } catch (error) {
//     res.status(500).json({ message: 'Server error' });
//   }
// };
