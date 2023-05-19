import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [allToys, setAllToys] = useState([]);
  const [control, setControl] = useState(false);
  const [activeTab, setActiveTab] = useState("asc");

  const handleTab = (tabName) => {
    setActiveTab(tabName);
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://toy-marketplace-server-ochre.vercel.app/deleteToy/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setControl(!control);
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          });
      }
    });
  };

  useEffect(() => {
    fetch(
      `https://toy-marketplace-server-ochre.vercel.app/myToys/${user?.email}?sort=${activeTab}`
    )
      .then((res) => res.json())
      .then((data) => {
        setAllToys(data);
        // console.log(data);
      });
  }, [user, control, activeTab]);

  return (
    <div className="my-20 mx-4">
      <div className="flex justify-center items-center mx-4 mb-8">
        <div className="tabs">
          <a
            onClick={() => handleTab("asc")}
            className={`tab border-b-4 border-sky-500 text-xl font-bold ${
              activeTab === "asc" ? "tab-active textColor" : ""
            }`}
          >
            Ascending
          </a>
          <a
            onClick={() => handleTab("dsc")}
            className={`tab border-b-4 border-sky-500 text-xl font-bold ${
              activeTab === "dsc" ? "tab-active textColor" : ""
            }`}
          >
            Descending
          </a>
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
                    onClick={() => handleDelete(toy._id)}
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
