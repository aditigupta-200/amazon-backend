// import mongoose, { Document, Schema } from 'mongoose';

// // CartItem Interface
// export interface CartItem extends Document {
//   _id: mongoose.Types.ObjectId;
//   productId: mongoose.Types.ObjectId;
//   quantity: number;
// }

// // Cart Interface
// export interface Cart extends Document {
//   user: mongoose.Types.ObjectId;
//   items: CartItem[];
// }

// // Cart Schema
// const cartSchema = new Schema<Cart>({
//   user: { type: mongoose.Types.ObjectId, ref: 'User', required: true },
//   items: [
//     {
//       productId: { type: mongoose.Types.ObjectId, ref: 'Product', required: true },
//       quantity: { type: Number, required: true, default: 1 },
//     },
//   ],
// });

// const Cart = mongoose.model<Cart>('Cart', cartSchema);

// export default Cart;
