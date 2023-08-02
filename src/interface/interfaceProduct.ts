export interface Product {
  id: number;
  title: string;
  brand: string;
  images: string[];
  // Add other properties of the product if available
}
export interface ProductState {
  products: Product[];
  basket: BasketItem[];
}
export interface RootState {
  root: ProductState;
}
export interface BasketItem {
  id: number;
  title: string;
  brand: string;
  images: string[];
  quantity: number; // Количество товара в корзине
}
