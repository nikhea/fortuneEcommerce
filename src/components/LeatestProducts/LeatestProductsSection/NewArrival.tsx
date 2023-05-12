import LeatestProductCard from "../LeatestProductCard";
import LeatestProductList from "../LeatestProductList";

const NewArrival = ({ NewArrivalProducts }: any) => {
  const displayProduct = NewArrivalProducts.map((product: any) => (
    <LeatestProductList
      key={product._id}
      _id={product._id}
      name={product.name}
      coverPhoto={product.coverPhoto}
      price={product.price}
      rating={product.rating}
      priceSymbol={product.priceSymbol}
      description={product.description}
    />
  ));
  return <LeatestProductCard displayProduct={displayProduct} />;
};

export default NewArrival;
