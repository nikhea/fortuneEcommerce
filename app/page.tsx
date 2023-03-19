import Hero from "../components/Hero/Hero";
import FeaturedProducts from "../components/FeaturedProducts/FeaturedProducts";
import Features from "../components/Features/Features";
import NewletterBanner from "../components/newsLetterBanner/newletterBanner";
const HomePage = () => {
  return (
    <div>
      <Hero />
      <FeaturedProducts />
      <Features title="what shopex offer!" />
      <NewletterBanner/>
    </div>
  );
};

export default HomePage;
