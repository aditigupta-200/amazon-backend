// src/models/Product.ts
import { Schema, model, Document } from 'mongoose';

interface Product extends Document {
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
}

const productSchema = new Schema<Product>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  imageUrl: { type: String, required: true },
  category: { type: String, required: true },
});

const ProductModel = model<Product>('Product', productSchema);

export default ProductModel;
