import { useState } from "react";
import { Link, useLoaderData, useLocation } from "react-router-dom";

const AllToys = () => {
  const loadToys = useLoaderData();
  const [allToys, setAllToys] = useState(loadToys);
  const [searchText, setSearchText] = useState("");
  const location = useLocation();

  if (location.pathname === `/allToys`) {
    document.title = "CarsToyZone | All Toy";
  }

  const handleSearch = () => {
    fetch(
      `https://toy-marketplace-server-ochre.vercel.app/searchToy/${searchText}`
    )
      .then((res) => res.json())
      .then((data) => {
        setAllToys(data);
      });
  };

  // console.log(loadToys);
  return (
    <div className="my-20 mx-4">
      <div className="flex justify-center">
        <div className="form-control mb-10">
          <div className="input-group">
            <input
              type="text"
              placeholder="Search…"
              className="input input-bordered"
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button
              onClick={handleSearch}
              className="btn btn-square bgColor border-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Seller Name</th>
              <th>Toy Name</th>
              <th>Sub-Category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {allToys &&
              allToys?.map((toy, index) => (
                <tr key={toy._id}>
                  <th>{index + 1}</th>
                  <td>{toy?.seller_name}</td>
                  <td>{toy?.toy_name}</td>
                  <td>
                    {toy?.sub_Category.map((sub, i) => (
                      <span key={i}>{sub.value},</span>
                    ))}
                  </td>
                  <td>{toy?.price}</td>
                  <td>{toy?.quantity}</td>
                  <td>
                    <Link
                      to={`/toy/${toy._id}`}
                      state={toy?.toy_name}
                      className="btn bgColor border-none"
                    >
                      View Details
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
