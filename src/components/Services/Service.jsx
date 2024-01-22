import React from "react";

const Service = ({ data, Title }) => {
  let NewData = null;
  if (Title) {
    NewData = data.filter((item) => item.service === Title);
  } else {
    NewData = data;
  }

  return (
    <>
      <div className="py-10 flex flex-col  ">
        <h2 className="text-2xl text-bold text-second py-4">Mes Services</h2>
        <div className=" grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-4 gap-6 text-center py-8 px-0 justify-center items-center ">
          {NewData.map(({ id, title, description, src,style ,textStyle}) => (
            <div
              key={id}
              className={` flex flex-col justify-center items-start p-5  ${style} w-full h-full sm:h-96 mx-auto`}
            >
              <div className={`pt-5  flex w-24 h-24`}>
                <div
                  className={`m-auto  w-24 h-24 flex justify-center items-start  `}
                >
                  <img className="self-center" src='' alt="service" />
                </div>
              </div>
              <p className={`py-5 mt-4 text-bold text-xl ${textStyle}`}>{title}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Service;