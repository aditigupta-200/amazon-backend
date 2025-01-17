// src/models/Cart.ts
import { Schema, model, Document } from 'mongoose';

interface CartItem extends Document {
  productId: Schema.Types.ObjectId;
  quantity: number;
  userId: Schema.Types.ObjectId;
}

const cartItemSchema = new Schema<CartItem>({
  productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
  quantity: { type: Number, required: true },
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
});

const CartItemModel = model<CartItem>('CartItem', cartItemSchema);

export default CartItemModel;
