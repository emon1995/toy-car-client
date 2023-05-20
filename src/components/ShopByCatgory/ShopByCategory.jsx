import { useEffect, useState } from "react";
// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import SubToy from "../SubToy/SubToy";

const ShopByCategory = () => {
  const [activeTab, setActiveTab] = useState("electric-rc-cars");
  const [toyData, setToyData] = useState([]);
  // const [subToyData, setSubToyData] = useState([]);
  // const [activeSubTab, setActiveSubTab] = useState("monster-trucks");

  const handleTab = (tabName) => {
    setActiveTab(tabName);
    // console.log(tabName);
    // if (tabName === "sports-car") {
    //   setActiveSubTab("monster-trucks");
    // } else if (tabName === "police-car") {
    //   setActiveSubTab("patrol-cars");
    // } else if (tabName === "vintage") {
    //   setActiveSubTab("monster-trucks");
    // }
  };

  // const handleSubTab = (subTab) => {
  //   setActiveSubTab(subTab);
  // };

  // useEffect(() => {
  //   fetch(
  //     `https://toy-marketplace-flame.vercel.app/allToysSubCategory?name=${activeSubTab}`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // console.log(data);
  //       setSubToyData(data);
  //     });
  // }, [activeSubTab]);
  // console.log(activeSubTab);

  // https://toy-marketplace-flame.vercel.app/allToysSubCategory?name=monster-trucks

  // console.log(activeTab);
  useEffect(() => {
    fetch(
      `https://toy-marketplace-flame.vercel.app/allToysSubCategory/${activeTab}`
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setToyData(data);
        // const unique = data.map((v) => v?.sub_Category?.map((m) => m));
        // const uniqueData = unique.map((v) => v.map((a) => a));
        // let uniqueChars = [...new Set(...uniqueData)];
        // setToyData(uniqueChars);
      });
  }, [activeTab]);

  // console.log(toyData);

  return (
    <div className="mt-10">
      <h1 className="text-center font-bold textColor mb-4 text-2xl">
        Shop By Category
      </h1>
      <div className="flex justify-center items-center mx-4">
        <div>
          <div className="tabs">
            <a
              onClick={() => handleTab("electric-rc-cars")}
              className={`tab border-b-4 border-sky-500 text-xl font-bold ${
                activeTab === "electric-rc-cars" ? "tab-active textColor" : ""
              }`}
            >
              Electric RC Cars
            </a>
            <a
              onClick={() => handleTab("nitro-rc-cars")}
              className={`tab border-b-4 border-sky-500 text-xl font-bold ${
                activeTab === "nitro-rc-cars" ? "tab-active textColor" : ""
              }`}
            >
              Nitro RC Cars
            </a>
            <a
              onClick={() => handleTab("gas-powered-rc-cars")}
              className={`tab border-b-4 border-sky-500 text-xl font-bold  ${
                activeTab === "gas-powered-rc-cars"
                  ? "tab-active textColor"
                  : ""
              }`}
            >
              Gas-Powered RC Cars
            </a>
          </div>
          {/* <div className="my-4">
            {toyData?.map((sub, i) => (
              <a
                key={i}
                onClick={() => handleSubTab(`${sub.value}`)}
                className={`tab border-b-4 border-sky-500 text-xl font-bold ${
                  activeSubTab === `${sub.value}` ? "tab-active textColor" : ""
                }`}
              >
                {sub?.label}
              </a>
            ))}
          </div> */}
        </div>
      </div>
      <div className="">
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              {toyData.slice(0, 6).map((toy) => (
                <SubToy key={toy._id} toy={toy}></SubToy>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ShopByCategory;
