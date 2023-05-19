import { useEffect, useState } from "react";
const Gallery = () => {
  const [allImage, setAllImage] = useState([]);
  const [image, setImage] = useState({});

  const handleModal = (id) => {
    fetch(`https://toy-marketplace-server-ochre.vercel.app/toy/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setImage(data);
      });
  };

  useEffect(() => {
    fetch(`https://toy-marketplace-server-ochre.vercel.app/allToys`)
      .then((res) => res.json())
      .then((data) => {
        setAllImage(data);
        // console.log(data);
      });
  }, []);

  return (
    <>
      <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
        <h1 className="text-center font-bold textColor mb-4 text-2xl">
          Gallery
        </h1>
        <div className="-m-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  md:-m-2">
          {allImage.slice(0, 6).map((img) => (
            <div key={img._id} className="w-full">
              <div className=" w-full md:h-5/6 p-1 md:p-2">
                <label
                  onClick={() => handleModal(img._id)}
                  htmlFor="my-modal-6"
                  className="cursor-pointer"
                >
                  <img
                    htmlFor="my-modal-3"
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src={img.photo}
                  />
                </label>
              </div>
            </div>
          ))}
        </div>
      </div>
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="my-modal-6"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <img src={image?.photo} alt="img" />
        </div>
      </div>
    </>
  );
};

export default Gallery;
