export interface Product {
  id: string;
  name: string;
  price: number;
  colors: string[];
  sizes: string[];
  description: string;
  features: string[];
  category: string;
  rating: number;
  reviews: number;
  images: string[];
  isFeatured: boolean;
  isNew: boolean;
  stock: number;
}

export interface CartItem extends Product {
  quantity: number;
  selectedColor: string;
  selectedSize: string;
}

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  addresses: Address[];
}

export interface Address {
  id: string;
  type: 'billing' | 'shipping';
  firstName: string;
  lastName: string;
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  isDefault: boolean;
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  paymentMethod: string;
  shippingAddress: Address;
  billingAddress: Address;
  createdAt: string;
  updatedAt: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}