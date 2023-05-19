import { useLoaderData } from "react-router-dom";

const SingleToy = () => {
  const loadToy = useLoaderData();
  // console.log(loadToy);

  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                TOY NAME
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
                {loadToy?.toy_name}
              </h1>
              <div className="flex mb-4">
                <a className="flex-grow text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1">
                  Description
                </a>
              </div>
              <p className="leading-relaxed mb-4">{loadToy?.description}</p>
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500">Seller Name</span>
                <span className="ml-auto text-gray-900">
                  {loadToy?.seller_name}
                </span>
              </div>
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500">Seller Email</span>
                <span className="ml-auto text-gray-900">
                  {loadToy?.seller_email}
                </span>
              </div>
              <div className="flex border-t border-b mb-6 border-gray-200 py-2">
                <span className="text-gray-500">Quantity</span>
                <span className="ml-auto text-gray-900">
                  {loadToy?.quantity}
                </span>
              </div>
              <div className="flex border-b border-gray-200 mb-6 pb-2 pt-0 ">
                <span className="text-gray-500">Rating</span>
                <span className="ml-auto text-gray-900">{loadToy?.rating}</span>
              </div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  ${loadToy?.price}
                </span>
              </div>
            </div>
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src={loadToy?.photo}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleToy;
