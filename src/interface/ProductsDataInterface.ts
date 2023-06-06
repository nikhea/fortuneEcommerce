import { StaticImageData } from "next/image";

export type Product = {
  _id: string;
  name: string;
  slug: string;
  coverPhoto?: any;
  image?: any;
  images?: string[];
  price: number;
  rating: number;
  priceSymbol: string;
  description: string;
  status?: string;
  product?: any;
  quantity?: number;
  features?: string[];
  availability?: any;
  specifications?: any;
};
export type IRelatedProductItem = {
  _id: string;
  slug: string;
  image: string | StaticImageData;
  name: string;
  price: number;
  priceSymbol: string;
  rating: number;
};
export type SingleInfoPageComponentProduct = {
  _id: string;
  slug: string;
  name: string;
  price: number;
  rating: number;
  priceSymbol: string;
  description: string;
  shortDescription: string;
  quantity?: number;
  product?: any;
};
export type IProductReviews = {
  text: string;
  rating: number;
  name: string;
  date: any;
  photo?: string;
};

export type ProductsProps = {
  products: Product[];
};
export type featuredProducts = {
  featuredProducts: Product[];
};
export type ProductCardsProps = {
  products: Product[];
};

export type WishlistProps = {
  product: Product;
  WishListId: string;
};

// coverPhoto?: string | StaticImageData
// image?: string | StaticImageData;
