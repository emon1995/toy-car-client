import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { useLoaderData, useLocation } from "react-router-dom";

const UpdateToy = () => {
  const { user } = useContext(AuthContext);
  const loadToy = useLoaderData();
  const location = useLocation();

  if (location.pathname === `/updateToy/${loadToy._id}`) {
    document.title = "CarsToyZone | Update Toy";
  }

  const handleAddToy = (e) => {
    e.preventDefault();
    const form = e.target;
    const toy_name = form.toy_name.value;
    const price = parseFloat(form.price.value);
    const quantity = form.quantity.value;
    const rating = form.rating.value;
    const photo = form.photo.value;
    const seller_name = user.displayName;
    const seller_email = user.email;
    const description = form.description.value;
    const singleToy = {
      toy_name,
      price,
      quantity,
      rating,
      photo,
      seller_email,
      seller_name,
      description,
    };
    console.log(singleToy);

    fetch(
      `https://toy-marketplace-server-ochre.vercel.app/updateToy/${loadToy?._id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(singleToy),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire("Good job!", "Toy Update Successfully!", "success");
      });
  };

  return (
    <div className="my-20 flex justify-center items-center m-4">
      <form onSubmit={handleAddToy} className="w-full max-w-lg">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Toy Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="cars"
              name="toy_name"
              defaultValue={loadToy?.toy_name}
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-price"
            >
              Price
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="$20"
              name="price"
              defaultValue={loadToy?.price}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-quantity"
            >
              quantity
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="20"
              name="quantity"
              defaultValue={loadToy?.quantity}
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-rating"
            >
              Rating
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="5"
              name="rating"
              defaultValue={loadToy?.quantity}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Seller Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-seller-name"
              type="text"
              placeholder="$20"
              name="seller_name"
              defaultValue={user?.displayName}
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-seller-email"
            >
              Seller Email
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="example@gmail.com"
              name="seller_name"
              defaultValue={user?.email}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Picture URL
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="url"
              placeholder="http://localhost:5173/addToy"
              name="photo"
              defaultValue={loadToy?.photo}
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-description"
            >
              Description
            </label>
            <textarea
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="text"
              placeholder="details"
              name="description"
              defaultValue={loadToy?.description}
            />
          </div>
        </div>
        <button className="text-white w-full bgColor border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Update Toy
        </button>
      </form>
    </div>
  );
};

export default UpdateToy;
