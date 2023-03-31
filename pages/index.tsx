import Hero from "../src/components/Hero/Hero";
import FeaturedProducts from "../src/components/FeaturedProducts/FeaturedProducts";
import Features from "../src/components/Features/Features";
import NewletterBanner from "../src/components/newsLetterBanner/newletterBanner";
const HomePage = () => {
  return (
    <div>
      <Hero />
      <FeaturedProducts />
      <Features title="what shopex offer!" />
      <NewletterBanner />
    </div>
  );
};

export default HomePage;
