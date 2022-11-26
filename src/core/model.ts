export interface Cart extends Product {
  date: string;
  id: number;
  products: Product;
  userId: number;
}

export interface Product {
  productId: number;
  quantity: number;
}

export interface Details {
  id: number;
  category: string;
  description: string;
  image: string;
  price: string;
  rating: {
    rate: string;
    count: string;
  };
  title: string;
}
