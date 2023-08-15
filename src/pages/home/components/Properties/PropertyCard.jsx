import React from "react";
import bath from "../../../../assets/icons/bath.svg";
import bedroom from "../../../../assets/icons/bedroom.svg";
import squareft from "../../../../assets/icons/squareft.svg";
import { FaCoins } from "react-icons/fa";

const PropertyCard = ({
  image,
  startingPrice,
  bathsNumber,
  bedroomNumber,
  area,
  name,
  smallDescription,
}) => {
  return (
    <div className="w-[280px] md:w-[300px] lg:w-[250px] xl:w-[320px] 2xl:w-[360px]  drop-shadow-md rounded-md bg-[#FFF]">
      <img
        src={image}
        className="h-[260px] md:h-[220px] lg:h-[220px] xl:h-[280px] 2xl:h-[300px] rounded-t-md w-full"
        alt=""
      />
      <div className="mx-5">
        <div className="w-[190px] bg-primary  text-white flex gap-x-3 px-2 py-2 items-center rounded-md -translate-y-4">
          <FaCoins size={20} />
          {startingPrice}
        </div>
        <div className="h-20 xl:h-16">
          <p className="font-semibold text-smaller">{name}</p>
          <p>{smallDescription}</p>
        </div>
        {/* <div className="h-[1px] bg-gray-300 my-2" />
        <br /> */}
      </div>
      <div className="bg-[#E7E7E7] px-3 py-2 flex justify-evenly items-center font-bold text-[18px] rounded-b-md">
        <div className="flex flex-col items-center justify-center space-y-1">
          <div className="flex gap-x-1 items-center">
            <p>{bathsNumber} </p>
            <img src={bath} className="w-[24px] h-[24px]" alt="" />
          </div>
          <p className="font-normal text-[12px] text-gray-700">Baths</p>
        </div>
        <div className="flex flex-col items-center justify-center space-y-1">
          <div className="flex gap-x-1 items-center">
            <p>{bedroomNumber} </p>
            <img src={bedroom} className="w-[24px] h-[24px]" alt="" />
          </div>
          <p className="font-normal text-[12px] text-gray-700">Rooms</p>
        </div>
        <div className="flex flex-col items-center justify-center space-y-1">
          <div className="flex gap-x-1 items-center">
            <p className="text-tiny lg:text-smaller">{area} </p>
            <img src={squareft} className="w-[24px] h-[24px]" alt="" />
          </div>
          <p className="font-normal text-[12px] text-gray-700">Square (Ft)</p>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
