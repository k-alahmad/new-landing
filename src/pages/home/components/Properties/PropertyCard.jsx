import React from "react";
import bath from "../../../../assets/icons/bath.svg";
import bedroom from "../../../../assets/icons/bedroom.svg";
import squareft from "../../../../assets/icons/squareft.svg";
import { FaDollarSign } from "react-icons/fa";

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
    <div className="w-full flex justify-center items-center">
      <div className="w-[260px] md:w-[230px] lg:w-[300px] xl:w-[350px] 2xl:w-[400px] drop-shadow-md rounded-md bg-[#FFF]">
        <img
          src={image}
          className="h-[240px] md:h-[180px] lg:h-[260px] xl:h-[300px] 2xl:h-[340px] rounded-t-md w-full"
          alt=""
        />
        <div className="mx-5">
          <div className="w-[190px] bg-primary  text-white flex gap-x-3 px-2 py-2 items-center rounded-md -translate-y-4">
            <FaDollarSign />
            {startingPrice}
          </div>
          <p className="font-semibold text-smaller">{name}</p>
          <p>{smallDescription}</p>
          <div className="h-[1px] bg-gray-300 my-2" />
          <br />
          <br />
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
    </div>
  );
};

export default PropertyCard;
