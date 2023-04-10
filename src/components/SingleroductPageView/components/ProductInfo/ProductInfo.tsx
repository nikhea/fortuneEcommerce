import React, { FC, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import AdditionalInformation from "./AdditionalInformation";
import Description from "./Description";
import ProductInfoHeader from "./ProductInfoHeader";
import Reviews from "./Reviews";
import Videos from "./Videos";
import { FetchYoutubeData } from "../../../../services/shared/YoutubeVideo";
import {
  IProductReviews,
  Product,
} from "../../../../interface/ProductsDataInterface";

export type IProductInfo = {
  productName: string;
  productReviews: IProductReviews[];
  product: Product;
};
const ProductInfo: FC<IProductInfo> = ({ productName, productReviews }) => {
  const [step, setStep] = useState(0);

  // const { data: YouTubeVideo } = useQuery<any, Error>(
  //   ["youtube-videos", productName],
  //   () => FetchYoutubeData(productName),
  //   { ...defaultQueryOptions }
  // );
  return (
    <div className="bg-gray-100 shadow-md rounded-md my-10 p-5">
      <ProductInfoHeader step={step} setStep={setStep} />
      <div>
        {(() => {
          switch (step) {
            case 0:
              return <Description />;
            case 1:
              return <AdditionalInformation />;
            case 2:
            // return <Videos YouTubeVideo={YouTubeVideo} />;
            case 3:
              return <Reviews productReviews={productReviews} />;
            default:
              return <Description />;
          }
        })()}
      </div>
    </div>
  );
};

export default ProductInfo;
const defaultQueryOptions = {
  staleTime: 1 * 60 * 60 * 1000, // 1 hour
  cacheTime: 5 * 60 * 60 * 1000, // 5 hours
  refetchOnWindowFocus: false,
};
