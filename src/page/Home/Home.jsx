import Banner from "../../components/Banner/Banner";
import Feedback from "../../components/Feedback/Feedback";
import Gallery from "../../components/Gallery/Gallery";
import ShopByCategory from "../../components/ShopByCatgory/ShopByCategory";
// import Spinner from "../../components/Spinner/Spinner";

const Home = () => {
  return (
    <div className="my-20">
      <Banner></Banner>
      <Gallery></Gallery>
      <ShopByCategory></ShopByCategory>
      <Feedback></Feedback>
    </div>
  );
};

export default Home;
