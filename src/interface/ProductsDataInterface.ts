import { StaticImageData } from "next/image";

export type Product = {
  _id: string;
  name: string;
  image: string | StaticImageData;
  images?: string[];
  price: number;
  rating: number;
  priceSymbol: string;
};

export type ProductsProps = {
  products: Product[];
};
export type featuredProducts= {
  featuredProducts: Product[];
}
export type ProductCardsProps = {
  products: Product[];
};
