import { Link, useLoaderData } from "react-router-dom";

const AllToys = () => {
  const loadToys = useLoaderData();

  console.log(loadToys);
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
              <th>Sub-Category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {loadToys.map((toy, index) => (
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
                    to={`/allToys/${toy._id}`}
                    className="btn active border-none"
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
