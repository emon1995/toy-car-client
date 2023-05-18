import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link } from "react-router-dom";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [allToys, setAllToys] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/myToys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setAllToys(data);
        // console.log(data);
      });
  }, [user]);

  return (
    <div className="my-20 mx-4">
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Seller Name</th>
              <th>Toy Name</th>
              <th>Seller Email</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {allToys.map((toy, index) => (
              <tr key={toy._id}>
                <th>{index + 1}</th>
                <td>{toy?.seller_name}</td>
                <td>{toy?.toy_name}</td>
                <td>{toy?.seller_email}</td>
                <td>{toy?.price}</td>
                <td>{toy?.quantity}</td>
                <td>
                  <Link
                    to={`/updateToy/${toy._id}`}
                    className="btn bgColor border-none mr-2"
                  >
                    Update
                  </Link>
                  <button
                    to={`/toy/${toy._id}`}
                    className="btn btn-error border-none"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
