import React, { FC, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import AdditionalInformation from "./AdditionalInformation";
import Description from "./Description";
import ProductInfoHeader from "./ProductInfoHeader";
import Reviews from "./Reviews";
import Videos from "./Videos";
import { fetchYouTubeVideos } from "../../../../services/shared/YoutubeVideo";
import { IProductReviews } from "../../../../interface/ProductsDataInterface";

export type IProductInfo = {
  productName: string;
  productReviews: IProductReviews[];
};
const ProductInfo: FC<IProductInfo> = ({ productName, productReviews }) => {
  const [step, setStep] = useState(0);

  const { data: YouTubeVideo } = useQuery<any, Error>(
    ["youtube-videos", productName],
    () => fetchYouTubeVideos(productName)
  );
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
              return <Videos YouTubeVideo={YouTubeVideo} />;
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
// const nextStep = () => {
//   setStep(step + 1);
// };
// const prevStep = () => {
//   setStep(step - 1);
// };
