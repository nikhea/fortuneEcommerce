import { StaticImageData } from "next/image";

export type FeaturedProduct = {
  _id: string;
  name: string;
  image: string | StaticImageData;
  images?: string[];
  price: number;
  rating: number;
  priceSymbol: string;
};

export type FeaturedProductsProps = {
  featuredProducts: FeaturedProduct[];
};

export type FeaturedProductCardsProps = {
  featuredProducts: FeaturedProduct[];
};
