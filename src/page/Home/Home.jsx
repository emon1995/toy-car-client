import Banner from "../../components/Banner/Banner";
import Gallery from "../../components/Gallery/Gallery";
import ShopByCategory from "../../components/ShopByCatgory/ShopByCategory";
// import Spinner from "../../components/Spinner/Spinner";

const Home = () => {
  return (
    <div className="my-20">
      <Banner></Banner>
      <Gallery></Gallery>
      <ShopByCategory></ShopByCategory>
    </div>
  );
};

export default Home;
