import { Link } from "react-router-dom";
// import AOS from "aos";
import "aos/dist/aos.css";

const SubToy = ({ toy }) => {
  const { _id, toy_name, price, rating, photo } = toy || {};
  return (
    <>
      <div
        className="p-4 md:w-1/3"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src={photo}
            alt="blog"
          />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              Toy Name
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              {toy_name}
            </h1>
            <p className="leading-relaxed mb-3">Price: ${price}</p>
            <p className="leading-relaxed mb-3">Rating: {rating}</p>
            <div className="flex items-center flex-wrap ">
              <Link
                to={`/toy/${_id}`}
                className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
              >
                View Details
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubToy;
