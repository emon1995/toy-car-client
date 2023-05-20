import { useLocation } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Feedback from "../../components/Feedback/Feedback";
import Gallery from "../../components/Gallery/Gallery";
import ShopByCategory from "../../components/ShopByCatgory/ShopByCategory";
import Testimonial from "../../components/Testimonial/Testimonial";
// import Spinner from "../../components/Spinner/Spinner";

const Home = () => {
  const location = useLocation();

  if (location.pathname === `/`) {
    document.title = "RaceToyZone | Home";
  }

  return (
    <div className="my-20">
      <Banner></Banner>
      <Gallery></Gallery>
      <ShopByCategory></ShopByCategory>
      <Feedback></Feedback>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
