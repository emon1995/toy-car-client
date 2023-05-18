import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../../assets/login.svg";
import { toast } from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import GoogleSign from "../../components/GoogleSign/GoogleSign";

const Register = () => {
  const { register, profileName } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  if (location.pathname === `/register`) {
    document.title = "Register";
  }

  const from = location?.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    console.log(name, email, password, photo);

    if ((!name, !email, !password, !photo)) {
      return toast.error("Input Field is empty");
    } else {
      if (password.length < 6) {
        return toast.error("Password at least 6 character");
      }
      register(email, password)
        .then((result) => {
          const currentUser = result.user;
          console.log(currentUser);
          profileName(name, photo)
            .then(() => {})
            .catch((err) => {
              toast.error(err.message);
            });
          navigate(from, { replace: true });
          toast.success("Register Success");
        })
        .catch((err) => {
          toast.error(err.message);
        });
    }
    form.reset();
  };

  return (
    <div>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto flex items-center sm:flex-nowrap flex-wrap">
          <div className=" md:w-1/2 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <img src={img} alt="register" />
          </div>
          <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="textColor font-extrabold text-2xl title-font mb-4">
              Sign Up
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="relative mb-4">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-600"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="password"
                  className="leading-7 text-sm text-gray-600"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="photo"
                  className="leading-7 text-sm text-gray-600"
                >
                  PhotoURL
                </label>
                <input
                  type="url"
                  id="photo"
                  name="photo"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button className="text-white w-full bgColor border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                SignUp
              </button>
            </form>
            <p className="text-lg text-gray-500 mt-3">
              Already have an account?{" "}
              <Link className="text-indigo-500 font-bold" to={`/login`}>
                Login
              </Link>
            </p>
            <GoogleSign from={from}></GoogleSign>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
